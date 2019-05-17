import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from 'reactstrap';
import logo from '../../assets/logo.svg';

export default class Header extends Component {
  render() {
    return (
      <Container fluid={true} className="py-3 bg-white d-flex px-3 px-md-5 flew-row justify-content-center align-content-center bb-2-fog">
        <NavLink to="/" className="d-flex mr-auto">
          <img src={logo} alt="" className="d-flex align-self-center" style={{maxWidth: '150px'}} />
        </NavLink>
        <div className="d-flex align-self-center ml-auto">
          <NavLink to="/" className="d-flex align-self-center p-3 text-uppercase ls-1 text-charcoal">Home</NavLink>
          <NavLink to="/about" className="d-flex align-self-center p-3 text-uppercase ls-1 text-charcoal">About</NavLink>
          <NavLink to="/products" className="d-flex align-self-center p-3 text-uppercase ls-1 text-charcoal">Products</NavLink>
          <NavLink to="/beneficiaries" className="d-flex align-self-center p-3 text-uppercase ls-1 text-charcoal">Those We've Helped</NavLink>
          <NavLink to="/donate" className="d-flex align-self-center p-3 text-uppercase ls-1 text-charcoal">Donate</NavLink>
        </div>
      </Container>
    );
  }
}
