import React from 'react';
import { connect } from 'react-redux';
import {
  startSetFilters,
  setTextFilters,
  setcardTypePilotFilters,
  setcardTypeUpgradeFilters,
  setFactionFilters,
  setMinPointsFilters,
  setMaxPointsFilters
} from '../actions/filters';

class Filter extends React.Component {

  state = {
    filterMenuHidden: false
  }

  onTextFilter = (e) => {
    const text = e.target.value;
    this.props.setTextFilters(text);
  }

  onFactionSelect = (e) => {
    const faction = e.target.value;
    this.props.setFactionFilters(faction);
  }

  onPilotSelected = () => {
    this.props.setPilotsSelected(!this.props.filters.cardTypePilot);
  }

  onUpgradeSelected = () => {
    this.props.setUpgradesSelected(!this.props.filters.cardTypeUpgrade);
  }

  handleClear = (e) => {
    e.preventDefault();
    e.target.parentElement.firstChild.value = '';
    this.props.setTextFilters('');
  }

  onSetMinPoints = (e) => { this.props.setMinPointsFilters(e.target.value) }

  onSetMaxPoints = (e) => { this.props.setMaxPointsFilters(e.target.value) }

  onMaxPointsFocus = () => { this.props.setMaxPointsFilters('')}

  clearPoints = (e) => {
    e.preventDefault();
    this.props.setMinPointsFilters(-3);
    this.props.setMaxPointsFilters(100);
  }

  toggleFilterMenu = (e) => {
    e.preventDefault();
    this.setState({
      filterMenuHidden: !this.state.filterMenuHidden
    });
  }

  render(){
    return (
      <form className={`filter content-container ${this.state.filterMenuHidden ? 'hidden' : 'showing'}`}>
        <div className="filter__text__search">
          <input className="filter__input" type="text" name="textQuery" placeholder="Enter the text you're looking for" onChange={this.onTextFilter} />
          <button className="filter__text__search__button button" onClick={this.handleClear}>Clear</button>
        </div>

        <div className="filter__wrapper">
          <h2 className="filter__title">Faction</h2>
          <input
            className="filter__faction__search__radio-button"
            type="radio"
            id="faction_any"
            name="faction"
            value="any"
            onChange={this.onFactionSelect}
            checked={this.props.filters.faction === "any"} />
          <label className="filter__label" htmlFor="faction_any">Any</label>
          <input
            className="filter__faction__search__radio-button"
            type="radio"
            id="faction_rebel"
            name="faction"
            value="rebel"
            onChange={this.onFactionSelect}
            checked={this.props.filters.faction === "rebel"} />
          <label className="filter__label" htmlFor="faction_rebel">Rebel</label>
          <input
            className="filter__faction__search__radio-button"
            type="radio"
            id="faction_empire"
            name="faction"
            value="empire"
            onChange={this.onFactionSelect}
            checked={this.props.filters.faction === "empire"} />
          <label className="filter__label" htmlFor="faction_empire">Empire</label>
          <input
            className="filter__faction__search__radio-button"
            type="radio"
            id="faction_scum"
            name="faction"
            value="scum"
            onChange={this.onFactionSelect}
            checked={this.props.filters.faction === "scum"} />
          <label className="filter__label" htmlFor="faction_scum">Scum</label>
        </div>

        <div className="filter__wrapper">
          <h2 className="filter__title">Card Type</h2>
          <input
            className="filter__card__type__checkbox"
            type="checkbox"
            id="pilot"
            name="pilot"
            value="pilot"
            checked={this.props.filters.cardTypePilot}
            onChange={this.onPilotSelected} />
          <label className="filter__label filter__label--checkbox" htmlFor="pilot">Pilot</label>
          <input
            className="filter__card__type__checkbox"
            type="checkbox"
            id="upgrade"
            name="upgrade"
            value="upgrade"
            checked={this.props.filters.cardTypeUpgrade}
            onChange={this.onUpgradeSelected} />
          <label className="filter__label filter__label--checkbox" htmlFor="upgrade">Upgrade</label>
        </div>

        <div className="filter__points">
          <h2 className="filter__title">Points Range</h2>
          <p className="filter__points__text">Show cards with a cost between</p>
          <p className="filter__points__text">
            <input
              className="filter__input filter__input--points"
              name="minPoints"
              type="number"
              min="-3"
              max="100"
              step="1"
              onChange={this.onSetMinPoints}
              value={this.props.filters.minPoints} />
           and
            <input
              className="filter__input filter__input--points"
              name="maxPoints" type="number"
              min="-3"
              max="100"
              step="1"
              onChange={this.onSetMaxPoints}
              onFocus={this.onMaxPointsFocus}
              value={this.props.filters.maxPoints} />
          </p>
          <button className="filter__points__button button" onClick={this.clearPoints}>Reset</button>
        </div>
        <button className="filter__toggle__button button" onClick={this.toggleFilterMenu}>Results</button>
      </form>
    );
  }
}

        const mapStateToProps = (state) => ({
          filters: state.filters
        });

        const mapDispatchToProps = (dispatch) => ({
          setTextFilters: (text) => dispatch(setTextFilters(text)),
          setPilotsSelected: (cardTypePilot) => dispatch(setcardTypePilotFilters(cardTypePilot)),
          setUpgradesSelected: (cardTypeUpgrade) => dispatch(setcardTypeUpgradeFilters(cardTypeUpgrade)),
          setFactionFilters: (faction) => dispatch(setFactionFilters(faction)),
          setMinPointsFilters: (minPoints) => dispatch(setMinPointsFilters(minPoints)),
          setMaxPointsFilters: (maxPoints) => dispatch(setMaxPointsFilters(maxPoints)),
          startSetFilters: (filters) => dispatch(startSetFilters(filters))
        });

        export default connect(mapStateToProps, mapDispatchToProps)(Filter);
