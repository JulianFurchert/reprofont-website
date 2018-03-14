import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Swipeable from 'react-swipeable'

import SlideshowMain from '../components/SlideshowMain';
import SlideshowNav from '../components/SlideshowNav';

import './LetterShowcase.css';

class LetterShowcase extends Component {

  renderInformation({ name, activeLetterIndex, letters }) {
    return (
      <div className="information">Repro {name} - { ( '0' + (activeLetterIndex+1) ).slice(-2) }/{ letters.length }</div>
    )
  }

  componentDidMount() {
    console.log(this.refs.letterShowcase);
  }

  swipingDown(e, absX) {
    // this.refs.letterShowcase.style.top = absX/4 + "px";
    // this.refs.letterShowcase.style.left = absX/6 + "px";
    // this.refs.letterShowcase.style.bottom = absX/4 + "px";
    // this.refs.letterShowcase.style.right = absX/6 + "px";
  }
  swipedDown(e, deltaY, isFlick) {
    console.log("You Swiped Down...", e, deltaY, isFlick)
    // if(deltaY < -150){
    //   this.refs.letterShowcase.style.top = "0px";
    //   this.refs.letterShowcase.style.left = "0px";
    //   this.refs.letterShowcase.style.bottom = "0px";
    //   this.refs.letterShowcase.style.right = "0px";
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
      onSwipedDown={this.swipedDown.bind(this)}
      >
        <div ref='letterShowcase' className="letter-showcase">
          <Link className="close-button" to="/"></Link>
          {this.renderInformation(this.props.fontstyle)}
          <SlideshowMain id={this.props.id} fontstyle={this.props.fontstyle}/>
          <SlideshowNav id={this.props.id} fontstyle={this.props.fontstyle}/>
        </div>
      </Swipeable>
    );
  }
}

function mapStateToProps({ fontstyles }, ownProps) {
  return { fontstyle: fontstyles[ownProps.id]};
}

export default connect(mapStateToProps)(LetterShowcase);