import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import { Container } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';
import "./styles/styles.css";

class App extends Component {
  render() {
    return (
      <Container fluid className="px-0">
        <Header />
        <Container fluid className="py-5 text-center bg-main" style={{minHeight: "calc(100vh - 86px)"}}>
        </Container>
      </Container>
    );
  }
}

ReactDOM.render(
  <App />
, document.getElementById('root'));
