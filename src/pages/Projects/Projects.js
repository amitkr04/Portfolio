import React from "react";
import "./Project.css";
import images from "../../assets/images/project1.jpeg";
import weather from "../../assets/images/weather.png";

const Projects = () => {
  return (
    <>
      <div className="container project" id="project">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          top recent Projects
        </h2>
        <hr />
        <p className="pb-3 text-center">
          A project description outlines the details of one project, including
          all its phases and processes involved, in a single document. It
          addresses the problem that initiated the project and the desired goals
          and objectives. But it doesnt have to stop there. The project
          description can also go into planning, including the activities that
          the team will execute, the timeline and even the location of the
          project. The benefits of the project are also outlined in the project
          description.
        </p>
        {/* card design */}
        <div className="row" id="ads">
          {/* first project */}
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card image">
                <span className="card-notify-badge">full stack</span>
                <img src={images} alt="project1" />
              </div>
              <div className="card-image-overlay m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">Mongodb</span>
              </div>
              <div className="card-body m-auto text-center">
                <div className="ad-title ">
                  <h5 className="text-uppercase">Ecommerce shopping website</h5>
                </div>
                <a className="ad-btn" href="https://github.com/amitkr04">
                  view
                </a>
              </div>
            </div>
          </div>
          {/* seconnd project */}
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card image">
                <span className="card-notify-badge">frontend</span>
                <img src={weather} alt="project2" />
              </div>
              <div className="card-image-overlay m-auto mt-3">
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">JavaScript</span>
                <span className="card-detail-badge">CSS</span>
                <span className="card-detail-badge">API</span>
              </div>
              <div className="card-body m-auto text-center">
                <div className="ad-title ">
                  <h5 className="text-uppercase">Weather App</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://amitkr04.github.io/Weather-App/"
                >
                  view
                </a>
              </div>
            </div>
          </div>
          {/* third project */}
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card image">
                <span className="card-notify-badge">full stack</span>
                <img src={images} alt="project3" />
              </div>
              <div className="card-image-overlay m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">Mongodb</span>
              </div>
              <div className="card-body m-auto text-center">
                <div className="ad-title ">
                  <h5 className="text-uppercase">Ecommerce shopping website</h5>
                </div>
                <a className="ad-btn" href="https://github.com/amitkr04">
                  view
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
