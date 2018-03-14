import _ from "lodash";
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { saveScrollPosition } from "../../actions/index";

import Letter from '../components/Letter'
import './Home.css';

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
            <Letter cssClass={fontstyle.className + " letter-card"} letter={fontstyle.activeLetter} />
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
            <p className="text text-small">Speciem, License, Github</p>
          </div>
        </div>
        <div className="container fontstyles-overview">
          {this.renderFontstyles()}
          <Link className="card" to="/download">
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item">Repro Family</li>
                <li className="list-group-item">Repro Null <a href="../Repro-100.oft" className="list-group-icon" download>Down</a></li>
                <li className="list-group-item">Repro 100</li>
                <li className="list-group-item">Repro 200</li>
                <li className="list-group-item">Repro 300</li>
                <li className="list-group-item">Repro 400</li>
                <li className="list-group-item">Repro 500</li>
                <li className="list-group-item">Repro 600</li>
                <li className="list-group-item">Speciem</li>
              </ul>
            </div>
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