import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Transition from 'react-transition-group/Transition';
import anime from 'animejs';
import initReactFastclick from 'react-fastclick';
import './App.css';
import Home from './pages/Home';
import LetterShowcase from './pages/LetterShowcase';
import SpeciemShowcase from './pages/SpeciemShowcase';

initReactFastclick();

class App extends Component {

  onEnter(element, state){
    if(state.animation === "overlay-open"){
      element.classList.add("overlay-enter");
      var cardPosition = state.cardPosition;
      var animation = anime.timeline();
       animation
        .add({
          targets: element,
          duration: 0,
          top: cardPosition.top,
          left: cardPosition.left,
          width: cardPosition.width,
          height: cardPosition.height,
          borderRadius: "8px"
        })
        .add({
          targets: element,
          duration: 300,
          easing: 'linear',
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
          borderRadius: 0
      });
    }
  }

  onEntering(element, state){
    if(state.animation === "overlay-open"){
      element.classList.add("overlay-entering");
    }
  }

  onEntered(element, state){
    if(state.animation === "overlay-open"){
      element.classList.remove("overlay-entering");
      element.classList.remove("overlay-enter");
    }
  }

  render(){
    return(
      <Router>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <Transition
                key={location.key}
                onEnter={(e)=> { this.onEnter(e, location.state) }}
                onEntering={(e)=> { this.onEntering(e, location.state) }}
                onEntered={(e)=> { this.onEntered(e, location.state) }}
                timeout={{ enter: 600, exit: 0 }}
              >
                <Switch location={location}>
                  <Route exact path='/null'render={() => (<LetterShowcase id={0}/>)}/>
                  <Route exact path='/100' render={() => (<LetterShowcase id={1}/>)}/>
                  <Route exact path='/200' render={() => (<LetterShowcase id={2}/>)}/>
                  <Route exact path='/300' render={() => (<LetterShowcase id={3}/>)}/>
                  <Route exact path='/400' render={() => (<LetterShowcase id={4}/>)}/>
                  <Route exact path='/500' render={() => (<LetterShowcase id={5}/>)}/>
                  <Route exact path='/600' render={() => (<LetterShowcase id={6}/>)}/>
                  <Route exact path='/speciem' component={SpeciemShowcase}/>
                  <Route exact path='/' component={Home}/>
                  <Route render={() => <div>Not Found</div>} />
                </Switch>
              </Transition>
            </TransitionGroup>
          )}
        />
      </Router>
    )
  }
}

export default App;