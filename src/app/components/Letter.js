import React from 'react';
import './Letter.css';

const Letter = (props) => (
  <div className={props.cssClass + ' letter'}>{props.letter}</div>
);

export default Letter;