import React from "react";
import "./Skills.css";
import { SkillsList } from "../../utils/SkillsList";

const Skills = () => {
  return (
    <>
      <div className="contaier skills" id="skills">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Technical Skills
        </h2>
        <hr />
        <p className="pb-3 text-center">
          👉 C, Java, DSA, Sql, HTML, CSS, JavaScript, front-end and back-end
          Skills and APIs
        </p>
        <div className="row">
          {SkillsList.map((tech) => (
            <div key={tech._id} className="col-md-3">
              <div className="card m-2">
                <div className="card-content">
                  <div className="card-body">
                    <div className="media d-flex justify-cotent-center">
                      <div className="alig-self-center">
                        <tech.icon className="Skills-icon" />
                      </div>
                      <div className="media-body">
                        <h5>{tech.name}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
