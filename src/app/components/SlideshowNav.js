import _ from "lodash";
import React, { Component } from 'react';
import { connect } from "react-redux";
import { selectLetter } from "../actions/index";

import Flickity from 'flickity';
import './SlideshowNav.css';

class LetterNavigation extends Component {

  shouldComponentUpdate(){
    return false;
  }

  componentDidMount() {
    this.flkty = new Flickity(this.refs.slidenavigationmobile, {
      initialIndex: this.props.fontstyle.activeLetterIndex,
      pageDots: false,
      prevNextButtons: false,
      freeScroll: true,
      freeScrollFriction: 0.1,
      // selectedAttraction: 0.01,
      // friction: 0.15,
      contain: false
    });

    this.updateFocused(this.props.fontstyle.activeLetterIndex);

    this.flkty.on( 'dragEnd', ()=> {
      this.updateHistory( this.flkty.selectedIndex );
      this.updateFocused( this.flkty.selectedIndex );
    });

    this.flkty.on( 'staticClick', (event, pointer, cellElement, cellIndex) => {
      if ( cellElement ) {
        this.updateHistory( cellIndex );
        this.updateFocused( cellIndex );
      }
    })

    this.flkty.on( 'scroll', (progress)=> {
      if(this.flkty.isDragging){
        progress = Math.max( 0, Math.min( 1, progress ) );
        progress = progress*10;
        progress = Math.round(this.map(progress,0,10,0,this.flkty.cells.length));
        this.updateHistory(progress);
      }
    });
  }

  map (value, in_min, in_max, out_min, out_max) {
    return (value - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }

  updateHistory(index){
    this.props.selectLetter(this.props.id,index)
  }

  updateFocused(cellIndex){
    this.flkty.select(cellIndex);
    var prevClickedCell = document.querySelector('.is-focused');
    if ( prevClickedCell ) {
      prevClickedCell.classList.remove('is-focused');
    }
    this.flkty.selectedElement.classList.add('is-focused');
  }

  componentWillReceiveProps(nextProps) {
    if(this.flkty.selectedIndex !== parseInt(nextProps.fontstyle.activeLetterIndex,10)){
      this.flkty.select( nextProps.fontstyle.activeLetterIndex);
      this.updateFocused( nextProps.fontstyle.activeLetterIndex);
    }
  }

  renderLetters() {
    return _.map(this.props.fontstyle.letters, letter => {
      return (
        <div key={letter} className='slide-navigation-item-mobile'>
          <div className='slide-navigation-content'>{letter}</div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className='slide-navigation-container'>
        <div ref='slidenavigationmobile' className='slide-navigation-mobile'>
          {this.renderLetters()}
        </div>
      </div>
    );
  }
}

export default connect(null, { selectLetter })(LetterNavigation);
