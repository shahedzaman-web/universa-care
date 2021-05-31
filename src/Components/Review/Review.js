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
    <div className="review-body py-3">
      <div className="row g-0">
        <div className="col-md-3 col-sm-12 d-flex flex-column justify-content-center">
          <div className="ps-5  px-5">
            <p className="h1">
              <b>5.0</b>
            </p>
            <div className="py-3">
              <FontAwesomeIcon className="me-2 text-warning" icon={faStar} />
              <FontAwesomeIcon className="me-2 text-warning" icon={faStar} />
              <FontAwesomeIcon className="me-2 text-warning" icon={faStar} />
              <FontAwesomeIcon className="me-2 text-warning" icon={faStar} />
              <FontAwesomeIcon className="me-2 text-warning" icon={faStar} />
            </div>
            <p className="h6">
              2,054 verified customers reviews by
              <b>Google</b>.
            </p>
          </div>
        </div>
        <div className="col-md-8">
          <div className="row g-0">
            <Splide
              options={{
                type: "slide",
                perPage: 3,
                breakpoints: {
                  640: {
                    perPage: 1,
                    gap: "2rem",
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
                  className="col-md-4 col-sm-8 shadow-sm bg-white px-2"
                  key={item.Review}
                >
                  <div className="m-3">
                    <h3 className="h3 my-3 bold">{item.Name}</h3>
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
                    <p className="p-2 h6">{item.Review}</p>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
          <div className="col-md-3">
            <button className="btn text-primary bold">
              See All Review
              <FontAwesomeIcon className="ms-2" icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
