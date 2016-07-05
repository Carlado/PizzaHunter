import React, {Component} from 'react';
import { connect } from 'react-redux';

class SidebarLocation extends Component {
  getLocation() {
    if (this.props.venues[0]) {
      const location = this.props.venues[0].response.geocode.displayString;
      return <p className="venue-location">Showing the most delicious Pizzas in {location}</p>;
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
