import React, {Component} from 'react';
import {connect} from 'react-redux';
import Slider from 'react-slick';


class PhotoList extends Component {
  listPhotos() {
      const photoList = this.props.photos.response.photos.items;
      return photoList.map((photo) => {
        const venuePhoto = photo.prefix + "250x250" + photo.suffix;
        return (
          <div key={photo.id}>
            <img
            src={venuePhoto}
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
      slidesToScroll: 1,
      className: 'inner-carousel',
      lazyLoad: true,
      draggable: true,
      responsive: [
        { breakpoint: 590, settings: { slidesToShow: 1 } },
        { breakpoint: 800, settings: { slidesToShow: 2 } },
        { breakpoint: 992, settings: { slidesToShow: 3 } },
        { breakpoint: 1200, settings: { slidesToShow: 4 } }
      ]
    }
    if (this.props.photos && this.props.photos.response.photos.items.length >= 1 ) {
      return (
            <div className="container carousel">
              <Slider {...settings}>
                {this.listPhotos()}
              </Slider>
            </div>
      )
    } else {
      return <div></div>
    }
  }
}

function mapStateToProps(state) {
  return {
    photos: state.photos
  }
}

export default connect(mapStateToProps)(PhotoList);
