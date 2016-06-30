import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getDetails, getPhotos} from '../actions/index';
import {Link} from 'react-router';
import NavBar from './navbar';
import PhotoList from './venue_photo_list';

class VenuePage extends Component {
  componentWillMount() {
    this.props.getDetails(this.props.params.id);
    this.props.getPhotos(this.props.params.id);
  }

  render() {
    if (this.props.details[0]) {
      const details = this.props.details[0].response.venue;
      return (
        <div>
          <NavBar />
          <div>
            <Link to="/results">Back!</Link>
          </div>
          <div className="container">
            <h4>{details.name}</h4>
            <PhotoList />
          </div>

        </div>
      )
    } else {
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

export default connect(mapStateToProps, {getDetails, getPhotos})(VenuePage);
