import React from "react";
import feature1 from "../../assets/img/feature/feature-1.png";
import feature2 from "../../assets/img/feature/feature-2.png";
import feature3 from "../../assets/img/feature/feature-3.png";
import "./style.scss";

function Feature() {
  return (
    <div className="container my-5">
      <div className="row feature ">
        <div className="col-12 col-sm-4 feature-item justify-content-center">
          <div className="img">
            <img src={feature1} alt="feature 1" />
          </div>
          <div className="cap">
            <p>Hơn 5000 học viên</p>
          </div>
        </div>

        <div className="col-12 col-sm-4 feature-item justify-content-center">
          <div className="img">
            <img src={feature2} alt="feature 2" />
          </div>
          <div className="cap">
            <p>+30 Khóa Học Dành Cho Bạn</p>
          </div>
        </div>

        <div className="col-12 col-sm-4 feature-item justify-content-center">
          <div className="img">
            <img src={feature3} alt="feature 3" />
          </div>
          <div className="cap">
            <p>Học Mọi Lúc, Mọi Nơi</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
