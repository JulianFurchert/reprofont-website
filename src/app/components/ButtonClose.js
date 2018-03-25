import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import './ButtonClose.css';



class ButtonClose extends Component {

  constructor(props) {
    super(props);
    this.buttonOnClick = this.buttonOnClick.bind(this);
  }

  buttonOnClick(){
    this.props.history.push({
      pathname: '/',
      state: { animation: "overlay-close" }
    })
  }

  render(){
    return <div onClick={this.buttonOnClick} className="button-close" />
  }
}

export default withRouter(ButtonClose);