import React from "react";
import "./Review.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";
const Review = () => {
  const reviewData = [
    {
      Name: "Alvin Stanley",
      Review:
        "Great company to work for! This organization cares for its team of caregivers, office employees, and clients. There is always someone available to pick up the phone when you need help.",
    },
    {
      Name: "Alvin Stanley",
      Review:
        "Great company to work for! This organization cares for its team of caregivers, office employees, and clients.",
    },
    {
      Name: "Alvin Stanley",
      Review: "Awesome!",
    },
  ];
  return (
    <div className="review-body py-5">
      <div className="row">
        <div className="col-md-3 col-sm-12 px-5 d-flex flex-column justify-content-center  ms-5">
          <h1>
            <b>5.0</b>
          </h1>
          <div>
            <FontAwesomeIcon className="me-2 text-warning" icon={faStar} />
            <FontAwesomeIcon className="me-2 text-warning" icon={faStar} />
            <FontAwesomeIcon className="me-2 text-warning" icon={faStar} />
            <FontAwesomeIcon className="me-2 text-warning" icon={faStar} />
            <FontAwesomeIcon className="me-2 text-warning" icon={faStar} />
          </div>
          <p>
            2,054 verified customers reviews by <b>Google</b>.
          </p>
        </div>
        <div className="col-md-8">
          <div className="row">
            <Splide
              options={{
                type: "slide",
                perPage: 3,
                breakpoints: {
                  640: {
                    perPage: 1,
                  },
                },
                pagination: false,
                gap: "1rem",
                autoplay: true,
                pauseOnHover: false,
                resetProgress: false,
                arrows: false,
              }}
              hasSliderWrapper
            >
              {reviewData.map((item) => (
                <SplideSlide
                  key={item.Review}
                  className="p-2 shadow-sm bg-white col-md-4 col-sm-8"
                >
                  <h3 className="h3 my-3">
                    <b>{item.Name}</b>
                  </h3>
                  <div>
                    <FontAwesomeIcon
                      className="me-2 text-warning"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="me-2 text-warning"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="me-2 text-warning"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="me-2 text-warning"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="me-2 text-warning"
                      icon={faStar}
                    />
                  </div>
                  <p>{item.Review}</p>
                </SplideSlide>
              ))}
            </Splide>
          </div>
          <button className="btn text-primary ps-5">
            See All Review
            <FontAwesomeIcon className="ms-2" icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
