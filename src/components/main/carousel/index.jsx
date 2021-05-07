import React from "react";
import slider2 from "../../../assets/img/carousel/slider2.jpg";
import Registor from "../../../utils/button/registor";
import "./style.scss";

function Carousel() {
  return (
    <>
      <div className="my-carousel">
        <div className="carousel-img">
          <img src={slider2} alt="carousel img" />
        </div>
        <div className="caption d-none d-lg-block">
          <h2>self taught has never been so easy!!!</h2>
          <p>Register now this summer to receive attractive deals</p>
          <div className="registor-btn d-sm-none">
            <Registor />
          </div>
        </div>
        {/* responsive */}
        <div className="caption-responsive d-lg-none">
          <h2>self taught has never been so easy!!</h2>
          <p>Register now this summer to receive attractive deals </p>
          <div className="registor-btn-responsive d-sm-none">
            <Registor />
          </div>
          <hr></hr>
        </div>
      </div>
    </>
  );
}

export default Carousel;
