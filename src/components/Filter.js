import React from 'react';
import { connect } from 'react-redux';
import {
  startSetFilters,
  setTextFilters,
  setcardTypePilotFilters,
  setcardTypeUpgradeFilters,
  setFactionFilters,
  setMinPointsFilters,
  setMaxPointsFilters,
  setSortMethod
} from '../actions/filters';

class Filter extends React.Component {

  ComponentDidMount () {

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
    console.log(e.target.parentElement.firstChild);
    e.target.parentElement.firstChild.value = '';
    this.props.setTextFilters('');
  }

  onSetMinPoints = (e) => { this.props.setMinPointsFilters(e.target.value) }

  clearMinPoints = (e) => {
    e.preventDefault();
    this.props.setMinPointsFilters(-3);
  }

  onSetMaxPoints = (e) => { this.props.setMaxPointsFilters(e.target.value) }

  clearMaxPoints = (e) => {
    e.preventDefault();
    this.props.setMaxPointsFilters(100);
  }

  onSetSortMethod = (e) => {
    const sortMethod = e.target.value;
    this.props.setSortMethod(sortMethod);
  };

  render(){
    return (
      <form className="form content-container">
        <div className="input-group">
          <input className="text-input" type="text" name="textQuery" placeholder="Enter the text you're looking for" onChange={this.onTextFilter} />
          <button className="button" onClick={this.handleClear}>Clear</button>
        </div>

        <div className="filter-header">
          <div className="filter-header__column">
            <h2 className="filter-header__title">Faction</h2>
            <input className="radio-button" type="radio" id="faction_any"    name="faction" value="any"    onChange={this.onFactionSelect} checked={this.props.filters.faction === "any"} /><label className="label" htmlFor="faction_any">Any</label>
            <input className="radio-button" type="radio" id="faction_rebel"  name="faction" value="rebel"  onChange={this.onFactionSelect} checked={this.props.filters.faction === "rebel"} /><label className="label" htmlFor="faction_rebel">Rebel</label>
            <input className="radio-button" type="radio" id="faction_empire" name="faction" value="empire" onChange={this.onFactionSelect} checked={this.props.filters.faction === "empire"} /><label className="label" htmlFor="faction_empire">Empire</label>
            <input className="radio-button" type="radio" id="faction_scum"   name="faction" value="scum"   onChange={this.onFactionSelect} checked={this.props.filters.faction === "scum"} /><label className="label" htmlFor="faction_scum">Scum</label>
          </div>

          <div className="filter-header__column">
            <h2 className="filter-header__title">Card Type</h2>
            <input className="checkbox" type="checkbox" id="pilot"   name="pilot"   value="pilot"   checked={this.props.filters.cardTypePilot}   onChange={this.onPilotSelected}   /><label className="label" htmlFor="pilot">Pilot</label>
            <input className="checkbox" type="checkbox" id="upgrade" name="upgrade" value="upgrade" checked={this.props.filters.cardTypeUpgrade} onChange={this.onUpgradeSelected} /><label className="label" htmlFor="upgrade">Upgrade</label>
          </div>

          <div className="filter-header__column">
            <h2 className="filter-header__title">Points Range</h2>

            <div className="input-group input-group--numbers">
              <label className="label label--numbers" htmlFor="minPoints">Min</label>
              <input className="number-input" name="minPoints" type="number" min="-3" max="100" step="1" onChange={this.onSetMinPoints} value={this.props.filters.minPoints} />
              <button className="button button--numbers" onClick={this.clearMinPoints}>Reset</button>
            </div>

            <div className="input-group input-group--numbers">
              <label className="label label--numbers" htmlFor="maxPoints">Max</label>
              <input className="number-input" name="maxPoints" type="number" min="-3" max="100" step="1" onChange={this.onSetMaxPoints} value={this.props.filters.maxPoints} />
              <button className="button button--numbers" onClick={this.clearMaxPoints}>Reset</button>
            </div>


          </div>
        </div>

        <h2 className="filter-header__title">Sort Results on:</h2>
        <div className="input-group">
          <input className="radio-button" type="radio" id="sortAZ"    name="sortMethod" value="sortAZ"    onChange={this.onSetSortMethod} checked={this.props.filters.sortMethod === "sortAZ"} />
          <label className="label" htmlFor="sortAZ">A - Z</label>
          <input className="radio-button" type="radio" id="sortZA"  name="sortMethod" value="sortZA"  onChange={this.onSetSortMethod} checked={this.props.filters.sortMethod === "sortZA"} />
          <label className="label" htmlFor="sortZA">Z - A</label>
          <input className="radio-button" type="radio" id="psAsc" name="sortMethod" value="psAsc" onChange={this.onSetSortMethod} checked={this.props.filters.sortMethod === "psAsc"} />
          <label className="label" htmlFor="psAsc">Pilot Skill (low to high)</label>
          <input className="radio-button" type="radio" id="psDesc"   name="sortMethod" value="psDesc"   onChange={this.onSetSortMethod} checked={this.props.filters.sortMethod === "psDesc"} />
          <label className="label" htmlFor="psDesc">Pilot Skill (high to low)</label>
          <input className="radio-button" type="radio" id="pointsAsc" name="sortMethod" value="pointsAsc" onChange={this.onSetSortMethod} checked={this.props.filters.sortMethod === "pointsAsc"} />
          <label className="label" htmlFor="pointsAsc">Squad Points (low to high)</label>
          <input className="radio-button" type="radio" id="pointsDesc"   name="sortMethod" value="pointsDesc"   onChange={this.onSetSortMethod} checked={this.props.filters.sortMethod === "pointsDesc"} />
          <label className="label" htmlFor="pointsDesc">Squad Points (high to low)</label>
        </div>

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
  setSortMethod: (sortMethod) => dispatch(setSortMethod(sortMethod)),
  startSetFilters: (filters) => dispatch(startSetFilters(filters))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
