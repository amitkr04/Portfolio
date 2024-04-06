import React from "react";
import images from "../../assets/images/about profile.jpg";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src={images} alt="profile_pic" />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About me</h1>
            <p>
              myself amit kumar. I'm from patna but currently living in kolkata.
              I'm pursing my graduation in narula institute of technology
              kolkata in information technology. I completed my intermediate
              from maharaja college ara with 78% marks and schooling completed
              from high school babura with 73.4%. Along with my degree i
              completed C, Java, HTML, CSS, JavaScript and basic of dsa. Now
              taking about my hobbies are playing cricket, listening music,
              reading books etc. that's all about me. Thank you.
            </p>
            <p>
              Quote:- one thing always remember, no-one is going to do for you
              when tough times come. so prepare yourself for the worst!!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
