import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Swipeable from 'react-swipeable'
import './Card.css';

class Card extends Component {

  renderInformation(){
    if(this.props.information){
      return <div className="card-information">{this.props.information}</div>
    }
  }

  render(){
    return (
        <Link className="card" id={this.props.id} to={this.props.link}>
          <div className="card-body">
            {this.renderInformation()}
            {this.props.children}
          </div>
        </Link>
    )
  }
}

export default Card;