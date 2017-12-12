import React from 'react';
import { connect } from 'react-redux';
import { setFactionFilters } from '../actions/filters';
import { builderSetup } from '../actions/builder';
import { convertFactionNames } from '../helpers/convertFactionNames';

 class BuilderForm extends React.Component {

  builderSetup = (e) => {
    e.preventDefault();
    const squadName = e.target.squadName.value;
    const squadFaction = e.target.squadFaction.value;
    const squadPoints = e.target.squadPoints.value;
    const setFactionFilter = e.target.squadFaction.value;
    this.props.builderSetup(squadName, squadFaction, squadPoints);
    this.props.setFactionFilters(convertFactionNames(setFactionFilter));
  }

  render(){
    return (
      <form onSubmit={this.builderSetup}>
        <label>Squad name: </label>
        <input type="text" name="squadName" />
        <label>Faction: </label>
        <select name="squadFaction">
          <option data-faction="rebel">Rebel Alliance</option>
          <option data-faction="empire">Galactic Empire</option>
          <option data-faction="scum">Scum and Villainy</option>
        </select>
        <label>Points range</label>
        <input type="number" name="squadPoints" defaultValue="100" />
        <button>Build squad</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  builderSetup: (squadName, squadFaction, squadPoints) => dispatch(builderSetup(squadName, squadFaction, squadPoints)),
  setFactionFilters: (faction) => dispatch(setFactionFilters(faction))
});

export default connect(undefined, mapDispatchToProps)(BuilderForm);
