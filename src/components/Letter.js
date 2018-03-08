import _ from "lodash";
import React, { Component } from 'react';
import { connect } from "react-redux";
import { selectLetter } from "../actions/index";

import Flickity from 'flickity';
import './Letter.css';

class Letter extends Component {

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
    if(this.flkty.selectedIndex !== parseInt(nextProps.fontstyle.activeLetterIndex,10)){
      this.flkty.select( nextProps.fontstyle.activeLetterIndex, false, true );
    }
  }

  renderLetters() {
    return _.map(this.props.fontstyle.letters, letter => {
      return (
        <div className='slideshow-item'>
          <div className={this.props.fontstyle.className + ' slideshow-content'}>{letter}</div>
        </div>
      );
    });
  }

  render() {
    return (
      <div ref='slideshow' className='slideshow'>
       {this.renderLetters()}
      </div>
    );
  }
}

function mapStateToProps({ fontstyles }, ownProps) {
  return { fontstyle: fontstyles[ownProps.id] };
}

export default connect(mapStateToProps, { selectLetter })(Letter);
