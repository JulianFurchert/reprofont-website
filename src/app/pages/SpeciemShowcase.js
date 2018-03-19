import React, { Component } from 'react';
import { connect } from "react-redux";

import OverlayPage from '../layout/OverlayPage';
import SpeciemSlideshow from '../components/SpeciemSlideshow';
import SpeciemNavigation from '../components/SpeciemNavigation';
import ButtonClose from '../components/ButtonClose';


import './SpeciemShowcase.css';

class LetterShowcase extends Component {
  render() {
    return (
      <OverlayPage>
        <div className="speciem-showcase">
          <ButtonClose/>
          <div className="information">Repro Speciem - {this.props.speciem.activePage}/80</div>
          <SpeciemSlideshow speciem={this.props.speciem}/>
          <SpeciemNavigation speciem={this.props.speciem}/>
        </div>
      </OverlayPage>
    );
  }
}

function mapStateToProps({ speciem }) {
  return { speciem };
}

export default connect(mapStateToProps)(LetterShowcase);