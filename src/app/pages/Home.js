import _ from "lodash";
import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
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
    this.props.saveScrollPosition(window.scrollY);
  }

  renderFontstyles() {
    return _.map(this.props.fontstyles, fontstyle => {
      return (
        <Card id={"card-" + fontstyle.name } key={fontstyle.name} link={"/" + fontstyle.name } information={'Repro ' + fontstyle.name}>
          <Letter
            cssClass={fontstyle.className + " letter-card style-" + fontstyle.letters[fontstyle.index].style}
            letter={fontstyle.letters[fontstyle.index].letter}
          />
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
            <p className="text text-small"><Link to="/speciem">Speciem</Link>, License, Github</p>
          </div>
        </div>
        <div className="container fontstyles-overview">
          {this.renderFontstyles()}
          <Card information={'Download'}>
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