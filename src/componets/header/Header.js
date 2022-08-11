import React from 'react';
import './Header.scss';
import { AiOutlineMail } from 'react-icons/ai';
import { TiLocationOutline } from 'react-icons/ti';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { FcSearch } from 'react-icons/fc';
const Header = () => {
  return (
    <div className="header">
      <div className="header-top">
        <div className="contact-header">
          <div className="cont email">
            <AiOutlineMail />
            <p>info@website.com</p>
          </div>
          <div className="cont location">
            <TiLocationOutline />
            <p> Oakwood, Los Angeles, CA 1098</p>
          </div>
        </div>
        <div className="icons-contact">
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
        </div>
      </div>
      <div className="header-bottom">
        <div className="logo">
          <img src="/img/logo/MEDECOM-Logo.png" alt="logo" />
        </div>
        <div className="links">
          <button>Home</button>
          <button>Blog</button>
          <button>Pages</button>
          <button>Clinics</button>
          <button>Doctors</button>
          <button>Contact.US</button>
        </div>
        <div className="find">
          <FcSearch />
          <button>GET A DOCTOR</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
