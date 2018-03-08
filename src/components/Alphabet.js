import React, { Component } from 'react';
import LetterNavigation from './LetterNavigation';
import { Link } from "react-router-dom";

import Letter from './Letter';

import './Alphabet.css';

class Alphabet extends Component {
  render() {
    return (
      <div className="alphabet">
        <Link className="close-button" to="/"></Link>
        <Letter id={this.props.id} />
        <LetterNavigation id={this.props.id} />
      </div>
    );
  }
}

export default Alphabet;
