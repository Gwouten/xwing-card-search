import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const SingleUpgrade = ({ name, id, slot, points, attack, range, text, image, xws, effect, unique, limited, faction }) => (
  <div className={`cardlist__card ${faction ? faction.split(' ')[0] : ''}`}>
    <h3>{unique && "•"} {name} - {points}</h3>
    <h4>{slot}{limited && ' - limited'}</h4>
    <p>{text ? ReactHtmlParser(text) : '-'}</p>
    {attack && <p>Attack: {attack}</p>}
    {range && <p>Range: {range}</p>}
    {effect && <p>Detonate: {effect}</p>}
  </div>
);

export default SingleUpgrade;
