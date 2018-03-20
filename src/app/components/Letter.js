import React from 'react';
import './Letter.css';

const Letter = (props) => (
  <div className={props.cssClass + ' letter'}>
    {props.letter}
    {props.badge ? (<div className="badge">{props.badge}</div>) : '' }
  </div>
);

export default Letter;