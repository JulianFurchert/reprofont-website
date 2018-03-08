import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';

import Overview from './Overview';
import Alphabet from './Alphabet';

class App extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="App" >
         <Route exact path='/' component={Overview}/>
         <Route exact path='/null'render={() => (<Alphabet id={0}/>)}/>
         <Route exact path='/100' render={() => (<Alphabet id={1}/>)}/>
         <Route exact path='/200' render={() => (<Alphabet id={2}/>)}/>
         <Route exact path='/300' render={() => (<Alphabet id={3}/>)}/>
         <Route exact path='/400' render={() => (<Alphabet id={4}/>)}/>
      </div>
    );
  }
}

export default App;
