import React, { Component } from 'react';
import { connect } from "react-redux";

import OverlayPage from '../layout/OverlayPage';
import LetterSlideshow from '../components/LetterSlideshow';
import LetterNavigation from '../components/LetterNavigation';
import ButtonClose from '../components/ButtonClose';

import './LetterShowcase.css';

class LetterShowcase extends Component {

  constructor(props) {
    super(props);
    this.scrolledComponent = null
    this.index = 0;
  }

  setScrolledComponent(scrolledComponent){
    this.scrolledComponent = scrolledComponent
  }

  setIndex(index){
    this.index = index;
  }

  renderInformation({ name, index, letters }) {
    return (
      <div className="information">Repro {name} - { ( '0' + (index+1) ).slice(-2) }/{ letters.length }</div>
    )
  }

  renderBadge(style){
    return (
      <div className={'badge ' + (style !== 'default' ? 'open' : 'close')}>
        {style}
      </div>
    )
  }

  render() {
    return (
      <OverlayPage style={this.props.style}>
        <div className="letter-showcase">
          <ButtonClose/>
          {this.renderInformation(this.props.fontstyle)}
          <LetterSlideshow
            scrolledComponent={this.scrolledComponent}
            setScrolledComponent={this.setScrolledComponent.bind(this)}
            id={this.props.id}
            fontstyle={this.props.fontstyle}
          />
          {this.renderBadge(this.props.fontstyle.letters[this.props.fontstyle.index].style)}
          <LetterNavigation
            scrolledComponent={this.scrolledComponent}
            setScrolledComponent={this.setScrolledComponent.bind(this)}
            id={this.props.id}
            fontstyle={this.props.fontstyle}
          />
        </div>
      </OverlayPage>
    );
  }
}

function mapStateToProps({ fontstyles }, ownProps) {
  return { fontstyle: fontstyles[ownProps.id]};
}

export default connect(mapStateToProps)(LetterShowcase);