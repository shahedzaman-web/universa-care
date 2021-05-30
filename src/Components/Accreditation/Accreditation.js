import React from "react";
import Chap from "./../../assets/CHAP.png";
const Accreditation = () => {
  return (
    <div className="my-3 row g-0">
      <div className="col-md-4 col-sm-12 text-center">
        <img className="px-5 img-fluid " src={Chap} alt="" />
      </div>

      <div className="col-md-7 cols-sm-12">
        <div className="p-3">
          <h4 className="bold px-3">
            CHAP Accreditation and this line can be about this big
          </h4>
          <h5 className=" px-3">
            UniversaCare, LLC will provide the following home health care
            programs at flexible schedules and cost-friendly service rates.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Accreditation;
