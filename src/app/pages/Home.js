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
              The Repro typeface is made up of seven weights, of which five were created using an algorithm. The idea for the project was born while working in Cinema4D, where text paths and splines are recalculated for export. There are several interpolation methods available that influence the appearance of the exported glyphs. This inspired me to develop my own method for recalculating glyphs. The method creates intermediate points along the paths and moves them onto a virtual orthogonal grid. Repro Null serves as the base for the other font weights. The grid becomes coarser from weight to weight until the resulting characters are no longer readable.
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