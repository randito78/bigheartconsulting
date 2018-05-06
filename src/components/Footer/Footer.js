import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import logo from '../../assets/logo.svg';

export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid className="py-5 bg-snow bt-2-fog">
          <Container>
            <Row>
              <Col>
                <h5 className="fw-bold fs-sm">About</h5>
                <ul className="list-style-none">
                  <li>
                    <NavLink to="/about" activeClassName="fw-bold" className="fs-xxs">
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about" activeClassName="fw-bold" className="fs-xxs">
                      Contact Us
                    </NavLink>
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
