import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './App.css';

import Home from './pages/Home';
import LetterShowcase from './pages/LetterShowcase';
import Download from './pages/Download';

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/null'render={() => (<LetterShowcase id={0}/>)}/>
      <Route exact path='/100' render={() => (<LetterShowcase id={1}/>)}/>
      <Route exact path='/200' render={() => (<LetterShowcase id={2}/>)}/>
      <Route exact path='/300' render={() => (<LetterShowcase id={3}/>)}/>
      <Route exact path='/400' render={() => (<LetterShowcase id={4}/>)}/>
      <Route exact path='/500' render={() => (<LetterShowcase id={5}/>)}/>
      <Route exact path='/600' render={() => (<LetterShowcase id={6}/>)}/>
      <Route exact path='/download' render={() => (<Download/>)}/>
      <Route exact path='/' component={Home}/>
      <Route render={() => <div>Not Found</div>} />
    </Switch>
  </Router>
);

const AppNew = () => (
  <Router>
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={300}>
            <Switch location={location}>
              <Route exact path='/null'render={() => (<LetterShowcase id={0}/>)}/>
              <Route exact path='/100' render={() => (<LetterShowcase id={1}/>)}/>
              <Route exact path='/200' render={() => (<LetterShowcase id={2}/>)}/>
              <Route exact path='/300' render={() => (<LetterShowcase id={3}/>)}/>
              <Route exact path='/400' render={() => (<LetterShowcase id={4}/>)}/>
              <Route exact path='/500' render={() => (<LetterShowcase id={5}/>)}/>
              <Route exact path='/600' render={() => (<LetterShowcase id={6}/>)}/>
              <Route exact path='/' component={Home}/>
              <Route render={() => <div>Not Found</div>} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  </Router>
);

export default App;