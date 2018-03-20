import React, { Component } from 'react';
import { connect } from "react-redux";
import { selectPage } from "../../actions/index";

import Flickity from 'flickity';
import './SpeciemNavigation.css';
import img256 from '../../img/speciem/256';

class LetterNavigation extends Component {

  shouldComponentUpdate(){
    return false;
  }

  componentDidMount() {
    this.flkty = new Flickity(this.refs.slidenavigationmobile, {
      initialIndex: this.props.speciem.activePage,
      pageDots: false,
      prevNextButtons: false,
      freeScroll: true,
      freeScrollFriction: 0.1,
      // selectedAttraction: 0.01,
      // friction: 0.13,
      contain: false
    });

    this.onScrolling = false;
    this.scrollIndex = this.props.speciem.activePage;
    this.updateFocused(this.props.speciem.activePage);

    this.flkty.on( 'staticClick', (event, pointer, cellElement, cellIndex) => {
      if ( cellElement ) {
        this.updateHistory( cellIndex );
        this.updateFocused( cellIndex );
      }
    })

    this.flkty.on( 'dragStart', ()=> {
      this.onScrolling = true;
    });

    this.flkty.on( 'scroll', (progress)=> {
      if(this.onScrolling){
        if(this.scrollEnd){ clearTimeout(this.scrollEnd) };
        progress = Math.max( 0, Math.min( 1, progress ) );
        progress = Math.round(this.map(progress,0,1,0,this.flkty.cells.length-1));
        this.scrollIndex = progress;
        this.updateHistory( progress );
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
    this.props.selectPage(index)
  }

  updateFocused(index){
    var prevClickedCell = document.querySelector('.is-focused');
    if ( prevClickedCell ) {
      prevClickedCell.classList.remove('is-focused');
    }
    this.flkty.cells[index].element.classList.add('is-focused');
  }

  componentWillReceiveProps(nextProps) {
    if(this.flkty.selectedIndex !== nextProps.speciem.activePage && !this.onScrolling){
      console.log('updateProps');
      this.flkty.select( nextProps.speciem.activePage );
      this.updateFocused( nextProps.speciem.activePage );
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

export default connect(null, { selectPage })(LetterNavigation);
