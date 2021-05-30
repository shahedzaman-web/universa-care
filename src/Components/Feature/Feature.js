import React from "react";
import "./Feature.css";
import Careviger1 from "./../../assets/Careviger1.svg";
import Careviger2 from "./../../assets/Careviger2.svg";
import Careviger3 from "./../../assets/Careviger3.svg";
import Careviger4 from "./../../assets/Careviger4.svg";
import Start from "./../../assets/VectorStart.png";
import End from "./../../assets/VectorEnd.png";
const Feature = () => {
  const featureData = [
    {
      id: 1,
      image: Careviger1,
      Title: "1. Initial Consultation",
      dotImg: Start,
      dotImgStyle: "dot-img-start",
    },
    {
      id: 2,
      image: Careviger2,
      Title: "2. Customize Care Plan",
      dotImg: End,
      dotImgStyle: "dot-img-end",
    },
    {
      id: 3,
      image: Careviger3,
      Title: "3. Caregiver Matching",
      dotImg: Start,
      dotImgStyle: "dot-img-start",
    },
    {
      id: 4,
      image: Careviger4,
      Title: "4. Ongoing Support & Supervision",
      dotImgStyle: "",
    },
  ];
  return (
    <div className="feature-body py-3">
      <h1 className="feature-title text-center py-5 px-5">
        How We Find <span className="feature-color">Best Careviger</span> For
        You
      </h1>
      <div className="row g-0">
        {featureData.map((item) => (
          <div
            className=" col-md-3 col-sm-11 text-center feature-list"
            key={item.id}
          >
            <div className="container">
              <img className="logos-img img-fluid" src={item.image} alt="" />
              <div className="dotImg-responsive">
                {item.id !== 4 && (
                  <img
                    className={item.dotImgStyle}
                    src={item.dotImg}
                    alt=""
                    srcSet=""
                  />
                )}
              </div>
              <div className="container pt-5 ">
                <h3 className="bold">{item.Title}</h3>
                <p className="px-5 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  eget augue nec massa volutpat aliquam fringilla non.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
