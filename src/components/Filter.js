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
import { toggleFilterMenu } from '../actions/meta';

class Filter extends React.Component {

  onTextFilter = (e) => {
    const text = e.target.value;
    this.props.setTextFilters(text);
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

  onMinPointsFocus = () => { this.props.setMinPointsFilters('')}

  onMaxPointsFocus = () => { this.props.setMaxPointsFilters('')}

  clearPoints = (e) => {
    e.preventDefault();
    this.props.setMinPointsFilters(-3);
    this.props.setMaxPointsFilters(100);
  }

  toggleFilterMenu = () => {
    this.props.toggleFilterMenu();
  }

  onFactionSelect = (e) => {
    const faction = e.target.value;
    this.props.setFactionFilters(faction);
  }

  // one function to rule them all!
  onSubmit = (e) => {
    e.preventDefault();
    const text = e.target.textQuery.value;
    this.props.setTextFilters(text);
    this.toggleFilterMenu();
  }

  render(){
    return (
      <div className={`filter content-container ${this.props.meta.filterMenuHidden && 'filter--hidden'}`}>
        <form onSubmit={this.onSubmit}>
          <div className="filter__text__search">
            <input className="filter__input" type="text" name="textQuery" placeholder="Search" />
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
                onFocus={this.onMinPointsFocus}
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
            {/* <button className="filter__points__button button" onClick={this.clearPoints}>Reset points range</button> */}
            <button className="filter__points__button button">Search</button>
          </div>
        </form>
        <button className="filter__close" onClick={this.toggleFilterMenu}>X</button>
      </div>
    );
  }
}

        const mapStateToProps = (state) => ({
          filters: state.filters,
          meta: state.meta
        });

        const mapDispatchToProps = (dispatch) => ({
          setTextFilters: (text) => dispatch(setTextFilters(text)),
          setPilotsSelected: (cardTypePilot) => dispatch(setcardTypePilotFilters(cardTypePilot)),
          setUpgradesSelected: (cardTypeUpgrade) => dispatch(setcardTypeUpgradeFilters(cardTypeUpgrade)),
          setFactionFilters: (faction) => dispatch(setFactionFilters(faction)),
          setMinPointsFilters: (minPoints) => dispatch(setMinPointsFilters(minPoints)),
          setMaxPointsFilters: (maxPoints) => dispatch(setMaxPointsFilters(maxPoints)),
          startSetFilters: (filters) => dispatch(startSetFilters(filters)),
          toggleFilterMenu: () => dispatch(toggleFilterMenu())
        });

        export default connect(mapStateToProps, mapDispatchToProps)(Filter);
