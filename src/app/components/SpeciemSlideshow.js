import React, { Component } from 'react';
import { connect } from "react-redux";
import Flickity from 'flickity';

import { selectPage } from "../../actions/index";
import './SpeciemSlideshow.css';

import img256 from '../../img/speciem/256';
import img768 from '../../img/speciem/768';
import img1280 from '../../img/speciem/1280';
import img1920 from '../../img/speciem/1920';


class SlideshowMain extends Component {

  shouldComponentUpdate(){
    return false;
  }

  componentDidMount() {
    this.flkty = new Flickity(this.refs.slideshow, {
      initialIndex: this.props.speciem.activePage,
      cellSelector: '.slideshow-item',
      pageDots: false,
      prevNextButtons: false,
      lazyLoad: 3,
      selectedAttraction: 0.04,
      friction: 0.3,
    });

    this.flkty.on('dragEnd', ()=>{
      this.props.selectPage(this.flkty.selectedIndex)
    });
  }

  componentWillReceiveProps(nextProps) {
    if(this.flkty.selectedIndex !== parseInt(nextProps.speciem.activePage,10)){
      this.flkty.select( nextProps.speciem.activePage, false, true );
    }
  }

  renderImages() {
    return img1920.map( (img,index) =>{
      return (
        <div key={index} className='slideshow-item'>
          {/* <div className="aspect-ratio-placeholder"> */}
            <img
              className="slideshow-img"
              alt={`Repro Speciem Page ${index}`}
              src={img256[index]}
              data-flickity-lazyload={img1280[index]}
              // height="1920px" width="1333px"
              data-flickity-lazyload-srcset={`${img1920[index]} 1920w, ${img1280[index]} 1280w, ${img768[index]} 768w, ${img256[index]} 256w`}
            />
          {/* </div> */}
        </div>
      );
    });
  }

  render() {
    return (
      <div ref='slideshow' className='slideshow'>
        {this.renderImages()}
      </div>
    );
  }
}

export default connect(null, { selectPage })(SlideshowMain);
