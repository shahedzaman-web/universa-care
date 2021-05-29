import React from "react";
import UClogo from "./../../assets/UCLogo.svg";
import Ellipse from "././../../assets/Ellipse.png";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="col-md-3 col-sm-12 ps-5 pt-5 pe-5">
          <h2>
            <b>HEADQUARTERS</b>
          </h2>
          <p>246-50 57th Drive</p>
          <p>Douglaston, NY 11362</p>
          <p>hello@universacare.com</p>
          <p>P: (718) 224-3758</p>
          <p>F: 8777999065</p>
          <img className="img-fluid logo-style" src={UClogo} alt="" srcset="" />
        </div>
        <div className="col-md-2 col-sm-5 pt-5 ps-4">
          <h2>
            <b>SERVICES</b>
          </h2>
          <p>
            <img className="pe-2" src={Ellipse} alt="" srcset="" />
            Hourly Care
          </p>
          <p>
            <img className="pe-2" src={Ellipse} alt="" srcset="" />
            Daily Care
          </p>
          <p>
            <img className="pe-2" src={Ellipse} alt="" srcset="" />
            Hospital to Home
          </p>
          <p>
            <img className="pe-2" src={Ellipse} alt="" srcset="" />
            Respite Care
          </p>
          <p>
            <img className="pe-2" src={Ellipse} alt="" srcset="" />
            Specialized Care
          </p>
        </div>
        <div className="col-md-2 col-sm-5 ps-4 pt-5">
          <h2>
            <b>COMPANY</b>
          </h2>
          <p>
            <img className="pe-2" src={Ellipse} alt="" srcset="" />
            About us
          </p>
          <p>
            <img className="pe-2" src={Ellipse} alt="" srcset="" />
            Locations
          </p>
          <p>
            <img className="pe-2" src={Ellipse} alt="" srcset="" />
            Caregivers
          </p>
          <p>
            <img className="pe-2" src={Ellipse} alt="" srcset="" />
            News & Blog
          </p>
          <p>
            <img className="pe-2" src={Ellipse} alt="" srcset="" />
            Contact Us
          </p>
          <p>
            <img className="pe-2" src={Ellipse} alt="" srcset="" />
            FAQ
          </p>
        </div>
        <div className="col-md-3 col-sm-12 px-5">
          <p>Sign up to receive the latest articles</p>
          <input
            type="text"
            className="form-control"
            placeholder="Your email address"
          />
          <button className="btn all-btn">Submit</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
