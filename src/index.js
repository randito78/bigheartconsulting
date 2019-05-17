import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Container } from 'reactstrap';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './containers/Home/Home';
import About from './containers/About/About';
import Donate from './containers/Donate/Donate';
import Products from './containers/Products/Products';
import Beneficiaries from './containers/Beneficiaries/Beneficiaries';

import './fontawesome.js';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/styles.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Container fluid={true} className="px-0">
          <Header />
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/products" component={Products} />
            <Route path="/beneficiaries" component={Beneficiaries} />
            <Route path="/donate" component={Donate} />
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
