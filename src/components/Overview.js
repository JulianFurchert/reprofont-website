import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { saveScrollPosition } from "../actions/index";

import './Overview.css';

class Overview extends Component {
  componentDidMount() {
    window.scrollTo(0, this.props.scrollPosition);
  }

  componentWillUnmount(){
    console.log(window.scrollY);
    this.props.saveScrollPosition(window.scrollY);
  }


  render() {
    return (
      <div className="overview">
        <div className="container">
          <h1 className="about">Repro ist eine Groteskschrift mit der DNA einer Monotype. Fünf weitere Schriftschnitte sind Reproduktionen dessen. Sie sind ein Produkt eines Algorithmus, welcher die Outlines auf ein darunter liegendes Raster verschiebt. Das Raster wird von Schnitt zu Schnitt gröber, bis das Ergebnis nur noch Form ist.</h1>
        </div>
        <div className="container fontstyles-overview">
          <Link className="fontstyle-card" to="/null">
            <div className="fontstyle-card-letter repro-Null">{this.props.fontstyles[0].activeLetter}</div>
          </Link>
          <Link className="fontstyle-card" to="/100">
            <div className="fontstyle-card-letter repro-100">{this.props.fontstyles[1].activeLetter}</div>
          </Link>
          <Link className="fontstyle-card" to="/200">
            <div className="fontstyle-card-letter repro-200">{this.props.fontstyles[2].activeLetter}</div>
          </Link>
          <Link className="fontstyle-card" to="/300">
            <div className="fontstyle-card-letter repro-300">{this.props.fontstyles[3].activeLetter}</div>
          </Link>
          <Link className="fontstyle-card" to="/400">
            <div className="fontstyle-card-letter repro-400">{this.props.fontstyles[4].activeLetter}</div>
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ scrollPosition, fontstyles }) {
  return { scrollPosition, fontstyles };
}

export default connect(mapStateToProps, { saveScrollPosition })(Overview);