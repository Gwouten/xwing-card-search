import React from 'react';
import convertToIcon from '../helpers/convertToIcon';

class SinglePilot extends React.Component {

  onAddPilot = () => {
    console.log(this.props);
  }

  render(){
    const { faction, id, image, name, points, ship, skill, slots, text, unique, xws } = this.props // Destructure props!
    return (
      <div className={`cardlist__card  ${faction.split(' ')[0]}`}>
        <h3>{unique && "•"} {name} - {points}</h3>
        <h4>Pilot Skill: {skill} - {ship}</h4>
        <p>{text ? text : ''}</p>
        <ul>Upgrades: { slots.map((slot, index) => (
          <li key={id+index} className="xwing-miniatures-font">{convertToIcon([slot])}</li>
          )) }
        </ul>
        <button onClick={this.onAddPilot}>Add to squad</button>
      </div>
    );
  }
}

export default SinglePilot;
