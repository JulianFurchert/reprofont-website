import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Card.css';

class Card extends Component {

  renderInformation(){
    if(this.props.information){
      return <div className="card-information">{this.props.information}</div>
    }
  }

  render(){
    return (
      <Link className="card" to={this.props.link}>
        <div className="card-body">
          {this.renderInformation()}
          {this.props.children}
        </div>
      </Link>
    )
  }
}

export default Card;