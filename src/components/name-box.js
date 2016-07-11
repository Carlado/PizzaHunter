import React, {Component} from 'react';
import {connect} from 'react-redux';

class NameBox extends Component {
  render() {
    const details = this.props.details[0].response.venue;
    return (
      <div className="row name-box venue-content">
        <div className="col-sm-8">
          <h3>{details.name}</h3>
        </div>
        <div className="col-sm-4">
          <div className="venue-page-rating">
            {details.rating ?
              <span>{details.rating}</span> :
              <span>-</span>
            }
          </div>
        </div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    details: state.details
  }
}

export default connect(mapStateToProps)(NameBox);
