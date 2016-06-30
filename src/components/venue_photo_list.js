import React, {Component} from 'react';
import {connect} from 'react-redux';
import Slider from 'react-slick';


class PhotoList extends Component {
  getPhotos() {
    const photoList = this.props.details[0].response.venue.photos.groups[0].items;
    return photoList.map((photo) => {

      return (
          <img key={photo.id}
          src={photo.prefix + "200x200" + photo.suffix}
          alt="venue photo" />
      )
    })
  }

  render() {
    const settings = {
      arrows: true,
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      className: 'inner-carousel'
    }
    return (
      <div className="container carousel">
        <Slider {...settings}>
          {this.getPhotos()}
        </Slider>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    details: state.details
  }
}

export default connect(mapStateToProps)(PhotoList);
