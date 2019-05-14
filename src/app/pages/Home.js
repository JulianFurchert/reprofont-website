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
            <h1 className="text">
            Die Repro Familie besteht aus einer Grotesk Schrift und fünf generierten Schriftschnitten. Diese sind das Produkt eines Algorithmus, welcher die Gylphpfade auf ein darunter liegendes Raster verschiebt. Das Raster wird von Schriftschnitt zu Schriftschnitt immer gröber, bis die daraus resultieren Zeichen kaum lesbar sind.
            </h1>
            <p className="text text-small">
              <Link to="/speciem">Speciem</Link>, <a href="https://github.com/JulianFurchert/reprofont/blob/master/LICENSE.md">License</a>, <a href="https://github.com/JulianFurchert/reprofont">Source</a>
            </p>
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