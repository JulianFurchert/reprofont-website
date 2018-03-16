import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { saveCardPosition } from "../../actions/index";
import { connect } from "react-redux";
import Swipeable from 'react-swipeable'
import './Card.css';

class Card extends Component {

  renderInformation(){
    if(this.props.information){
      return <div className="card-information">{this.props.information}</div>
    }
  }

  cardClicked(){
    var boundingClientRect = this.refs.card.getBoundingClientRect();
    this.props.saveCardPosition({
      left: boundingClientRect.left,
      top: boundingClientRect.top,
      right: window.innerWidth - boundingClientRect.right,
      bottom: window.innerHeight - boundingClientRect.bottom,
    })
    this.props.history.push(this.props.link)
  }

  render(){
    return (
        <div ref="card" onClick={this.cardClicked.bind(this)} className="card" id={this.props.id}>
          <div className="card-body">
            {this.renderInformation()}
            {this.props.children}
          </div>
        </div>
    )
  }
}

export default withRouter( connect(null, {saveCardPosition} )( Card ) );