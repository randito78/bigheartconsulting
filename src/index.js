import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Container } from 'reactstrap';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './containers/Home/Home';
import About from './containers/About/About';

import './fontawesome.js';
import 'bootstrap/dist/css/bootstrap.css';
import "./styles/styles.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Container fluid className="px-0">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
          <Footer />
        </Container>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />
, document.getElementById('root'));
