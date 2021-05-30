import React from "react";
import HeaderImg from "./../../assets/home-hero.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
const HeadBody = () => {
  return (
    <div className="">
      <div className="header-color">
        <div className="row header-part g-0">
          <div className="col-md-6 col-sm-12 d-flex flex-column py-5 ps-5">
            <p className=" header-text pt-3 h2">
              The Future of Health Care is Home Care
            </p>

            <p className="h3 header-text  py-3">
              Over a Decade of Trusted Care.
            </p>

            <div className="pb-5">
              <button className="all-btn  p-3  ">REQUEST AN APPOINTMENT</button>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 ps-2">
            <img className="img-fluid " src={HeaderImg} alt="" srcSet="" />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center  pt-3 pb-3 coverage-style ">
        <p className="bold">
          <FontAwesomeIcon className="me-2" icon={faMapMarkerAlt} />
          UNIVERSACARE AREAS OF COVERAGE
        </p>
      </div>
    </div>
  );
};

export default HeadBody;
