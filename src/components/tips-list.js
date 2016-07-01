import React, {Component} from 'react';
import {connect} from 'react-redux';

class TipsList extends Component {

  listTips() {
    const tipsList =  this.props.details[0].response.venue.tips.groups[0].items;
    console.log(tipsList);
    return tipsList.map((tip) => {
      return (
        <div key={tip.id} class="tip-box">{tip.text}</div>
      )
    })
  }


  render() {
      return (
        <div className="col-md-7">
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
