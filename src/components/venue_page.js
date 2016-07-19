import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getDetails, getPhotos, clearPrevious} from '../actions/index';
import NavBar from './navbar';
import PhotoList from './venue_photo_list';
import TipsList from './tips-list';
import InfoBox from './info-box';
import NameBox from './name-box';

class VenuePage extends Component {
  componentWillMount() {
    
    this.props.getDetails(this.props.params.id);
    this.props.getPhotos(this.props.params.id);
  }

  render() {
    if (this.props.details[0]) {
      console.log("Rendering with props!");
      const details = this.props.details[0].response.venue;
      return (
        <div className="venue-page">
          <NavBar />
          <div className="container">
            <PhotoList />

            <div className="row">
              <TipsList />
              <InfoBox />
            </div>
          </div>

        </div>
      )
    } else {
      console.log("Rendering without props!");
      return (
        <div><NavBar /></div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    details: state.details
  }
}

export default connect(mapStateToProps, {getDetails, getPhotos, clearPrevious})(VenuePage);
