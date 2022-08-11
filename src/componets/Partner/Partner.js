import React from 'react';
import './Partner.scss';

import { AiOutlineMail } from 'react-icons/ai';
const Partner = () => {
  return (
    <section>
      <div className="container">
        <div className="partner-g">
          <div className="contact">
            <div className="title-contact">
              <AiOutlineMail />
              <h3>Subscribe Our Email For Newsletter</h3>
            </div>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <div className="email">
              <input type="text" placeholder="Enter your email" />
              <button>SUBSCRIBE</button>
            </div>{' '}
          </div>
          <div className="partner">
            {/* <Row>
            <Col md={6} sm={12}></Col>
          </Row> */}
            <img src="/img/own.png" alt="lorem" />
            <img src="/img/tow.png" alt="lorem" />
            <img src="/img/three.png" alt="lorem" />
            <img src="/img/four.png" alt="lorem" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
