import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './Card.css';

class Card extends Component {

  renderInformation(){
    if(this.props.information){
      return <div className="card-information">{this.props.information}</div>
    }
  }

  renderCardWithLink(){
    return (
      <Link className="card" id={this.props.id} to={this.props.link}>
        <div className="card-body">
          {this.renderInformation()}
          {this.props.children}
        </div>
      </Link>
    )
  }

  renderCard(){
    return (
      <div className="card" id={this.props.id}>
        <div className="card-body">
          {this.renderInformation()}
          {this.props.children}
        </div>
      </div>
    )
  }

  render(){
    return this.props.link ? this.renderCardWithLink() : this.renderCard();
  }

}

export default Card;