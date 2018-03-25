import React, { Component } from 'react';
import { connect } from "react-redux";
import { selectLetter } from "../../actions/index";
import { CSSTransition } from "react-transition-group";

import Flickity from 'flickity';
import './LetterNavigation.css';

class LetterNavigation extends Component {

  shouldComponentUpdate(){
    return false;
  }

  componentDidMount() {
    this.flkty = new Flickity(this.refs.slidenavigationmobile, {
      initialIndex: this.props.fontstyle.index,
      pageDots: false,
      prevNextButtons: false,
      freeScroll: true,
      freeScrollFriction: 0.1,
      // selectedAttraction: 0.01,
      // friction: 0.13,
      contain: false
    });

    this.onScrolling = false;
    this.scrollIndex = this.props.fontstyle.index;
    this.updateFocused(this.props.fontstyle.index);

    this.flkty.on( 'staticClick', (event, pointer, cellElement, cellIndex) => {
      if ( cellElement ) {
        this.props.setScrolledComponent('LetterNavigation');
        this.updateHistory( cellIndex );
        this.updateFocused( cellIndex );
      }
    })

    this.flkty.on( 'dragStart', ()=> {
      this.props.setScrolledComponent('LetterNavigation');
      this.onScrolling = true;
    });

    this.flkty.on( 'scroll', (progress)=> {
      if(this.onScrolling){
        if(this.scrollEnd){ clearTimeout(this.scrollEnd) };
        progress = Math.max( 0, Math.min( 1, progress ) );
        progress = Math.round(this.map(progress,0,1,0,this.flkty.cells.length-1));
        this.scrollIndex = progress;
        this.updateHistory( progress );
        this.updateFocused( progress  );
        this.scrollEnd = setTimeout( (progress)=> {
          this.onScrolling = false;
          this.flkty.select( this.scrollIndex  );
          this.updateFocused( this.scrollIndex  );
          this.updateHistory( this.scrollIndex  );
        }, 50);
      }
    });
  }

  map (value, in_min, in_max, out_min, out_max) {
    return (value - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }

  updateHistory(index){
    this.props.selectLetter(this.props.id,index)
  }

  updateFocused(index){
    var prevClickedCell = document.querySelector('.is-focused');
    if ( prevClickedCell ) {
      prevClickedCell.classList.remove('is-focused');
    }
    this.flkty.cells[index].element.classList.add('is-focused');
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.scrolledComponent === 'LetterSlideshow'){
      this.onScrolling = false;
      clearTimeout(this.scrollEnd);
      this.flkty.select( nextProps.fontstyle.index );
      this.updateFocused( nextProps.fontstyle.index );
    }
  }

  componentWillUnmount(){
    this.onScrolling = false;
    clearTimeout(this.scrollEnd);
  }

  renderBadge(style){
    if(style !== 'default'){
      return (
        <div className="badge">
          {style}
        </div>
      )
    }
  }

  renderLetters(letters) {
    return letters.map(letter => {
      return (
        <div key={letter.letter + letter.style } className='letter-navigation-item'>
          <div className='letter-navigation-content'>{letter.letter}</div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className='letter-navigation-container'>
        <div ref='slidenavigationmobile' className='letter-navigation'>
          {this.renderLetters(this.props.fontstyle.letters)}
        </div>
      </div>
    );
  }
}

export default connect(null, { selectLetter })(LetterNavigation);
