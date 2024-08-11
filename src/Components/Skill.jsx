import { useState } from "react";

function Skills() {
  const [DisplayContainer, SetDisplayContainer] = useState(0);
  const [Back, SetBackgroundColor] = useState("purle");
  const handleonClick = () => {
    SetDisplayContainer(0);
  };
  const handleonClick2 = () => {
    SetDisplayContainer(1);
  };
  const handleonClick3 = () => {
    SetDisplayContainer(2);
  };
  return (
    <>
      <div className="SkillContainer" id="skill">
        <div className="SkillBox">
          <h2 className="SkillHeading">Skills</h2>
          <div className="Skillboxcontent">
            <div
              className={`${
                DisplayContainer == 0 ? Back : ""
              } Skillboxcontainer`}
              onClick={handleonClick}
            >
              <h3 className="ContentText">FrontEnd</h3>
            </div>
            <div
              className={`${
                DisplayContainer == 1 ? Back : ""
              } Skillboxcontainer`}
              onClick={handleonClick2}
            >
              <h3 className="ContentText">BackEnd</h3>
            </div>
            <div
              className={`${
                DisplayContainer == 2 ? Back : ""
              } Skillboxcontainer`}
              onClick={handleonClick3}
            >
              <h3 className="ContentText">SoftSkills</h3>
            </div>
          </div>
        </div>
        <div className="SkillGraph">
          {DisplayContainer == 0 && (
            <div className="SkillGraphContainer1">
              <h4 className="skillname">Html</h4>
              <div className="graphLine">
                <img src="" className="Html" alt="" />
                {/* <h5 className="percentage"> 95%</h5> */}
              </div>
              <h4 className="skillname">Css</h4>
              <div className="graphLine">
                <img src="" className="Css" alt="" />
                {/* <h5 className="percentage"> 80%</h5> */}
              </div>
              <h4 className="skillname">JavaScript</h4>
              <div className="graphLine">
                <img src="" className="Html" alt="" />
                {/* <h5 className="percentage"> 80%</h5> */}
              </div>
              <h4 className="skillname">ReactJs</h4>
              <div className="graphLine">
                <img src="" className="Html" alt="" />
                {/* <h5 className="percentage"> 80%</h5> */}
              </div>
            </div>
          )}
          {DisplayContainer == 1 && (
            <div className="SkillGraphContainer2">
              <h4 className="skillname">Python</h4>
              <img src="" className="Html" alt="" />
              <h4 className="skillname">Django</h4>
              <img src="" className="Html" alt="" />
              <h4 className="skillname">Php</h4>
              <img src="" className="Html" alt="" />
            </div>
          )}
          {DisplayContainer == 2 && (
            <div className="SkillGraphContainer2">
              <h4 className="skillname">Communication Skills</h4>
              <img src="" className="Html" alt="" />
              <h4 className="skillname">Team Leading Skills</h4>
              <img src="" className="Html" alt="" />
              <h4 className="skillname">Crowd Management</h4>
              <img src="" className="Html" alt="" />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default Skills;
