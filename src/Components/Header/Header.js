import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import Navbar from "./Navbar";
import HeadBody from "./HeadBody";
const Header = () => {
  return (
    <div>
      <div className="notifiation-bar pb-2">
        <p className="notification-text  text-center pt-3">
          <FontAwesomeIcon icon={faInfoCircle} /> READ OUR COVID-19 PRECAUTIONS
        </p>
      </div>
      <Navbar></Navbar>
      <HeadBody></HeadBody>
    </div>
  );
};

export default Header;
