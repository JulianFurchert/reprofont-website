import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from "react-redux";
import { TransitionGroup, Transition } from "react-transition-group";
import { saveScrollPosition } from "../actions/index";

import anime from 'animejs';

import './App.css';

import Home from './pages/Home';
import LetterShowcase from './pages/LetterShowcase';
import Download from './pages/Download';


class App extends Component {

  shouldComponentUpdate(){
    return false;
  }

  onEnter(element){
    console.log(this.props.cardPosition);
    if(element.classList.contains("overlay-page")){
      // element.style.top = this.props.cardPosition.top + "px";
      // element.style.left = this.props.cardPosition.left + "px";
      // element.style.width = this.props.cardPosition.width + "px";
      // element.style.height = this.props.cardPosition.height + "px";

      var basicTimeline = anime.timeline();
      basicTimeline
        .add({
          targets: element,
          duration: 0,
          top: this.props.cardPosition.top,
          left: this.props.cardPosition.left,
          right: this.props.cardPosition.right,
          bottom: this.props.cardPosition.bottom
        })
        .add({
          targets: element,
          duration: 300,
          easing: 'linear',
          top: 0,
          left: 0,
          right: 0 ,
          bottom: 0
      });
      this.props.saveScrollPosition(window.scrollY);
    }else{
      window.scrollTo(0, this.props.scrollPosition);
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
              timeout={300}
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

function mapStateToProps({ scrollPosition, cardPosition }) {
  return { scrollPosition, cardPosition };
}

export default connect(mapStateToProps, {saveScrollPosition} )(App);