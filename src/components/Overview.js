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
        <h1 className="about"> Julian Fsd is a type and graphic designer based in Hamburg Germany. He designs books and publications, typefaces, visual identities, websites and exhibitions for cultural institutions, businesses and individuals. Together with Max Prediger he is JMMP. They are art directors for the London and New York based publisher Montez Press and part of the studio space Open Office in Hamburg. Julian studied at HAW and HFBK Hamburg and holds a Master of fine Arts specializing in typography and type design.</h1>
        <div className="fontstyles-overview">
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