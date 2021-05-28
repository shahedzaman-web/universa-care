import React from "react";
import Logo from "./../../assets/UCLogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand px-3" href="/">
          <img src={Logo} alt="" srcset="" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav mx-3">
            <a class="nav-link active border-end" aria-current="page" href="/">
              ABOUT
            </a>
            <a class="nav-link border-end" href="/">
              SERVICES
            </a>
            <a class="nav-link border-end" href="/">
              RESOURCES
            </a>
            <a
              class="nav-link border-end"
              style={{ color: "#0047AB" }}
              href="/"
            >
              CAREERS
            </a>
            <a class="nav-link border-end" href="/">
              HOME CARE HEROES
            </a>
            <a class="nav-link pe-5" href="/">
              CONTACT
            </a>
          </div>
          <a class="nav-link ps-5" style={{ color: "#0047AB" }} href="/">
            <FontAwesomeIcon className="pe-1" icon={faPhoneAlt} />
            866-986-3356
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
