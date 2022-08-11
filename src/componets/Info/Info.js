import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import './Info.scss';
const Info = () => {
  return (
    <div className="info">
      <div className="container">
        <Row>
          <Col xs={12} md={6} lg={3}>
            <div className="count">
              <div>
                {' '}
                <b>340</b>
                <span>+</span>
              </div>
              <p>Customers</p>
            </div>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <div className="count">
              <div>
                {' '}
                <b>120</b>
                <span>+</span>
              </div>
              <p>Years Practical Experience</p>
            </div>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <div className="count">
              <div>
                <b>120</b>
                <span>+</span>
              </div>
              <p>Members</p>
            </div>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <div className="count">
              <div>
                {' '}
                <b>80</b>
                <span>+</span>
              </div>
              <p>Customers</p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Info;
