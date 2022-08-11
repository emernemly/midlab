import React from 'react';
import './Medlab.scss';
import { BsHeartFill } from 'react-icons/bs';
import { IoMdContacts } from 'react-icons/io';

const Medlab = () => {
  return (
    <section className="medlab">
      {' '}
      <div className="overly">
        <img src="/img/dna.jpeg" alt="service" />
      </div>
      <div className="container">
        <div className="medlap-group">
          <div className="medlab-clinc">
            <h2>Why Choose medtab Clinic?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. It is a
              long established fact that a reader will be Lorem ipsum dolor sit
              amet consectetur.
            </p>
            <div className="Quality system">
              {' '}
              <BsHeartFill />
              <div className="para">
                <h3>Quality Control System</h3>{' '}
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content.
                </p>
              </div>
            </div>
            <div className="Highly system">
              {' '}
              <IoMdContacts />
              <div className="para">
                {' '}
                <h3>Highly Professional Staff</h3>{' '}
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content.
                </p>
              </div>
            </div>
          </div>{' '}
          <div className="medlab-service">
            <img src="/img/service.png" alt="service" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Medlab;
