import React from 'react';
import { connect } from 'react-redux';
import { setPilotsFilter, clearPilotsFilter } from '../actions/pilotsFilter';

class PilotsFilter extends React.Component {

  onPilotFilterButton = (e) => {
    e.preventDefault();
    const slot = e.target.innerText;
    this.props.setPilotsFilter(slot);
  }

  onClearPilotFilterButton = (e) => {
    e.preventDefault();
    this.props.clearPilotsFilter();
  }

  render(){
    return (
      <div>

        <button onClick={this.onPilotFilterButton}>Crew</button>
        <button onClick={this.onPilotFilterButton}>Elite</button>
        <button onClick={this.onPilotFilterButton}>Illicit</button>
        <button onClick={this.onPilotFilterButton}>System</button>
        <button onClick={this.onPilotFilterButton}>Astromech</button>
        <button onClick={this.onPilotFilterButton}>Astromech</button>
        <button onClick={this.onPilotFilterButton}>Tech</button>
        <button onClick={this.onPilotFilterButton}>Missile</button>
        <button onClick={this.onPilotFilterButton}>Torpedo</button>
        <button onClick={this.onPilotFilterButton}>Bomb</button>
        <button onClick={this.onPilotFilterButton}>Cannon</button>
        <button onClick={this.onPilotFilterButton}>Turret</button>
        <button onClick={this.onPilotFilterButton}>Hardpoint</button>
        <button onClick={this.onPilotFilterButton}>Team</button>
        <button onClick={this.onPilotFilterButton}>Cargo</button>

        <p>Filtering on: {this.props.pilotsFilter}</p>
        <button onClick={this.onClearPilotFilterButton}>Clear</button>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pilotsFilter: state.pilotsFilter
});

const mapDispatchToProps = (dispatch) => ({
  setPilotsFilter: (slot) => dispatch(setPilotsFilter(slot)),
  clearPilotsFilter: () => dispatch(clearPilotsFilter())
});

export default connect(mapStateToProps, mapDispatchToProps)(PilotsFilter);
