import React, { Component, Fragment } from 'react';
import { Container } from 'reactstrap';

export default class Donate extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="py-5 d-flex flex-row justify-content-center align-content-center text-center bg-main">
          <h2 className="d-flex align-self-center text-white fs-xl py-md-5 py-0">
            Donate
          </h2>
        </Container>
        <Container className="py-5 px-3 px-md-5 fs-md lh-1">
          <div className="py-0 py-md-5 px-0 px-md-5">
            <p>
              We survive through donations from those we help, please donate here:
            </p>
            <div className="d-flex justify-content-center">
              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="6Y29CU7WXP9GQ" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
              </form>
            </div>
          </div>
        </Container>
      </Fragment>
    );
  }
}
