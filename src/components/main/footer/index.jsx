import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Button } from "@material-ui/core";
import SaleEmail from "../../../utils/button/sale-email";
import "./style.scss";

const style = {
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  borderRadius: 50,
  border: 0,
  color: "white",
  height: 63,
  width: 45,
  padding: "0 30px",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
};

const socialIcon = [
  {
    icon: <FacebookIcon />,
    link: "https://mdbootstrap.com/docs/standard/navigation/footer/",
  },
  {
    icon: <YouTubeIcon />,
    link: "https://mdbootstrap.com/docsa/standard/navigation/footer/",
  },
  {
    icon: <LinkedInIcon />,
    link: "https://mdbootstrap.com/docs/standard/navigation/footer/",
  },
  {
    icon: <TwitterIcon />,
    link: "https://mdbootstrap.com/docs/standard/navigation/footer/",
  },
  {
    icon: <GitHubIcon />,
    link: "https://mdbootstrap.com/docs/standard/navigation/footer/",
  },
];

const renderSocialIcon = () => {
  return socialIcon.map((item, index) => {
    return (
      <Button
        key={index}
        style={style}
        aria-disabled="true"
        className="ml-2"
        href={item.link}
        target="blank"
      >
        {item.icon}
      </Button>
    );
  });
};

function Footer() {
  return (
    <div className="footer  mt-4 py-4">
      <div className="border"></div>
      <div className="social-media justify-content-center d-flex ">
        {renderSocialIcon()}
      </div>
      <div className="info my-4 w-100 text-center">
        <p>
          Orientation and STANDARDIZATION of the roadmap from LEFT-SET to HAVING
          a job
        </p>
        <h1 className="my-2">
          Real Learning, Real Project, Experienced Teacher, Dedication
        </h1>
      </div>
      <div className="row container-fluid">
        <div className="col-md-4 mb-4 our-lacation">
          <div>
            <h2>Headquarters:112 Cao Thang, District 3</h2>
            <p>
              Hotline: 096.105.1014 – 077.886.1911 Address: 5th floor, Suri
              building,112 Cao Thang, District 3, TPHCM
            </p>
          </div>
          <div>
            <h2>Headquarters:112 Cao Thang, District 3</h2>
            <p>
              Hotline: 096.105.1014 – 077.886.1911 Address: 5th floor, Suri
              building,112 Cao Thang, District 3, TPHCM
            </p>
          </div>
          <div>
            <h2>Headquarters: 112 Cao Thang, District 3</h2>
            <p>
              Hotline: 096.105.1014 – 077.886.1911 Address: 5th floor, Suri
              building, 112 Cao Thắng, Quận 3, TPHCM
            </p>
          </div>
        </div>
        <div className="col-md-4 mb-4 consultant-signup">
          <div className="my-2">
            <p>If You Need Consulting Through Email</p>
          </div>
          <div className=" input-name  input-email">
            <input type="text" className="w-100" placeholder="Your name" />
          </div>
          <div className=" input-email ">
            <input type="text" className="w-100" placeholder="Email" />
          </div>
          <div className=" input-email ">
            <input type="text" className="w-100" placeholder="Phone number" />
          </div>
          <SaleEmail />
        </div>
        <div className="col-md-4 mb-4 map-table">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.435506954447!2d106.74810636832967!3d10.777918400110817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x84b2686ecf0263ca!2sDiamond%20Island%20Luxury%20Residences!5e0!3m2!1sen!2s!4v1618562942210!5m2!1sen!2s"
            width="100%"
            height="400"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="border-2"></div>
    </div>
  );
}

export default Footer;
