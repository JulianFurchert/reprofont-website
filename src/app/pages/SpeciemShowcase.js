import React, { Component } from 'react';
import { connect } from "react-redux";

import OverlayPage from '../layout/OverlayPage';
import SlideshowSpeciem from '../components/SlideshowSpeciem';
import ButtonClose from '../components/ButtonClose';

import './SpeciemShowcase.css';

class SpeciemShowcase extends Component {

  renderInformation({ name, activeLetterIndex, letters }) {
    return (
      <div className="information">Repro {name} - { ( '0' + (activeLetterIndex+1) ).slice(-2) }/{ letters.length }</div>
    )
  }

  render() {
    return (
      <OverlayPage>
        <div className="letter-showcase">
          <ButtonClose/>
          <SpeciemShowcase speciem={this.props.speciem} />
        </div>
      </OverlayPage>
    );
  }
}

function mapStateToProps({ speciem }) {
  return { speciem };
}

export default connect( mapStateToProps )( SpeciemShowcase );