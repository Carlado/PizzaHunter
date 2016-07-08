import React, {Component} from 'react';
import {connect} from 'react-redux';

class TipsList extends Component {

  listTips() {
    const tipsList =  this.props.details[0].response.venue.tips.groups[0].items;
    return tipsList.map((tip) => {
      return (
        <div key={tip.id}>
            {tip.user &&
              <div className="tips-box">
                <p>
                <img className="user-photo" src={tip.user.photo.prefix+"40x40"+tip.user.photo.suffix} />
                  {tip.user.firstName} {tip.user.lastName} says:
                </p>
                {tip.text}
              </div>
            }
        </div>
      )
    })
  }




  render() {
      return (
        <div className="col-md-8">
          {this.listTips()}
        </div>
      )
  }
}

function mapStateToProps(state) {
  return {
    details: state.details
  }
}

export default connect(mapStateToProps)(TipsList);
