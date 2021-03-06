import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import convertToIcon from '../helpers/convertToIcon';

const SinglePilot = ({ faction, id, image, name, points, ship, skill, slots, text, unique, xws }) => (
  <div className={`cardlist__card xwing-miniatures-ship xwing-miniatures-ship-${ship.toLowerCase().replace(/[ -./]/g,'')}`}>
    <h3 className="cardlist__card__title">{unique && "•"} {ReactHtmlParser(name)}</h3>
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

export default SinglePilot;
