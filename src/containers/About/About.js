import React, { Component, Fragment } from 'react';
import { Container } from 'reactstrap';

export default class About extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="py-5 d-flex flex-row justify-content-center align-content-center text-center bg-main">
          <h2 className="d-flex align-self-center text-white fs-xl py-md-5 py-0">
            About Us
          </h2>
        </Container>
        <Container className="py-5 px-3 px-md-5 fs-md lh-1">
          <div className="py-0 py-md-5 px-0 px-md-5">
            <p>
              We help you help animals. We provide web development, consulting, and software development for those who service animals.
            </p>
            <p>
              For as long as he has been alive, the owner, Randy Brookins has always loved animals. He used to chase dogs around the neighborhood that escaped from their owner’s backyard, and make sure they got back home.
            </p>
            <p>
              Years went by, and although he found less dogs to chase, he kept a soft spot in his heart for animals. When he moved away from home, the first thing he noticed was the lack of an animal in the house, and not long later got his mutt Wrex.
            </p>
            <p>
              Now, Big Heart Consulting is a business to keep helping animals and rescues like Wrex have good lives, by helping those who already help animals do their jobs more easily, and hopefully a little cheaper.
            </p>
            <p>
              Big Heart Consulting couldn’t exist without the help of the family and friends who got it this far, and I truly hope that we continue to help animals for years to come.
            </p>
          </div>
        </Container>
      </Fragment>
    );
  }
}
