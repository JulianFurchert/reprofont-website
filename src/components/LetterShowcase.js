import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import SlideshowMain from './SlideshowMain';
import SlideshowNav from './SlideshowNav';

import './LetterShowcase.css';

class LetterShowcase extends Component {

  renderInformation({ name, activeLetterIndex, letters }) {
    return (
      <div className="information">Repro {name} - { ( '0' + (activeLetterIndex+1) ).slice(-2) }/{ letters.length }</div>
    )
  }

  render() {
    return (
      <div className="letter-showcase">
        <Link className="close-button" to="/"></Link>
        {this.renderInformation(this.props.fontstyle)}
        <SlideshowMain id={this.props.id} fontstyle={this.props.fontstyle}/>
        <SlideshowNav id={this.props.id} fontstyle={this.props.fontstyle}/>
      </div>
    );
  }
}

function mapStateToProps({ fontstyles }, ownProps) {
  return { fontstyle: fontstyles[ownProps.id]};
}

export default connect(mapStateToProps)(LetterShowcase);