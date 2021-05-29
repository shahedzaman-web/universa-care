import React from "react";
import "./Appointment.css";
import HealthCare from "./../../assets/healthcare.svg";
const Appointment = () => {
  return (
    <div className="appointment-body">
      <div className="row">
        <div className="col-md-8 col-sm-12 p-5">
          <h1 className="text-white pb-4">
            WE DO WHATEVER IT MAKES TO BRING YOU PEACE OF MIND
          </h1>
          <button className="h3 btn btn-light  px-5 py-2 appointment-button">
            <b> REQUEST AN APPOINTMENT</b>
          </button>
        </div>
        <div className="col-md-4 col-sm-12 mt-2 text-center">
          <img className="mt-2" src={HealthCare} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default Appointment;
