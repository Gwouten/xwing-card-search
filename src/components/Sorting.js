import React from 'react';
import { connect } from 'react-redux';
import { setSortMethod } from '../actions/filters';

class Sorting extends React.Component{

  onSetSortMethod = (e) => {
    const sortMethod = e.target.value;
    this.props.setSortMethod(sortMethod);
  };

  render() {
    return (
      <div className="sorting">
        <input
          className="sorting__radio-button"
          type="radio" id="sortAZ"
          name="sortMethod" value="sortAZ"
          onChange={this.onSetSortMethod}
          checked={this.props.filters.sortMethod === "sortAZ"} />
        <label className="sorting__label" htmlFor="sortAZ">A - Z</label>
        <input
          className="sorting__radio-button"
          type="radio"
          id="sortZA"
          name="sortMethod"
          value="sortZA"
          onChange={this.onSetSortMethod}
          checked={this.props.filters.sortMethod === "sortZA"} />
        <label className="sorting__label" htmlFor="sortZA">Z - A</label>
        <input
          className="sorting__radio-button"
          type="radio"
          id="psAsc"
          name="sortMethod"
          value="psAsc"
          onChange={this.onSetSortMethod}
          checked={this.props.filters.sortMethod === "psAsc"} />
        <label className="sorting__label" htmlFor="psAsc">PS:<br/>1&nbsp;-&nbsp;9</label>
        <input
          className="sorting__radio-button"
          type="radio"
          id="psDesc"
          name="sortMethod"
          value="psDesc"
          onChange={this.onSetSortMethod}
          checked={this.props.filters.sortMethod === "psDesc"} />
        <label className="sorting__label" htmlFor="psDesc">PS:<br/>9&nbsp;-&nbsp;1</label>
        <input
          className="sorting__radio-button"
          type="radio"
          id="pointsAsc"
          name="sortMethod"
          value="pointsAsc"
          onChange={this.onSetSortMethod}
          checked={this.props.filters.sortMethod === "pointsAsc"} />
        <label className="sorting__label" htmlFor="pointsAsc">Points:<br/>0&nbsp;-&nbsp;100</label>
        <input
          className="sorting__radio-button"
          type="radio"
          id="pointsDesc"
          name="sortMethod"
          value="pointsDesc"
          onChange={this.onSetSortMethod}
          checked={this.props.filters.sortMethod === "pointsDesc"} />
        <label className="sorting__label" htmlFor="pointsDesc">Points:<br/>100&nbsp;-&nbsp;0</label>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setSortMethod: (sortMethod) => dispatch(setSortMethod(sortMethod)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
