import React, { Component } from 'react';

import OverlayPage from '../layout/OverlayPage';
import SpeciemSlideshow from '../components/SpeciemSlideshow';
import SpeciemNavigation from '../components/SpeciemNavigation';
import ButtonClose from '../components/ButtonClose';

import './SpeciemShowcase.css';

class LetterShowcase extends Component {

  constructor(props) {
    super(props);
    this.state = { index: 0 };
    this.setIndex = this.setIndex.bind(this);
  }

  setIndex(index){
    this.setState( { index } );
    console.log(this.state.index);
  }

  render() {
    return (
      <OverlayPage>
        <div className="speciem-showcase">
          <ButtonClose/>
          {/* <div className="information">Repro Speciem - {this.props.speciem.activePage}/80</div> */}
          <SpeciemSlideshow setIndex={this.setIndex} index={this.state.index} />
          <SpeciemNavigation setIndex={this.setIndex} index={this.state.index} />
        </div>
      </OverlayPage>
    )
  }
}


export default LetterShowcase;