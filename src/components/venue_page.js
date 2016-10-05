import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getDetails, getPhotos} from '../actions/index';
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
    if (!this.props.details) {
      return (
        <div>
          <NavBar />
          <p className="loading-info">Loading venue...</p>
        </div>
      );
    }
    const details = this.props.details.response.venue;
    return (
      <div className="venue-page">
        <NavBar />
        <div className="container">
          <PhotoList photos={this.props.photos} />
          <div className="row">
            <TipsList details={this.props.details}/>
            <InfoBox details={this.props.details} />
          </div>
        </div>
      </div>
    );

  }
}

function mapStateToProps(state) {
  return {
    details: state.details,
    photos: state.photos
  }
}

export default connect(mapStateToProps, {getDetails, getPhotos})(VenuePage);
