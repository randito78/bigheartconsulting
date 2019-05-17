import React, { Component, Fragment } from 'react';
import { Container } from 'reactstrap';

export default class Beneficiaries extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="py-5 d-flex flex-row justify-content-center align-content-center text-center bg-main">
          <h2 className="d-flex align-self-center text-white fs-xl py-md-5 py-0">
            Those We've Helped
          </h2>
        </Container>
        <Container className="py-5 px-3 px-md-5 fs-md lh-1">
          <div className="py-0 py-md-5 px-0 px-md-5">
            <p>
              We exist to help animal rescues and others who help animals. Below are some of those we've helped.
            </p>

            <div className="d-flex justify-content-center py-1">
              <span className="pr-2">Desert Tails Shelter</span><a href="http://deserttailsshelter.org/">http://deserttailsshelter.org/</a>
            </div>

            <div className="d-flex justify-content-center py-1">
              <span className="pr-2">Foothills Animal Rescues</span><a href="https://foothillsanimal.org/">https://foothillsanimal.org/</a>
            </div>
          </div>
        </Container>
      </Fragment>
    );
  }
}
