import React, { Component } from 'react';

import Flickity from 'flickity';
import './SpeciemNavigation.css';
import img256 from '../../img/speciem/256';

class LetterNavigation extends Component {

  shouldComponentUpdate(){
    return false;
  }

  componentDidMount() {
    this.flkty = new Flickity(this.refs.slidenavigationmobile, {
      initialIndex: this.props.index,
      pageDots: false,
      prevNextButtons: false,
      freeScroll: true,
      freeScrollFriction: 0.1,
      contain: false,
      accessibility: false,
    });

    this.onScrolling = false;
    this.updateFocused(this.props.index);

    this.flkty.on( 'dragStart', ()=> {
      this.onScrolling = true;
    });

    this.flkty.on( 'scroll', (progress)=> {
      if(this.onScrolling){
        if(this.scrollEnd){ clearTimeout(this.scrollEnd) };
        let scrollIndex = this.calculateIndex( progress );
        this.props.setIndex( scrollIndex )
        this.scrollEnd = setTimeout( (progress)=> {
          this.onScrolling = false;
          this.flkty.select( scrollIndex  );
          this.updateFocused( scrollIndex  );
          this.props.setIndex( scrollIndex )
        }, 50);
      }
    });
  }

  calculateIndex (progress) {
    progress = Math.max( 0, Math.min( 1, progress ) );
    return Math.round( this.map( progress, 0, 1, 0, this.flkty.cells.length-1 ) );
  }

  map (value, in_min, in_max, out_min, out_max) {
    return (value - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }

  updateFocused(index){
    var prevClickedCell = document.querySelector('.is-focused');
    if( prevClickedCell ) prevClickedCell.classList.remove('is-focused');
    this.flkty.cells[index].element.classList.add('is-focused');
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.flkty.selectedIndex + " " + nextProps.index);
    if(this.flkty.selectedIndex !== nextProps.index && !this.onScrolling){
      this.flkty.select( nextProps.index );
      this.updateFocused( nextProps.index );
    }
  }

  renderImages() {
    return img256.map( (img,index) =>{
      return (
        <div key={index} className='speciem-navigation-item'>
          <img className="speciem-navigation-img" alt={`Repro Speciem Page ${index}`} src={img} />
        </div>
      );
    });
  }

  render() {
    return (
      <div className='slide-navigation-container'>
        <div ref='slidenavigationmobile' className='slide-navigation-mobile'>
          {this.renderImages()}
        </div>
      </div>
    );
  }
}

export default LetterNavigation;
