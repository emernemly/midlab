import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Diagnostics from '../../asisst/medical-diagnostics.svg';
import doctor from '../../asisst/doctor.png';
import heart from '../../asisst/images.png';
import Pharmacology from '../../asisst/Pharmacology.jpeg';
import './Spicielite.scss';
const Spicielite = () => {
  return (
    <section>
      <div className="container">
        <Row>
          <Col xs={12} md={3}>
            <div className="spicielite">
              <div className="medical">
                <img src={Diagnostics} alt="medical-diagnostics" />
              </div>
              <div className="therapy">
                <h2>Therapy</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit, sed
                  do eiusmod Lorem ipsum dolor sit.
                </p>
                <div className="read-more">
                  <button>
                    read more
                    <AiOutlineArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={3}>
            <div className="spicielite">
              <div className="medical">
                <img src={doctor} alt="medical-diagnostics" />
              </div>
              <div className="therapy">
                <h2>Dentistry</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit, sed
                  do eiusmod Lorem ipsum dolor sit.
                </p>
                <div className="read-more">
                  <button>
                    read more
                    <AiOutlineArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={3}>
            <div className="spicielite">
              <div className="medical">
                <img src={heart} alt="medical-diagnostics" />
              </div>
              <div className="therapy">
                <h2>Virusology</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit, sed
                  do eiusmod Lorem ipsum dolor sit.
                </p>
                <div className="read-more">
                  <button>
                    read more
                    <AiOutlineArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={3}>
            <div className="spicielite">
              <div className="medical">
                <img src={Pharmacology} alt="medical-diagnostics" />
              </div>
              <div className="therapy">
                <h2>Pharmacology</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit, sed
                  do eiusmod Lorem ipsum dolor sit.
                </p>
                <div className="read-more">
                  <button>
                    read more
                    <AiOutlineArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Spicielite;
