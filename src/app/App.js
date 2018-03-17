import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from "react-redux";
import { saveScrollPosition } from "../actions/index";

import './App.css';

import Home from './pages/Home';
import LetterShowcase from './pages/LetterShowcase';
import Download from './pages/Download';

class App extends Component {

  shouldComponentUpdate(){
    return false;
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/null' render={() => (<LetterShowcase id={0}/>)}/>
          <Route exact path='/100' render={() => (<LetterShowcase id={1}/>)}/>
          <Route exact path='/200' render={() => (<LetterShowcase id={2}/>)}/>
          <Route exact path='/300' render={() => (<LetterShowcase id={3}/>)}/>
          <Route exact path='/400' render={() => (<LetterShowcase id={4}/>)}/>
          <Route exact path='/500' render={() => (<LetterShowcase id={5}/>)}/>
          <Route exact path='/600' render={() => (<LetterShowcase id={6}/>)}/>
          <Route exact path='/' component={Home}/>
          <Route render={() => <div>Not Found</div>} />
        </Switch>
      </Router>
    );
  }
}

function mapStateToProps({ scrollPosition, cardPosition }) {
  return { scrollPosition, cardPosition };
}

export default connect(mapStateToProps, {saveScrollPosition} )(App);