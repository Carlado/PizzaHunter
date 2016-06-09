import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getVenues} from '../actions/index';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.getVenues();
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
        value={this.state.term}
        onChange={this.onInputChange}
        className="form-control" placeholder="Enter city"/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">S</button>
        </span>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    venues: state.venues
  }
}

export default connect(mapStateToProps, {getVenues})(SearchBar);
