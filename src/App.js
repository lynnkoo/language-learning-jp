import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Grammar from './pages/grammar/Grammar'
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Grammar />
        </div>
      </Router>
    );
  }
}
