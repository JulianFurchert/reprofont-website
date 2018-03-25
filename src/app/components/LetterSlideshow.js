import React, { Component } from 'react';
import { connect } from "react-redux";
import Flickity from 'flickity';
import { CSSTransition } from "react-transition-group";

import { selectLetter } from "../../actions/index";
import Letter from './Letter'
import './LetterSlideshow.css';

class SlideshowMain extends Component {

  shouldComponentUpdate(nextProps, nextState){
    if(nextState.show !== this.state.show){
      return true
    }
    return false;
  }

  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  componentDidMount() {
    this.flkty = new Flickity(this.refs.slideshow, {
      initialIndex: this.props.fontstyle.index,
      cellSelector: '.slideshow-item',
      pageDots: false,
      prevNextButtons: false
    });

    this.flkty.on('dragStart', ()=>{
      this.props.setScrolledComponent('LetterSlideshow');
    });

    this.flkty.on('dragEnd', ()=>{
      this.props.selectLetter(this.props.id,this.flkty.selectedIndex)
    });
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.scrolledComponent !== 'LetterSlideshow'){
      console.log("componentWillReceiveProps");
      if(this.flkty.selectedIndex !== nextProps.fontstyle.index){
        this.flkty.select( nextProps.fontstyle.index, false, true );
      }
    }
  }

  renderLetters(letters) {
    return letters.map(letter => {
      return (
        <div key={letter.letter + letter.style} className='slideshow-item'>
          <Letter
            cssClass={this.props.fontstyle.className + " style-" + letter.style}
            letter={letter.letter}
          />
        </div>
      );
    });
  }

  toggleShow(){
    this.setState(prevState => ({
      show: !prevState.show
    }));
  }

  render() {
    return (
      <CSSTransition
        in={this.state.show}
        timeout={8000}
        classNames="test-"
      >
      <div onClick={this.toggleShow.bind(this)} ref='slideshow' className='slideshow'>
        {this.renderLetters(this.props.fontstyle.letters)}
      </div>
      </CSSTransition>
    );
  }
}

export default connect(null, { selectLetter })(SlideshowMain);
