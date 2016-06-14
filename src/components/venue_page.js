import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getDetails} from '../actions/index';
import {Link} from 'react-router';

class VenuePage extends Component {
  componentWillMount() {
    this.props.getDetails(this.props.params.id);
  }

  render() {
    if (this.props.details[0]) {
      console.log(this.props.details);
      const details = this.props.details[0].response.venue;
      return (
        <div>
          <div>
            <Link to="/">Back!</Link>
          </div>
          <div>
            <h4>{details.name}</h4>
          </div>
        </div>
      )
    } else {
      return (
        <div>...</div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    details: state.details
  }
}

export default connect(mapStateToProps, {getDetails})(VenuePage);
