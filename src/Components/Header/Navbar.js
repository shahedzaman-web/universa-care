import React from "react";
import Logo from "./../../assets/UCLogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand px-3" href="/">
          <img src={Logo} alt="" srcSet="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mx-3">
            <a
              className="nav-link active border-end"
              aria-current="page"
              href="/"
            >
              ABOUT
            </a>
            <a className="nav-link border-end" href="/">
              SERVICES
            </a>
            <a className="nav-link border-end" href="/">
              RESOURCES
            </a>
            <a
              className="nav-link border-end"
              style={{ color: "#0047AB" }}
              href="/"
            >
              CAREERS
            </a>
            <a className="nav-link border-end" href="/">
              HOME CARE HEROES
            </a>
            <a className="nav-link pe-5" href="/">
              CONTACT
            </a>
          </div>
          <a className="nav-link ps-5" style={{ color: "#0047AB" }} href="/">
            <FontAwesomeIcon className="pe-1" icon={faPhoneAlt} />
            866-986-3356
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
