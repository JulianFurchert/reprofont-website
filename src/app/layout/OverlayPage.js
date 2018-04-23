import React, { Component } from 'react';
import './OverlayPage.css';

class OverlayPage extends Component {
  render() {
    return (
      <div style={this.props.style} ref="letterShowcase" className="overlay-page">
          {this.props.children}
      </div>
    );
  }
}

export default OverlayPage;