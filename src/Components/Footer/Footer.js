import React from "react";
import UClogo from "./../../assets/UCLogo.svg";
import Ellipse from "././../../assets/Ellipse.png";
import ChapFoot from "./../../assets/chap-foot.png";
import MWBE from "./../../assets/MWBE.png";
import Facebook from "./../../assets/facebook.svg";
import Instagram from "./../../assets/instagram.svg";
import LinkedIn from "./../../assets/linkedin.svg";
import Twitter from "./../../assets/twitter.svg";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="">
      <div className="row">
        <div className="col-md-4 col-sm-12 ps-5 pt-5 pe-5">
          <h2 className="orange-text bold">HEADQUARTERS</h2>
          <hr className="rectangle" />
          <p>246-50 57th Drive</p>
          <p>Douglaston, NY 11362</p>
          <p>hello@universacare.com</p>
          <p>P: (718) 224-3758</p>
          <p>F: 8777999065</p>
          <img className="img-fluid logo-style" src={UClogo} alt="" srcSet="" />
        </div>
        <div className="col-md-2 col-sm-5 pt-5 ps-4">
          <h2 className="orange-text bold">SERVICES</h2>
          <hr className="rectangle" />
          <p>
            <img className="pe-2" src={Ellipse} alt="" srcSet="" />
            Hourly Care
          </p>
          <p>
            <img className="pe-2" src={Ellipse} alt="" srcSet="" />
            Daily Care
          </p>
          <p>
            <img className="pe-2" src={Ellipse} alt="" srcSet="" />
            Hospital to Home
          </p>
          <p>
            <img className="pe-2" src={Ellipse} alt="" srcSet="" />
            Respite Care
          </p>
          <p>
            <img className="pe-2" src={Ellipse} alt="" srcSet="" />
            Specialized Care
          </p>
        </div>
        <div className="col-md-2 col-sm-5 ps-4 pt-5">
          <h2 className="orange-text bold">COMPANY</h2>
          <hr className="rectangle" />
          <p>
            <img className="pe-2" src={Ellipse} alt="" srcSet="" />
            About us
          </p>
          <p>
            <img className="pe-2" src={Ellipse} alt="" srcSet="" />
            Locations
          </p>
          <p>
            <img className="pe-2" src={Ellipse} alt="" srcSet="" />
            Caregivers
          </p>
          <p>
            <img className="pe-2" src={Ellipse} alt="" srcSet="" />
            News & Blog
          </p>
          <p>
            <img className="pe-2" src={Ellipse} alt="" srcSet="" />
            Contact Us
          </p>
          <p>
            <img className="pe-2" src={Ellipse} alt="" srcSet="" />
            FAQ
          </p>
        </div>
        <div className="col-md-3 col-sm-12  pt-5">
          <p className="sign-up">Sign up to receive the latest articles</p>
          <div className="py-3">
            <input
              type="text"
              className="form-control w-100"
              placeholder="Your email address"
            />
          </div>

          <button className="all-btn px-4 py-2">Submit</button>
          <div className="d-flex py-3">
            <img className="img-fluid" src={ChapFoot} alt="" srcSet="" />
            <img src={MWBE} alt="" srcSet="" />
          </div>
          <div className="d-flex">
            <p>
              <b>Follow Us</b>
            </p>
            <div className="absolute-center">
              <img className="px-2" src={Facebook} alt="" srcSet="" />
              <img className="px-2" src={Instagram} alt="" srcSet="" />
              <img className="px-2" src={LinkedIn} alt="" srcSet="" />
              <img className="px-2" src={Twitter} alt="" srcSet="" />
            </div>
          </div>
        </div>
        <hr className="w-100" style={{ border: "1px solid #C4C4C4" }} />
      </div>
      <footer className="px-4 my-3 footer-text">
        Copyright 2020 <span className="orange-text bold"> Universacare</span> -
        All right reserved.
      </footer>
    </div>
  );
};

export default Footer;
