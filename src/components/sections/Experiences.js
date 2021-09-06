import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "Acamedic Degree",
    years: "2019 - Present",
    content:
      "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
  },
  {
    id: 2,
    title: "Bachelor’s Degree",
    years: "2017 - 2013",
    content:
      "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
  },
  {
    id: 3,
    title: "Honours Degree",
    years: "2013 - 2009",
    content:
      "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
  },
];

const experienceData = [
  {
    id: 1,
    title: "CS 160 Teaching Assistant, Tufts University Department of CS, Somerville MA",
    years: "September 2021 - Present",
    content:
      "Will be conducting recitations and office hours for the upper-level Algorithms course at Tufts",
  },
  {
    id: 2,
    title: "Frontend Web Developer, JumboCode, Somerville MA",
    years: "September 2019 - Present",
    content:
      "Worked with non-profits by coding custom technology to aid their services. Programmed using React.",
  },
  {
    id: 3,
    title: "Software Engineer Intern, Cisco, Remote Work",
    years: "June 2021 - August 2021",
    content:
      "Worked with the Emerging Technologies & Incubation team to develop new and upcoming technologies. Programmed using React, Python, Kubernetes.",
  },
  {
    id: 4,
    title: "iOS Developer Intern, JazzAsia, Singapore",
    years: "April 2017 - August 2017",
    content:
      "Built a mobile application for the JazzAsia workshop with one other developer. Programmed using Swift, Xcode, and Firebase.",
  }
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experience" />
        <div className="row">
          <div className="col-md-12">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
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
