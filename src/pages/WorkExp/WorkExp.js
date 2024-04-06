import React from "react";
import { FaReact } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import "./WorkExp.css";

const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Feb 2024 - Mar 2024"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<FaReact />}
            >
              <h3 className="vertical-timeline-element-title">
                WebStack Academy
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                MERN Stack Developer
              </h4>
              <p>Remote Internship</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
