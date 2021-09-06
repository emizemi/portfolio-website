import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "Tufts University, Somerville MA",
    years: "2019 - Present",
    content:
      "Will be obtaining a Bachelor of Science in Computer Science (expected graduation is May 2023). Relevant coursework: Data Structures, Machine Structure and Assembly Language, Discrete Mathematics, Algorithms, Debugging Cloud Computing.",
  },
  {
    id: 2,
    title: "United World College of South East Asia, Singapore",
    years: "2015 - 2019",
    content:
      "Obtained a high school diploma by completing the International Baccalaureate program. Higher level subjects: Computer Science, Mathematics, Philosophy. Standard level subjects: English, Spanish, Physics.",
  }
];

const experienceData = [
  {
    id: 1,
    title: "Web Designer",
    years: "2019 - Present",
    content:
      "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
  },
  {
    id: 2,
    title: "Front-End Developer",
    years: "2017 - 2013",
    content:
      "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
  },
  {
    id: 3,
    title: "Back-End Developer",
    years: "2013 - 2009",
    content:
      "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
  },
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Education" />
        <div className="row">
          <div className="col-md-12">
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
