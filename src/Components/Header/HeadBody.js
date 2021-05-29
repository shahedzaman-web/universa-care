import React from "react";
import HeaderImg from "./../../assets/home-hero.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
const HeadBody = () => {
  return (
    <div className="">
      <div className="header-color">
        <div className="row header-part">
          <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center ps-5">
            <h1 className=" header-text">
              The Future of Health Care is Home Care
            </h1>

            <p className="h3 header-text  py-3">
              Over a Decade of Trusted Care.
            </p>

            <div className="pb-5">
              <button className="all-btn  p-3  ">REQUEST AN APPOINTMENT</button>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <img className="img-fluid" src={HeaderImg} alt="" srcSet="" />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center  pt-4 coverage-style">
        <p>
          <FontAwesomeIcon className="me-2" icon={faMapMarkerAlt} />
          UNIVERSACARE AREAS OF COVERAGE
        </p>
      </div>
    </div>
  );
};

export default HeadBody;
