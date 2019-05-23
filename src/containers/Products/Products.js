import React, { Component, Fragment } from 'react';
import { Container } from 'reactstrap';

export default class Products extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="py-5 d-flex flex-row justify-content-center align-content-center text-center bg-main">
          <h2 className="d-flex align-self-center text-white fs-xl py-md-5 py-0">
            Products and Services
          </h2>
        </Container>
        <Container className="py-5 px-3 px-md-5 fs-md lh-1">
          <div className="py-0 py-md-5 px-0 px-md-5">
            <h4>Web Development:</h4>
            <p className="description">
              Web development and wordpress consulting for those who help animals. Call for rates.
            </p>

            <br/>

            <h4>RescueFoster.com:</h4>
            <p>
              Bridging the gap between animal rescues and their fosters.
              Easy foster signup with preferences about the foster home (for example if the home has children).
              Preferences are then used to match animals to potential fosters. For example, matching a dog-aggressive foster animal to potential fosters that do not have dogs.
              The user can choose to broadcast to the potential fosters via email and text.
              When potential fosters open the message, they can signup to foster the animal. 
              The rescue's coordinator can then begin scheduling pickup! <b>Coming soon.</b>
            </p>
          </div>
        </Container>
      </Fragment>
    );
  }
}
