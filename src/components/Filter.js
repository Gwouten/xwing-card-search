import React from 'react';
import { connect } from 'react-redux';
import { startSetFilters } from '../actions/filters';

class Filter extends React.Component {
  state = {
      pilotIsChecked: true,
      upgradeIsChecked: true,
      searchPilots: true,
      searchUpgrades: true
  }

  onCardTypeChange = (e) => {
    if(e.target.value === 'pilot'){
      this.setState({
        pilotIsChecked: !this.state.pilotIsChecked,
        searchPilots: !this.state.searchPilots
      });
    } else {
      this.setState({
        upgradeIsChecked: !this.state.upgradeIsChecked,
        searchUpgrades: !this.state.searchUpgrades
      });
    }
  }

  render(){
    return (
      <div>
        <form>
          <input type="text" placeholder="Enter the text you're looking for" />
          <button>Search</button>
          <button>Clear</button>
          <h2>Faction</h2>
          <input type="radio" name="faction" value="any" /><label htmlFor="faction">Any</label>
          <input type="radio" name="faction" value="rebel" /><label htmlFor="faction">Rebel</label>
          <input type="radio" name="faction" value="empire" /><label htmlFor="faction">Empire</label>
          <input type="radio" name="faction" value="scum" /><label htmlFor="faction">Scum</label>
          <h2>Card Type</h2>
          <input type="checkbox" name="pilot" value="pilot" checked={this.state.pilotIsChecked} onChange={this.onCardTypeChange} /><label htmlFor="faction">Pilot</label>
          <input type="checkbox" name="upgrade" value="upgrade" checked={this.state.upgradeIsChecked} onChange={this.onCardTypeChange} /><label htmlFor="faction">Upgrade</label>
          <h2>Points Range</h2>
          <label htmlFor="minPoints">Min</label><input name="minPoints" type="nummber" />
          <label htmlFor="maxPoints">Max</label><input name="maxPoints" type="nummber" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = () => ({
  startSetFilters: (filters) => dispatch(startSetFilters(filters))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
