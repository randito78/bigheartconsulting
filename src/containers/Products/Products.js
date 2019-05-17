import React, { Component, Fragment } from 'react';
import { Container } from 'reactstrap';

export default class Products extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="py-5 d-flex flex-row justify-content-center align-content-center text-center bg-main">
          <h2 className="d-flex align-self-center text-white fs-xl py-md-5 py-0">
            Products
          </h2>
        </Container>
        <Container className="py-5 px-3 px-md-5 fs-md lh-1">
          <div className="py-0 py-md-5 px-0 px-md-5">
            <p>
              Coming soon
            </p>
          </div>
        </Container>
      </Fragment>
    );
  }
}
