import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';

import Overview from './Overview';
import LetterShowcase from './LetterShowcase';

class App extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="App" >
         <Route exact path='/' component={Overview}/>
         <Route exact path='/null'render={() => (<LetterShowcase id={0}/>)}/>
         <Route exact path='/100' render={() => (<LetterShowcase id={1}/>)}/>
         <Route exact path='/200' render={() => (<LetterShowcase id={2}/>)}/>
         <Route exact path='/300' render={() => (<LetterShowcase id={3}/>)}/>
         <Route exact path='/400' render={() => (<LetterShowcase id={4}/>)}/>
         <Route exact path='/500' render={() => (<LetterShowcase id={5}/>)}/>
         <Route exact path='/600' render={() => (<LetterShowcase id={6}/>)}/>
      </div>
    );
  }
}

export default App;