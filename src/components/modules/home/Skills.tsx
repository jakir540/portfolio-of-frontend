/* eslint-disable react/self-closing-comp */
import {
  SiChai,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
} from "react-icons/si";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="homeSkills relative">
      <h3 className="text-4xl font-bold mt-[-50px]">Skills</h3>
      {/* Right-Side Carousel */}
      <div className="homeSkillsBox  h-16 w-full overflow-hidden rounded-lg bg-gray-900 p-2 shadow-lg mt-[-120px] mb-5 ">
        <div className="icon-carousel flex items-center space-x-4">
          <SiChai className="icon text-white text-4xl" />
          <SiCss3 className="icon text-white text-4xl" />
          <SiExpress className="icon text-white text-4xl" />
          <SiHtml5 className="icon text-white text-4xl" />
          <SiJavascript className="icon text-white text-4xl" />
          <SiMongodb className="icon text-white text-4xl" />
          <SiNodedotjs className="icon text-white text-4xl" />
          <SiReact className="icon text-white text-4xl" />
          <SiThreedotjs className="icon text-white text-4xl" />
        </div>
      </div>

      {/* 3D Cube Section */}
      <div className="homeCubeSkills">
        <div className="homeCubeSkillFaces homeCubeSkillsFace1">
          <img
            src="https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png"
            alt="Face1"
          />
        </div>
        <div className="homeCubeSkillFaces homeCubeSkillsFace2">
          <img
            src="https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Symbol.png"
            alt="Face2"
          />
        </div>
        <div className="homeCubeSkillFaces homeCubeSkillsFace3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCK3B5SLHCrQa8K2WzmzBi0HEdBd5SfrWghw&s"
            alt="Face3"
          />
        </div>
        <div className="homeCubeSkillFaces homeCubeSkillsFace4">
          <img
            src="https://1.bp.blogspot.com/-jkSmywQ57sA/Wer3KKSqgaI/AAAAAAAACc4/07TexMsBBI4v7WlVKo76YvxM3TvrMxIdwCLcBGAs/s640/express.js.png"
            alt="Face4"
          />
        </div>
        <div className="homeCubeSkillFaces homeCubeSkillsFace5">
          <img src="https://reactnative.dev/img/logo-og.png" alt="Face5" />
        </div>
        <div className="homeCubeSkillFaces homeCubeSkillsFace6">
          <img
            src="https://hopetutors.com/wp-content/uploads/2017/03/nodejs-logo-1.png"
            alt="Face6"
          />
        </div>
      </div>
      {/* Cube Shadow */}
      <div className="cubeShadow mt-5"></div>
    </div>
  );
};

export default Skills;

// https://ibb.co.com/CVJznW7
// https://ibb.co.com/1XBh8W6
