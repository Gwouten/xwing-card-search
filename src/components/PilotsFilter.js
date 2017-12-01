import React from 'react';
import { connect } from 'react-redux';
import { setPilotsFilter, clearPilotsFilter } from '../actions/pilotsFilter';

class PilotsFilter extends React.Component {

  onPilotFilterButton = (e) => {
    const slot = e.target.getAttribute('value');
    this.props.setPilotsFilter(slot);
  }

  onClearPilotFilterButton = (e) => {
    e.preventDefault();
    this.props.clearPilotsFilter();
  }

  convertToIcon = (slots) => {
    let iconSlots = [];
    slots.map((slot) => {
      switch(slot) {

        case"Crew":
        return iconSlots.push("W");

        case"Elite":
        return iconSlots.push("E");

        case"Illicit":
        return iconSlots.push("I");

        case"System":
        return iconSlots.push("S");

        case"Astromech":
        return iconSlots.push("A");

        case"Salvaged Astromech":
        return iconSlots.push("V");

        case"Tech":
        return iconSlots.push("X");

        case"Missile":
        return iconSlots.push("M");

        case"Torpedo":
        return iconSlots.push("P");

        case"Bomb":
        return iconSlots.push("B");

        case"Cannon":
        return iconSlots.push("C");

        case"Turret":
        return iconSlots.push("U");

        case"Hardpoint":
        return iconSlots.push("H");

        case"Team":
        return iconSlots.push("T");

        case"Cargo":
        return iconSlots.push("G");

        default:
        return '';

      }
    });
    return iconSlots;
  }

  render(){
    return (
      <div>
        <button className="xwing-miniatures-font" onClick={this.onPilotFilterButton} value="Crew">W</button>
        <button className="xwing-miniatures-font" onClick={this.onPilotFilterButton} value="Elite">E</button>
        <button className="xwing-miniatures-font" onClick={this.onPilotFilterButton} value="Illicit">I</button>
        <button className="xwing-miniatures-font" onClick={this.onPilotFilterButton} value="System">S</button>
        <button className="xwing-miniatures-font" onClick={this.onPilotFilterButton} value="Astromech">A</button>
        <button className="xwing-miniatures-font" onClick={this.onPilotFilterButton} value="Salvaged Astromech">V</button>
        <button className="xwing-miniatures-font" onClick={this.onPilotFilterButton} value="Tech">X</button>
        <button className="xwing-miniatures-font" onClick={this.onPilotFilterButton} value="Missile">M</button>
        <button className="xwing-miniatures-font" onClick={this.onPilotFilterButton} value="Torpedo">P</button>
        <button className="xwing-miniatures-font" onClick={this.onPilotFilterButton} value="Bomb">B</button>
        <button className="xwing-miniatures-font" onClick={this.onPilotFilterButton} value="Cannon">C</button>
        <button className="xwing-miniatures-font" onClick={this.onPilotFilterButton} value="Turret">U</button>
        <button className="xwing-miniatures-font" onClick={this.onPilotFilterButton} value="Hardpoint">H</button>
        <button className="xwing-miniatures-font" onClick={this.onPilotFilterButton} value="Team">T</button>
        <button className="xwing-miniatures-font" onClick={this.onPilotFilterButton} value="Cargo">G</button>

        <p>Filtering on: <span className="xwing-miniatures-font">{this.convertToIcon(this.props.pilotsFilter)}</span></p>
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
