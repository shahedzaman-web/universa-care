import React from "react";
import "./Feature.css";
import Careviger1 from "./../../assets/Careviger1.svg";
import Careviger2 from "./../../assets/Careviger2.svg";
import Careviger3 from "./../../assets/Careviger3.svg";
import Careviger4 from "./../../assets/Careviger4.svg";
const Feature = () => {
  const featureData = [
    {
      image: Careviger1,
      Title: "1. Initial Consultation",
    },
    {
      image: Careviger2,
      Title: "2. Customize Care Plan",
    },
    {
      image: Careviger3,
      Title: "3. Caregiver Matching",
    },
    {
      image: Careviger4,
      Title: "4. Ongoing Support & Supervision",
    },
  ];
  return (
    <div className="feature-body py-3">
      <h2 className="feature-title text-center pt-5">
        How We Find <span className="feature-color">Best Careviger</span> For
        You
      </h2>
      <div className="row mt-5">
        {featureData.map((item) => (
          <div className="col-md-3 col-sm-12 text-center" key={item.Title}>
            <img src={item.image} alt="" />
            <h2>{item.Title}</h2>
            <p className="px-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget
              augue nec massa volutpat aliquam fringilla non.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
