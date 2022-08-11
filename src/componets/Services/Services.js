import React from 'react';
import './Services.scss';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Services = () => {
  return (
    <section className="service">
      <section>
        <div className="container">
          <div className="title">
            <p>What We Do</p>
            <h2>Our Services</h2>
          </div>
          <div className="our-service">
            <div className="card-servece">
              <img src="/img/service.jpeg" alt="service" />
              <div className="service-contant">
                {' '}
                <h3>Therapy</h3>
                <div className="line"></div>
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
            <div className="card-servece">
              <img src="/img/service-two.jpeg" alt="service" />
              <div className="service-contant">
                {' '}
                <h3>Dentistry</h3>
                <div className="line"></div>
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
            <div className="card-servece">
              <img src="/img/Virusology.jpeg" alt="service" />
              <div className="service-contant">
                {' '}
                <h3>Virusology</h3>
                <div className="line"></div>
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
          </div>
        </div>
      </section>
    </section>
  );
};

export default Services;
