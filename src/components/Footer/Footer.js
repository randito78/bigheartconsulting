import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="py-5 bg-snow bt-2-fog">
          <Container>
            <Row>
              <Col xs="12" md="6" className="mx-auto text-center">
                <h5 className="fw-bold fs-sm">Get In Touch</h5>
                <ul className="list-style-none">
                  <li className="py-2 fs-xxs">
                    <a href="tel:4802366032" className="py-2 fs-xxs">
                      <FontAwesomeIcon icon="phone" className="mr-2" />(480)
                      269-3079
                    </a>{' '}
                  </li>
                  <li>
                    <a
                      href="mailto:randy@bigheartconsulting.com"
                      className="py-2 fs-xxs"
                    >
                      <FontAwesomeIcon icon="envelope" className="mr-2" />randy@bigheartconsulting.com
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
        <Container
          fluid={true}
          className="py-2 text-center text-pebble bg-charcoal fs-xxs text-uppercase ls-1"
        >
          &copy; 2018 Big Heart Consulting LLC
        </Container>
      </Fragment>
    );
  }
}
