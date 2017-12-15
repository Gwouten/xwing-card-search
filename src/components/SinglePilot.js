import React from 'react';
<<<<<<< HEAD
import { connect } from 'react-redux';
||||||| merged common ancestors
=======
import ReactHtmlParser from 'react-html-parser';
>>>>>>> builder
import convertToIcon from '../helpers/convertToIcon';
import { builderSetPilot } from '../actions/builder';

<<<<<<< HEAD
class SinglePilot extends React.Component {
||||||| merged common ancestors
const SinglePilot = ({ faction, id, image, name, points, ship, skill, slots, text, unique, xws }) => (
  <div className={`cardlist__card  ${faction.split(' ')[0]}`}>
    <h3>{unique && "•"} {name} - {points}</h3>
    <h4>Pilot Skill: {skill} - {ship}</h4>
    <p>{text ? text : ''}</p>
    <ul>Upgrades: { slots.map((slot, index) => (
      <li key={id+index} className="xwing-miniatures-font">{convertToIcon([slot])}</li>
      )) }
    </ul>
  </div>
);
=======
const SinglePilot = ({ faction, id, image, name, points, ship, skill, slots, text, unique, xws }) => (
  <div className={`cardlist__card xwing-miniatures-ship xwing-miniatures-ship-${ship.toLowerCase().replace(/[ -.]/g,'')}`}>
    <h3 className="cardlist__card__title">{unique && "•"} {name}</h3>
    <h4 className="cardlist__card__subtitle">Pilot Skill: {skill} - {ship}</h4>
    <p className="cardlist__card__text">{text ? ReactHtmlParser(text) : ''}</p>
    <div className="cardlist__card__footer">
      <ul className="cardlist__card__icons">{ slots.map((slot, index) => (
        <li key={id+index} className="cardlist__card__icons__icon xwing-miniatures-font">{convertToIcon([slot])}</li>
        )) }
      </ul>
      <p className="cardlist__footer__points">{points} pts</p>
    </div>
  </div>
);
>>>>>>> builder

  onAddPilot = () => {
    this.props.addPilot(this.props);
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

const mapDispatchToProps = (dispatch) => ({
  addPilot: (pilot) => dispatch(builderSetPilot(pilot))
});

export default connect(undefined, mapDispatchToProps)(SinglePilot);
