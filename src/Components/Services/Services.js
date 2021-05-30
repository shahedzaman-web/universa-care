import React from "react";
import "./Services.css";
import feature1 from "./../../assets/feature1.svg";
import feature2 from "./../../assets/feature2.svg";
import feature3 from "./../../assets/feature3.svg";
import feature4 from "./../../assets/feature4.svg";
import feature5 from "./../../assets/feature5.svg";
import feature6 from "./../../assets/feature6.svg";
import feature7 from "./../../assets/feature7.svg";
import featurePhone from "./../../assets/feature-phone.svg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";
const Services = () => {
  const features = [
    {
      Title: "Hourly Home Care",
      image: feature1,
    },
    {
      Title: "Personal Care",
      image: feature2,
    },
    {
      Title: "Private Nursing",
      image: feature3,
    },
    {
      Title: "Respite Care",
      image: feature4,
    },
    {
      Title: "Life-in Aid",
      image: feature5,
    },
    {
      Title: "Memory Care",
      image: feature6,
    },
    {
      Title: "Memory Care",
      image: feature7,
    },
  ];
  return (
    <div className="mt-2">
      <div className="row g-0">
        <div className="col-md-4 text-color mt-5 col-sm-12 ">
          <div className="ps-5">
            <h2>
              Your peace of mind is
              <br />
              <b> our number one priority.</b>
            </h2>
            <hr className="border-bottom" />
            <p className="h5">
              UniversaCare offers a range of services for in-home care. We are
              your partners in care, and work with you to come up with a plan of
              action.{" "}
            </p>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <Splide
            options={{
              type: "slide",
              perPage: 1,
              pagination: false,
              gap: "1rem",
              autoplay: true,
              pauseOnHover: false,
              resetProgress: false,
              arrows: false,
            }}
            hasSliderWrapper
          >
            {features.map((item) => (
              <SplideSlide key={item.Title} className="px-1">
                <div className="border-end border-start">
                  <div className="text-center">
                    <img src={item.image} alt="img1" />
                  </div>

                  <p className="h3 py-3 bold">{item.Title}</p>
                  <p className="px-1">
                    4x higher coverage limit than traditional policies for
                    computers and home office equipment.
                  </p>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
        <div className="col-md-3 col-sm-12 py-5 text-center">
          <img className="img-fluid " src={featurePhone} alt="" srcSet="" />
          <h2>Do you need support?</h2>
          <h5 className="py-2">We glad to help!</h5>
          <button className="all-btn py-2 px-4">CONTACT US</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
