import React from "react";
import "./Appointment.css";
import Arrow from "./../../assets/Arrow.png";
import HealthCare from "./../../assets/healthcare.svg";
const Appointment = () => {
  return (
    <div className="appointment-body ">
      <div className="row g-0">
        <div className="col-md-7 col-sm-12">
          <div className="p-5 appointment-header">
            <h1 className="text-white p-3">
              WE DO WHATEVER IT MAKES TO BRING YOU PEACE OF MIND
            </h1>
            <button className=" px-5 py-2 appointment-button bold">
              REQUEST AN APPOINTMENT
            </button>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 mt-2 text-center">
          <img className="mt-2" src={HealthCare} alt="" srcSet="" />
        </div>
        <img className="arrow-img" src={Arrow} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Appointment;
