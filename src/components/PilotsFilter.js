import React from 'react';
import { connect } from 'react-redux';
import { setPilotsFilter, clearPilotsFilter } from '../actions/pilotsFilter';
import convertToIcon from '../helpers/convertToIcon';

class PilotsFilter extends React.Component {

  onPilotFilterButton = (e) => {
    const slot = e.target.getAttribute('value');
    this.props.setPilotsFilter(slot);
  }

  onClearPilotFilterButton = (e) => {
    e.preventDefault();
    this.props.clearPilotsFilter();
  }

  render(){
    return (
      <div className="pilotsFilter">
        <p>Select what upgrade slots you want to have access to:</p>

        <div className="pilotsFilter__button__group">
          <button className="xwing-miniatures-font pilotsFilter__button" onClick={this.onPilotFilterButton} value="Crew">W</button>
          <button className="xwing-miniatures-font pilotsFilter__button" onClick={this.onPilotFilterButton} value="Elite">E</button>
          <button className="xwing-miniatures-font pilotsFilter__button" onClick={this.onPilotFilterButton} value="Illicit">I</button>
          <button className="xwing-miniatures-font pilotsFilter__button" onClick={this.onPilotFilterButton} value="System">S</button>
          <button className="xwing-miniatures-font pilotsFilter__button" onClick={this.onPilotFilterButton} value="Astromech">A</button>
          <button className="xwing-miniatures-font pilotsFilter__button" onClick={this.onPilotFilterButton} value="Salvaged Astromech">V</button>
          <button className="xwing-miniatures-font pilotsFilter__button" onClick={this.onPilotFilterButton} value="Tech">X</button>
          <button className="xwing-miniatures-font pilotsFilter__button" onClick={this.onPilotFilterButton} value="Missile">M</button>
          <button className="xwing-miniatures-font pilotsFilter__button" onClick={this.onPilotFilterButton} value="Torpedo">P</button>
          <button className="xwing-miniatures-font pilotsFilter__button" onClick={this.onPilotFilterButton} value="Bomb">B</button>
          <button className="xwing-miniatures-font pilotsFilter__button" onClick={this.onPilotFilterButton} value="Cannon">C</button>
          <button className="xwing-miniatures-font pilotsFilter__button" onClick={this.onPilotFilterButton} value="Turret">U</button>
          <button className="xwing-miniatures-font pilotsFilter__button" onClick={this.onPilotFilterButton} value="Hardpoint">H</button>
          <button className="xwing-miniatures-font pilotsFilter__button" onClick={this.onPilotFilterButton} value="Team">T</button>
          <button className="xwing-miniatures-font pilotsFilter__button" onClick={this.onPilotFilterButton} value="Cargo">G</button>
        </div>

        <p>Filtering on: <span className="xwing-miniatures-font pilotsFilter__selection">{convertToIcon(this.props.pilotsFilter)}</span></p>
        <button className="button" onClick={this.onClearPilotFilterButton}>Clear Filter</button>

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
