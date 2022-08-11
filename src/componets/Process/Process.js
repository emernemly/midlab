import React from 'react';
import './Process.scss';
import { MdOutlineLocalPharmacy } from 'react-icons/md';
import { BsCalendar2Check } from 'react-icons/bs';
import { RiFeedbackLine } from 'react-icons/ri';
const Process = () => {
  return (
    <section>
      <div className="container">
        <div className="process">
          <div className="work">
            <div className="title">
              <p>Work Process</p>
              <h2>How it Works?</h2>
            </div>
            <p>
              Donec rutrum congue leo eget malesuada. Nulla porttitor accumsan
              tincidunt. Vestibulum ante ipsum primis.
            </p>
            <button>MAKE APPOINTMENT</button>
          </div>
          <div className="step">
            <div className="step-card">
              <div className="icons">
                <MdOutlineLocalPharmacy />
              </div>
              <div className="step-contact">
                <h3>Search Best Online Professional</h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable.
                </p>
                <b>Step 1</b>
              </div>
            </div>
            <div className="step-card">
              <div className="icons">
                <BsCalendar2Check />
              </div>
              <div className="step-contact">
                <h3>Get Instant Appointment</h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable.
                </p>
                <b>Step 2</b>
              </div>
            </div>
            <div className="step-card">
              <div className="icons">
                <RiFeedbackLine />
              </div>
              <div className="step-contact">
                <h3>Leave Your Feedback</h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable.
                </p>
                <b>Step 3</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
