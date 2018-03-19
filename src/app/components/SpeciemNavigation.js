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
      // friction: 0.15,
      contain: false
    });

    this.updateFocused(this.props.speciem.activePage);

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
    this.props.selectPage(index)
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
    if(this.flkty.selectedIndex !== parseInt(nextProps.speciem.activePage,10)){
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
