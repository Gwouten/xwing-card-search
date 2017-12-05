import React from 'react';
import convertToIcon from '../helpers/convertToIcon';

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

export default SinglePilot;
