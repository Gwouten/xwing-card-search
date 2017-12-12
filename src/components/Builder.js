import React from 'react';
import { connect } from 'react-redux';
import { builderRemovePilot, builderSetup } from '../actions/builder';
import { setFactionFilters } from '../actions/filters';
import { convertFactionNames } from '../helpers/convertFactionNames';

class Builder extends React.Component {

  builderSetup = (e) => {
    e.preventDefault();
    const squadName = e.target.squadName.value;
    const squadFaction = e.target.squadFaction.value;
    const squadPoints = e.target.squadPoints.value;
    const setFactionFilter = e.target.squadFaction.value;
    console.log(setFactionFilter);
    this.props.builderSetup(squadName, squadFaction, squadPoints);
    this.props.setFactionFilters(convertFactionNames(setFactionFilter));
  }

  builderRemovePilot = (e) => {
    const pilotIndex = e.target.parentElement.getAttribute('data-index');
    console.log(pilotIndex);
    this.props.builderRemovePilot(pilotIndex);
  }

  render(){
    // {console.log(this.props.builder.pilots)}
    return (
    <div>
      <form onSubmit={this.builderSetup}>
        <label>Squad name: </label>
        <input type="text" name="squadName" defaultValue="Squad name" />
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

      <h1>{this.props.builder.name} - {this.props.builder.faction} - {this.props.builder.points}</h1>
      <div className="squadlist">
      {this.props.builder.pilots.map((pilot, i) => {
        return (
          <div key={pilot.id+i} data-index={i}>
            <h3>{pilot.name}</h3>
            <h4>{pilot.ship}</h4>
            <p>{pilot.text}</p>
            <button onClick={this.builderRemovePilot}>Remove</button>
          </div>
        );
      })}
      </div>
    </div>
  )}
}

const mapStateToProps = (state) => ({
  builder: state.builder
});

const mapDispatchToProps = (dispatch) => ({
  builderRemovePilot: (pilotIndex) => dispatch(builderRemovePilot(pilotIndex)),
  builderSetup: (squadName, squadFaction, squadPoints) => dispatch(builderSetup(squadName, squadFaction, squadPoints)),
  setFactionFilters: (faction) => dispatch(setFactionFilters(faction)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Builder);
