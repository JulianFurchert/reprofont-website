import _ from "lodash";
import React, { Component } from 'react';
import { connect } from "react-redux";
import { saveScrollPosition } from "../../actions/index";
import './Home.css';

import Letter from '../components/Letter'
import Card from '../components/Card'
import DownloadList from '../components/DownloadList'

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
        <Card key={fontstyle.name} link={"/" + fontstyle.name } information={'Repro ' + fontstyle.name}>
          <Letter cssClass={fontstyle.className + " letter-card"} letter={fontstyle.activeLetter} />
        </Card>
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
          <Card link="/download">
            <DownloadList />
          </Card>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ scrollPosition, fontstyles }) {
  return { scrollPosition, fontstyles };
}

export default connect(mapStateToProps, { saveScrollPosition })(Overview);