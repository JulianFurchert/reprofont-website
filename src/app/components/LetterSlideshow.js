import React, { Component } from 'react';
import { connect } from "react-redux";
import Flickity from 'flickity';

import { selectLetter } from "../../actions/index";
import Letter from './Letter'
import './LetterSlideshow.css';

class SlideshowMain extends Component {

  shouldComponentUpdate(){
    return false;
  }

  componentDidMount() {
    this.flkty = new Flickity(this.refs.slideshow, {
      initialIndex: this.props.fontstyle.activeLetterIndex,
      cellSelector: '.slideshow-item',
      pageDots: false,
      prevNextButtons: false
    });

    this.flkty.on('dragEnd', ()=>{
      this.props.selectLetter(this.props.id,this.flkty.selectedIndex)
    });
  }

  componentWillReceiveProps(nextProps) {
    if(this.flkty.selectedIndex !== nextProps.fontstyle.activeLetterIndex){
      this.flkty.select( nextProps.fontstyle.activeLetterIndex, false, true );
    }
  }

  renderLetters(letters) {
    return letters.map(letter => {
      return (
        <div key={letter.letter + letter.style} className='slideshow-item'>
          <Letter badge={letter.style !== "default" ? letter.style : ""} cssClass={this.props.fontstyle.className + " style-" + letter.style} letter={letter.letter} />
        </div>
      );
    });
  }

  render() {
    return (
      <div ref='slideshow' className='slideshow'>
      {this.renderLetters(this.props.fontstyle.letters)}
      </div>
    );
  }
}

export default connect(null, { selectLetter })(SlideshowMain);
