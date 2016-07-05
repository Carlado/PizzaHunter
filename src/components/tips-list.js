import React, {Component} from 'react';
import {connect} from 'react-redux';

class TipsList extends Component {

  listTips() {
    const tipsList =  this.props.details[0].response.venue.tips.groups[0].items;
    return tipsList.map((tip, i) => {
      return (
        <div key={tip.id}>
          {i < 10 ?
            <div className="tips-box">{tip.text}</div> :
            <div className="hidden-tips">
              <div className="tips-box">{tip.text}</div>
            </div>

          }
        </div>
      )
    })
  }

  loadMore() {
    const hiddenTips = document.getElementsByClassName('hidden-tips');
    const loadMoreBtn = document.querySelector('.load-more');
    for (var i=0;i < hiddenTips.length; i+=1) {
      hiddenTips[i].style.display = 'block';
    }
    loadMoreBtn.style.display = 'none';

  }


  render() {
      return (
        <div className="col-md-8">
          {this.listTips()}
          <button className="btn btn-default load-more" onClick={this.loadMore}>Load all tips...</button>
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
