import React from "react";
import "./Header.css";
import mask from "../../assets/img/Mask Group 5.png";
import redline from "../../assets/img/Red Lines.svg";
import greyline from "../../assets/img/Gray Lines.svg";

const Header = () => {
  return (
    <>
      <div className="container">
        <div className="row header">
          <div className="col-md-5 caption">
            <h1>
              Make extra $$$ during lunch break, waiting in traffic, or from
              bed.
            </h1>
            <p>
              Since 2011, our network of members purchase deals on their credit
              cards to earn uncapped points and incredible rewards.{" "}
              <strong>It’s simple:</strong>
              The more you spend, the more you earn.
            </p>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control border border-primary"
                placeholder="Your email address"
                aria-label="Your email address"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <button className="btn btn-primary px-5" type="button">
                  Join for free!
                </button>
              </div>
            </div>
            <div className="mt-4 col-12 mx-2">
              <strong className="mr-5">10 years business</strong>
              <strong>Over 10,000 members</strong>
            </div>
          </div>
          <div className="images-group col-md-6 col-ms-5 col-lg-5 col-xl-5">
            <img src={redline} className="redline" />
            <img src={mask} className="mask" />
            <img src={greyline} className="greyline" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
