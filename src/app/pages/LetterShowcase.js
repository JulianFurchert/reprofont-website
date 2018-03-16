import React, { Component } from 'react';
import { connect } from "react-redux";

import OverlayPage from '../layout/OverlayPage';
import SlideshowMain from '../components/SlideshowMain';
import SlideshowNav from '../components/SlideshowNav';
import ButtonClose from '../components/ButtonClose';

import './LetterShowcase.css';

class LetterShowcase extends Component {

  renderInformation({ name, activeLetterIndex, letters }) {
    return (
      <div className="information">Repro {name} - { ( '0' + (activeLetterIndex+1) ).slice(-2) }/{ letters.length }</div>
    )
  }

  render() {
    return (
      <OverlayPage fontstyle={this.props.fontstyle.name}>
        <div className="letter-showcase">
          <ButtonClose/>
          {this.renderInformation(this.props.fontstyle)}
          <SlideshowMain id={this.props.id} fontstyle={this.props.fontstyle}/>
          <SlideshowNav id={this.props.id} fontstyle={this.props.fontstyle}/>
        </div>
      </OverlayPage>
    );
  }
}

function mapStateToProps({ fontstyles }, ownProps) {
  return { fontstyle: fontstyles[ownProps.id]};
}

export default connect(mapStateToProps)(LetterShowcase);