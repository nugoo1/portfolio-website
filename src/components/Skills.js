import React from "react";

// Images
import graphqlImage from "../images/graphql.png";
import reactImage from "../images/react-native.png";
import nodeJsImage from "../images/nodejs.png";

export default function Skills() {
  return (
    <div className="skillsContainer">
      <h2>Skills</h2>
      <h5>I try to keep up-to-date with the latest technologies and releases.</h5>
      <p>For data storage I usually use MongoDB or Firebase.</p>
      <div className="skills">
        <div>
          <img src={reactImage} />
          <h4>React.js</h4>
        </div>
        <div>
          <img src={nodeJsImage} />
          <h4>Node Js</h4>
        </div>
        <div>
          <img src={reactImage} />
          <h4>React Native</h4>
        </div>
        <div>
          <img src={graphqlImage} />
          <h4>Graph QL</h4>
        </div>
      </div>
    </div>
  );
}
