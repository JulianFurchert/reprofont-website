import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { TransitionGroup, Transition } from "react-transition-group";
import './App.css';

import Home from './pages/Home';
import LetterShowcase from './pages/LetterShowcase';
import Download from './pages/Download';


class App extends Component {

  onEnter(element){
    if(element.classList.contains("overlay-page")){
      console.log('onEnter: overlay-page');
    }
  }

  onExit(element){
    if(element.classList.contains("overlay-page")){
      console.log('onExit: overlay-page');
    }else{
      element.style.display = "none";
    }
  }

  render() {
    return (
      <Router>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <Transition
              key={location.key}
              timeout={200}
              onEnter={(e)=> { this.onEnter(e) }}
              onExit={(e) => { this.onExit(e) }} >
                <Switch location={location}>
                  <Route exact path='/null' children={({ match, ...rest }) => (<LetterShowcase id={0}/>)}/>
                  <Route exact path='/100' render={() => (<LetterShowcase id={1}/>)}/>
                  <Route exact path='/200' render={() => (<LetterShowcase id={2}/>)}/>
                  <Route exact path='/300' render={() => (<LetterShowcase id={3}/>)}/>
                  <Route exact path='/400' render={() => (<LetterShowcase id={4}/>)}/>
                  <Route exact path='/500' render={() => (<LetterShowcase id={5}/>)}/>
                  <Route exact path='/600' render={() => (<LetterShowcase id={6}/>)}/>
                  <Route exact path='/' component={Home}/>
                  <Route render={() => <div>Not Found</div>} />
                </Switch>
              </Transition>
            </TransitionGroup>
          )}
        />
      </Router>
    );
  }
}

export default App;