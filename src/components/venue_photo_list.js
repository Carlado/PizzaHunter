import React, {Component} from 'react';
import Slider from 'react-slick';


export default class PhotoList extends Component {
  constructor(props) {
    super(props);
  }

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
            <article className="container carousel">
              <Slider {...settings}>
                {this.listPhotos()}
              </Slider>
            </article>
      )
    } else {
      return <article />
    }
  }
}
