import React from "react";
import Chap from "./../../assets/CHAP.png";
const Accreditation = () => {
  return (
    <div className="my-3 row">
      <div className="col-md-4 col-sm-12 text-center">
        <img className="px-5 img-fluid " src={Chap} alt="" />
      </div>

      <div className="col-md-8 cols-sm-12">
        <div className="p-3">
          <h3>
            <b>CHAP Accreditation and this line can be about this big</b>
          </h3>
          <h5 className="my-3">
            UniversaCare, LLC will provide the following home health care
            programs at flexible schedules and cost-friendly service rates.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Accreditation;
