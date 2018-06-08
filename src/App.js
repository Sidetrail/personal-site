import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router} from 'react-router';
import { Switch, Route } from 'react-router-dom';
import Splash from './components/Splash';
import Info from './components/Info';
import Videos from './components/Videos';
import Images from './components/Images';
import Code from './components/Code';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div >
        <Header />
        <Switch>
          <Route exact path="/" component={Splash}/>
          <Route path="/info" component={Info}/>
          <Route path="/videos" component={Videos}/>
          <Route path="/images" component={Images}/>
          <Route path="/code" component={Code}/>
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default App;
