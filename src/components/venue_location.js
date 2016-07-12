import React, {Component} from 'react';
import { connect } from 'react-redux';

class SidebarLocation extends Component {
  getLocation() {
    const data = this.props.venues[0];
    if (data && data.meta.code === 200) {
      const location = data.response.geocode.displayString;
      return <p className="venue-location">Showing the most delicious Pizzas in {location}</p>;
    } else if (data && data.meta.code === 400) {
      return <p className="venue-location">Location not found</p>
    }
  }

  render() {
      return <div>{this.getLocation()}</div>
    }

}

function mapStateToProps(state) {
  return {
    venues: state.venues
  }
}

export default connect(mapStateToProps)(SidebarLocation);
