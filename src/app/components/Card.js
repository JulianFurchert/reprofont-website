import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './Card.css';

class Card extends Component {

  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.cardOnClick = this.cardOnClick.bind(this);
  }

  renderInformation(){
    if(this.props.information){
      return <div className="card-information">{this.props.information}</div>
    }
  }

  cardOnClick(){
    var card = this.refs.card;
    var position = card.getBoundingClientRect();
    this.props.history.push({
      pathname: this.props.link,
      state: {
        cardPosition: {
          left: position.left+16 + "px",
          top: position.top + "px",
          width: card.offsetWidth-32 + "px",
          height: card.offsetHeight-32 + "px",
        },
        animation: "overlay-open"
      }
    })
  }

  render(){
    return (
        <div className="card"
          ref="card"
          id={this.props.id}
          onClick={this.cardOnClick}
        >
          <div className="card-body">
            {this.renderInformation()}
            {this.props.children}
          </div>
        </div>
    )
  }
}

export default withRouter(Card);