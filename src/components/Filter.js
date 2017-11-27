import React from 'react';
import { connect } from 'react-redux';
import { startSetFilters, setTextFilters, setcardTypePilotFilters, setcardTypeUpgradeFilters } from '../actions/filters';

class Filter extends React.Component {

  ComponentDidMount () {

  }

  onTextFilter = (e) => {
    const text = e.target.value;
    this.props.setTextFilters(text);
  }

  onFactionSelect = (e) => {
    const faction = e.target.value;
  }

  onPilotSelected = () => {
    this.props.setPilotsSelected(!this.props.filters.cardTypePilot);
  }

  onUpgradeSelected = () => {
    this.props.setUpgradesSelected(!this.props.filters.cardTypeUpgrade);
  }

  handleClear = (e) => {
    e.preventDefault();
    e.target.parentElement.elements.textQuery.value = '';
    this.props.setTextFilters('');
  }

  render(){
    return (
      <div>
        <form>
          <input type="text" name="textQuery" placeholder="Enter the text you're looking for" onChange={this.onTextFilter} />
          <button onClick={this.handleClear}>Clear</button>

          <h2>Faction</h2>
          <input type="radio" name="faction" value="any"    onChange={this.onFactionSelect} checked={this.props.filters.faction === "any"}    /><label htmlFor="faction">Any</label>
          <input type="radio" name="faction" value="rebel"  onChange={this.onFactionSelect} checked={this.props.filters.faction === "rebel"}  /><label htmlFor="faction">Rebel</label>
          <input type="radio" name="faction" value="empire" onChange={this.onFactionSelect} checked={this.props.filters.faction === "empire"} /><label htmlFor="faction">Empire</label>
          <input type="radio" name="faction" value="scum"   onChange={this.onFactionSelect} checked={this.props.filters.faction === "scum"}   /><label htmlFor="faction">Scum</label>

          <h2>Card Type</h2>
          <input type="checkbox" id="pilot" name="pilot" value="pilot" checked={this.props.filters.cardTypePilot} onChange={this.onPilotSelected} /><label htmlFor="pilot">Pilot</label>
          <input type="checkbox" id="upgrade" name="upgrade" value="upgrade" checked={this.props.filters.cardTypeUpgrade} onChange={this.onUpgradeSelected} /><label htmlFor="upgrade">Upgrade</label>

          <h2>Points Range</h2>
          <label htmlFor="minPoints">Min</label><input name="minPoints" type="number" />
          <label htmlFor="maxPoints">Max</label><input name="maxPoints" type="number" />
        </form>
      </div>
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
  startSetFilters: (filters) => dispatch(startSetFilters(filters))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
