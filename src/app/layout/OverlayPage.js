import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Swipeable from 'react-swipeable'

import './OverlayPage.css';

class OverlayPage extends Component {

  swipingDown(e, absX) {
    // var element = this.refs.letterShowcase.element;
    // if(absX > 150){
    //   this.props.history.push('/')
    // }else{
    //   element.style.top = absX/4 + "px";
    //   element.style.left = absX/6 + "px";
    //   element.style.bottom = absX/4 + "px";
    //   element.style.right = absX/6 + "px";
    // }
  }

  swipedDown(e, deltaY, isFlick) {
    // var element = this.refs.letterShowcase.element;
    // if(deltaY < -150){
    //   this.props.history.push('/')
    // }else{
    //   element.style.top = "0px";
    //   element.style.left = "0px";
    //   element.style.bottom = "0px";
    //   element.style.right = "0px";
    // }
  }

  render() {
    return (
      <Swipeable
      style={this.props.style}
      ref="letterShowcase"
      className="overlay-page"
      onSwipingDown={this.swipingDown.bind(this)}
      onSwipedDown={this.swipedDown.bind(this)} >
          {this.props.children}
      </Swipeable>
    );
  }
}

export default withRouter(OverlayPage);