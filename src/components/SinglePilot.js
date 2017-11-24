import React from 'react';

const SinglePilot = ({ faction, id, image, name, points, ship, skill, slots, text, unique, xws }) => (
  <div className={`pilot ${faction.split(' ')[0]}`}>
    <h3>{unique && "•"} {name} - {points}</h3>
    <h4>Pilot Skill: {skill} - {ship}</h4>
    <p>{text ? text : '-'}</p>
    <ul>Upgrades: { slots.map((slot, index) => (<li key={id+index}>{slot}</li>)) }</ul>
  </div>
);

export default SinglePilot;
