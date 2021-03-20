import React from "react";
import "./AboutUs.css";
import blueline from "../../assets/img/Lines.svg";
import greyline from "../../assets/img/Gray Lines.svg";

const AboutUs = () => {
  return (
    <>
      <div className="container">
        <div className="content  mt-5">
          <div className="content-header">
            <h5 className="mt-3 text-muted">About Us</h5>
            <h1>
              Local company. <br />
              Global footprint.
            </h1>
            <p className="mt-4">
              Over the past decade, we’ve made it possible for anyone <br /> to
              reap the rewards of collective buying.
            </p>
          </div>
          <div className="row">
            <img src={blueline} className="blueline mt-5" />
          </div>
          <div className="OurNumbers shadow-lg p-3 mb-5 bg-white">
            <h1 className="mt-5">Our Numbers</h1>
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide separator">
                  <span className="text-primary number">60</span>
                  <p className="text-dark">
                    Dedicated
                    <br /> Employee
                  </p>
                </div>
                <div className="swiper-slide separator">
                  <span className="text-primary number">5</span>
                  <p className="text-dark">
                    Drop-Off
                    <br /> Locations
                  </p>
                </div>
                <div className="swiper-slide separator">
                  <span className="text-primary number">10k+</span>
                  <p className="text-dark">
                    Buying Group <br /> Members
                  </p>
                </div>
                <div className="swiper-slide">
                  <span className="text-primary number">20</span>
                  <p className="text-dark">
                    Location-based
                    <br /> WhatsApp Groups
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img src={greyline} className="greylineAboutUs mb-5" />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
