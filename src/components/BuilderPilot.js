import React from 'react';
import { connect } from 'react-redux';
import { builderRemovePilot } from '../actions/builder';

class BuilderPilot extends React.Component {


  builderRemovePilot = (e) => {
    const pilotIndex = e.target.parentElement.getAttribute('data-index');
    this.props.builderRemovePilot(pilotIndex);
  }

  builderAddUpgrade = (e) => {
    console.log(e);
  }

  builderShowUpgradeDetails = () => {
    console.log('upgrade');
  }

  render(){
    const {name, points, ship, skill, slots, text, unique, id, upgrades, faction} = this.props;
    return (
      <div>
        <h3>{name} ({skill})</h3>
        <h4>{ship} ({points})</h4>
        <p>{text}</p>
        <label>Modification</label>
        <select onChange={this.builderAddUpgrade}>
          {
            upgrades
            .filter((upgrade) => upgrade.slot === 'Modification')
            .filter((upgrade) => upgrade.faction === faction || !upgrade.faction)
            .map((upgrade, i) =>
              <option
                key={i}
                onMouseOver={this.builderShowUpgradeDetails}>
                {upgrade.name}
              </option>
            )
          }
        </select>
        {
          slots.map((slot, i) => {
            return (
              <div key={id+slot+i}>
                <label>{slot}</label>
                <select onChange={this.builderAddUpgrade}>
                  {
                    upgrades
                    .filter((upgrade) => upgrade.slot === slot)
                    .filter((upgrade) => upgrade.faction === faction || !upgrade.faction)
                    .map((upgrade, i) => <option key={i}>{upgrade.name}</option>)
                  }
                </select>
              </div>
            );
          })
        }
        <button onClick={this.builderRemovePilot}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  upgrades: state.upgrades
});

const mapDispatchToProps = (dispatch) => ({
  builderRemovePilot: (pilotIndex) => dispatch(builderRemovePilot(pilotIndex))
});

export default connect(mapStateToProps, mapDispatchToProps)(BuilderPilot);
