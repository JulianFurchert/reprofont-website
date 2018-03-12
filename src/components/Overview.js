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
          <div className="about">
            <h1 className="text">Repro ist eine Groteskschrift mit der DNA einer Monotype. Fünf weitere Schriftschnitte sind Reproduktionen dessen. Sie sind ein Produkt eines Algorithmus, welcher die Outlines auf ein darunter liegendes Raster verschiebt. Das Raster wird von Schnitt zu Schnitt gröber, bis das Ergebnis nur noch Form ist.</h1>
            <p className="text text-small">Repro Font, Julian Furchert, Lience, Github</p>
          </div>
        </div>
        <div className="container fontstyles-overview">
          {this.renderFontstyles()}
          {/* <Link className="card" to="/download">
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item">Repro Null</li>
                <li className="list-group-item">Repro 100</li>
                <li className="list-group-item">Repro 200</li>
                <li className="list-group-item">Repro 300</li>
              </ul>
            </div>
          </Link> */}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ scrollPosition, fontstyles }) {
  return { scrollPosition, fontstyles };
}

export default connect(mapStateToProps, { saveScrollPosition })(Overview);