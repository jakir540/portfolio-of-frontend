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
    <div className="homeSkills">
      <h3>Skills</h3>

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
            src="https://w7.pngwing.com/pngs/324/26/png-transparent-c-letter-alphabet-letter-c-angle-a-letter-case.png"
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

      {/* Cube shadow */}
      <div className="cubeShadow"></div>

      <div className="homeSKillsBox rounded-lg" id="homeSKillsBox">
        <SiChai />
        <SiCss3 />
        <SiExpress />
        <SiHtml5 />
        <SiJavascript />
        <SiMongodb />
        <SiNodedotjs />
        <SiReact />
        <SiThreedotjs />
      </div>
    </div>
  );
};

export default Skills;
