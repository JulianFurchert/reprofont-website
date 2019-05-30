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
              Die Idee zu der Schriftfamilie Repro entstand in Cinema4D. In Cinema werden Textpfade und Splines bei der Weiterverarbeitung in Geraden unterteilt. Zur Berechnung der Zwischenpunkte stehen dafür unterschiedliche Interpolationsmethoden zu Verfügung. Das heißt, die Form eines Buchstaben wird neben der Auswahl der Schrift auch von der Auswahl und Einstellungen der Interpolationsmethode bestimmt. Dieser Umstand inspirierte mich dazu ein eigene Methode zur Neuberechnung der Glyphen zu schreiben. Die Methode erzeugt Zwischenpunkte entlang der Pfade und verschiebt diese auf ein virtuelles orthogonales Raster. Als Ausgangsform dienen die Glyphen der Repro 100. Das Raster wird von Schriftschnitt zu Schriftschnitt (Repro 200-600) immer gröber, bis die daraus resultieren Zeichen nicht mehr lesbar sind.            </h1>
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