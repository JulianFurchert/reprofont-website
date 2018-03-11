import _ from "lodash";
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

  renderFontstyles() {
    return _.map(this.props.fontstyles, fontstyle => {
      return (
        <Link key={fontstyle.name} className="card" to={"/" + fontstyle.name }>
          <div className="card-body">
            <div className="card-information">Repro {fontstyle.name}</div>
            <div className={"card-letter " + fontstyle.className }>{fontstyle.activeLetter}</div>
          </div>
        </Link>
      );
    });
  }

  render() {
    return (
      <div className="overview">
        <div className="container">
          <h1 className="about">Repro ist eine Groteskschrift mit der DNA einer Monotype. Fünf weitere Schriftschnitte sind Reproduktionen dessen. Sie sind ein Produkt eines Algorithmus, welcher die Outlines auf ein darunter liegendes Raster verschiebt. Das Raster wird von Schnitt zu Schnitt gröber, bis das Ergebnis nur noch Form ist.</h1>
        </div>
        <div className="container fontstyles-overview">
          {this.renderFontstyles()}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ scrollPosition, fontstyles }) {
  return { scrollPosition, fontstyles };
}

export default connect(mapStateToProps, { saveScrollPosition })(Overview);