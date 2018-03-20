import React, { Component } from 'react';
import { connect } from "react-redux";

import OverlayPage from '../layout/OverlayPage';
import LetterSlideshow from '../components/LetterSlideshow';
import LetterNavigation from '../components/LetterNavigation';
import ButtonClose from '../components/ButtonClose';

import './LetterShowcase.css';

class LetterShowcase extends Component {

  renderInformation({ name, activeLetterIndex, letters }) {
    var letter = letters[activeLetterIndex];
    var letterName = letter.letter + (letter.style==="default" ? "" : "." + letter.style) ;
    return (
      // <div className="information">Repro {name} - {letterName}</div>
      <div className="information">Repro {name} - { ( '0' + (activeLetterIndex+1) ).slice(-2) }/{ letters.length }</div>
    )
  }

  render() {
    return (
      <OverlayPage>
        <div className="letter-showcase">
          <ButtonClose/>
          {this.renderInformation(this.props.fontstyle)}
          <LetterSlideshow id={this.props.id} fontstyle={this.props.fontstyle}/>
          <LetterNavigation id={this.props.id} fontstyle={this.props.fontstyle}/>
        </div>
      </OverlayPage>
    );
  }
}

function mapStateToProps({ fontstyles }, ownProps) {
  return { fontstyle: fontstyles[ownProps.id]};
}

export default connect(mapStateToProps)(LetterShowcase);