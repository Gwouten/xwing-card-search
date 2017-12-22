import React from 'react';
import { connect } from 'react-redux';
import { setUpgradesFilter, clearUpgradesFilter } from '../actions/upgradesFilter';
import convertToIcon from '../helpers/convertToIcon';

class UpgradesFilter extends React.Component {

  onUpgradeFilterButton = (e) => {
    const slot = e.target.getAttribute('value');
    this.props.setUpgradesFilter(slot);
  }

  onClearUpgradeFilterButton = (e) => {
    e.preventDefault();
    this.props.clearUpgradesFilter();
  }

  render(){
    return (
      <div className="subFilter">

        <div className="subFilter__button__group">
          <button className="xwing-miniatures-font subFilter__button--icon" onClick={this.onUpgradeFilterButton} value="Modification">m</button>
          <button className="xwing-miniatures-font subFilter__button--icon" onClick={this.onUpgradeFilterButton} value="Title">t</button>
          <button className="xwing-miniatures-font subFilter__button--icon" onClick={this.onUpgradeFilterButton} value="Crew">W</button>
          <button className="xwing-miniatures-font subFilter__button--icon" onClick={this.onUpgradeFilterButton} value="Elite">E</button>
          <button className="xwing-miniatures-font subFilter__button--icon" onClick={this.onUpgradeFilterButton} value="Illicit">I</button>
          <button className="xwing-miniatures-font subFilter__button--icon" onClick={this.onUpgradeFilterButton} value="System">S</button>
          <button className="xwing-miniatures-font subFilter__button--icon" onClick={this.onUpgradeFilterButton} value="Astromech">A</button>
          <button className="xwing-miniatures-font subFilter__button--icon" onClick={this.onUpgradeFilterButton} value="Salvaged Astromech">V</button>
          <button className="xwing-miniatures-font subFilter__button--icon" onClick={this.onUpgradeFilterButton} value="Tech">X</button>
          <button className="xwing-miniatures-font subFilter__button--icon" onClick={this.onUpgradeFilterButton} value="Missile">M</button>
          <button className="xwing-miniatures-font subFilter__button--icon" onClick={this.onUpgradeFilterButton} value="Torpedo">P</button>
          <button className="xwing-miniatures-font subFilter__button--icon" onClick={this.onUpgradeFilterButton} value="Bomb">B</button>
          <button className="xwing-miniatures-font subFilter__button--icon" onClick={this.onUpgradeFilterButton} value="Cannon">C</button>
          <button className="xwing-miniatures-font subFilter__button--icon" onClick={this.onUpgradeFilterButton} value="Turret">U</button>
          <button className="xwing-miniatures-font subFilter__button--icon" onClick={this.onUpgradeFilterButton} value="Hardpoint">H</button>
          <button className="xwing-miniatures-font subFilter__button--icon" onClick={this.onUpgradeFilterButton} value="Team">T</button>
          <button className="xwing-miniatures-font subFilter__button--icon" onClick={this.onUpgradeFilterButton} value="Cargo">G</button>
        </div>

        <p className="subFilter__text">Show only: <span className="xwing-miniatures-font">{convertToIcon(this.props.upgradesFilter)}</span></p>
        <button className="subFilter__button button" onClick={this.onClearUpgradeFilterButton}>Clear</button>



      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  upgradesFilter: state.upgradesFilter
});

const mapDispatchToProps = (dispatch) => ({
  setUpgradesFilter: (slot) => dispatch(setUpgradesFilter(slot)),
  clearUpgradesFilter: () => dispatch(clearUpgradesFilter())
});

export default connect(mapStateToProps, mapDispatchToProps)(UpgradesFilter);
