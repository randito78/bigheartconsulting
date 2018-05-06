import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';

import 'bootstrap/dist/css/bootstrap.css';
import "./styles/styles.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h1>Big Heart Consulting</h1>
        <h2>We help you help animals</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <App />
, document.getElementById('root'));
