import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import logo from '../../assets/logo.svg';

export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid className="py-5 bg-snow bt-2-fog">
          <Container>
            <Row>
              <Col xs="12" md="3">
                <h5 className="fw-bold fs-sm">About</h5>
                <ul className="list-style-none">
                  <li className="py-2 fs-xxs">
                    <NavLink to="/about">
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </Col>
              <Col xs="12" md="3">
                <h5 className="fw-bold fs-sm">Contact Us</h5>
                <ul className="list-style-none">
                  <li className="py-2 fs-xxs">
                    <NavLink to="/about" activeClassName="fw-bold">
                      <FontAwesomeIcon icon="phone" className="mr-2"/>(480) 236-6032
                    </NavLink>
                  </li>
                  <li>
                    <a href="mailto:randy@bigheartconsulting.com" className="py-2 fs-xxs">
                      <FontAwesomeIcon icon="envelope" className="mr-2"/>randy@bigheartconsulting.com
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
        <Container fluid className="py-2 text-center text-pebble bg-charcoal fs-xxs text-uppercase ls-1">
          &copy; 2018 Big Heart Consulting LLC
        </Container>
      </Fragment>
    )
  }
}
