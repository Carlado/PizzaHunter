import React, {Component} from 'react';
import {connect} from 'react-redux';
import Slider from 'react-slick';


class PhotoList extends Component {
  listPhotos() {
    const photoList = this.props.photos[0].response.photos.items;
    return photoList.map((photo) => {

      return (
        <div key={photo.id}>
          <img
          src={photo.prefix + "200x200" + photo.suffix}
          alt="venue photo" />
        </div>
      )
    })
  }

  render() {
    const settings = {
      arrows: true,
      dots: false,
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 2,
      className: 'inner-carousel',
      lazyLoad: true,
      draggable: true
    }
    return (
      <div className="container carousel">
        <Slider {...settings}>
          {this.listPhotos()}
        </Slider>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    photos: state.photos
  }
}

export default connect(mapStateToProps)(PhotoList);
