import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Swipeable from 'react-swipeable'

import './OverlayPage.css';

class OverlayPage extends Component {

  componentDidMount() {

  }

  swipingDown(e, absX) {
    // if(absX > 150){
    //   this.props.history.push('/')
    // }else{
    //   this.refs.letterShowcase.style.top = absX/4 + "px";
    //   this.refs.letterShowcase.style.left = absX/6 + "px";
    //   this.refs.letterShowcase.style.bottom = absX/4 + "px";
    //   this.refs.letterShowcase.style.right = absX/6 + "px";
    // }
  }

  swipedDown(e, deltaY, isFlick) {
    // if(deltaY < -150){
    //   this.props.history.push('/')
    // }else{
    //   this.refs.letterShowcase.style.top = "0px";
    //   this.refs.letterShowcase.style.left = "0px";
    //   this.refs.letterShowcase.style.bottom = "0px";
    //   this.refs.letterShowcase.style.right = "0px";
    // }
  }

  render() {
    return (
      <Swipeable
      onSwipingDown={this.swipingDown.bind(this)}
      onSwipedDown={this.swipedDown.bind(this)} >
        <div ref='letterShowcase' className="overlay-page">
          {this.props.children}
        </div>
      </Swipeable>
    );
  }
}

export default withRouter(OverlayPage);