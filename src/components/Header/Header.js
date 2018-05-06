import React, { Component } from 'react';
import { Container } from 'reactstrap';
import logo from '../../assets/logo.svg';

export default class Header extends Component {
  render() {
    return (
      <Container fluid className="py-3 bg-white d-flex px-5 flew-row">
        <img src={logo} alt="" className="d-flex" style={{maxWidth: "150px"}}/>
      </Container>
    )
  }
}
