import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import SlideshowMain from './SlideshowMain';
import SlideshowNav from './SlideshowNav';

import './LetterShowcase.css';

class LetterShowcase extends Component {
  render() {
    return (
      <div className="alphabet">
        <div className="information">Repro 100 - 01/90</div>
        <Link className="close-button" to="/"></Link>
        <SlideshowMain fontstyle={this.props.fontstyles[this.props.id]}/>
        <SlideshowNav fontstyle={this.props.fontstyles[this.props.id]}/>
      </div>
    );
  }
}

function mapStateToProps({ fontstyles }) {
  return { fontstyles };
}

export default connect(mapStateToProps)(LetterShowcase);