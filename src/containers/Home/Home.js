import React, { Component, Fragment } from 'react';
import { Container } from 'reactstrap';

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid className="py-5 d-flex flex-column justify-content-center align-content-center text-center bg-frontpage" style={{minHeight: "calc(100vh - 86px)"}}>
          <h2 className="d-flex align-self-center text-white fs-xl mb-3">We Help You Help Animals.</h2>
          <div className="d-flex text-center justify-content-center align-items-centers">
            <a href="" className="btn btn-primary text-uppercase ls-1 btn-lg">Contact Us</a>
          </div>
        </Container>
      </Fragment>
    )
  }
}
