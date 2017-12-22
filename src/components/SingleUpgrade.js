import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import convertToIcon from '../helpers/convertToIcon';

const SingleUpgrade = ({ name, id, slot, points, attack, range, text, image, xws, effect, unique, limited, faction }) => (
  <div className={`cardlist__card ${faction ? faction.split(' ')[0] : ''}`}>
    <h3 className="cardlist__card__title">{unique && "•"} {ReactHtmlParser(name)}</h3>
    <h4 className="cardlist__card__subtitle">{limited && ' - limited'}</h4>
    <p className="cardlist__card__text">{text ? ReactHtmlParser(text) : '-'}</p>
    {attack && <p>Attack: {attack}</p>}
    {range && <p>Range: {range}</p>}
    {effect && <p>Detonate: {effect}</p>}
    <div className="cardlist__card__footer">
      <p><span className="xwing-miniatures-font">{convertToIcon([slot])}</span></p>
      <p className="cardlist__footer__points">{points} {points !== 1 ? 'pts' : 'pt'}</p>
    </div>
  </div>
);

export default SingleUpgrade;
