import React from "react";
import TrackVisibility from "react-on-screen";
import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";
import Skill from "../elements/Skill";

const aboutContent = {
  name: "Bolby",
  avatarImage: "/images/emilio-five.png",
  content:
    "Hi, I'm Emilio! I was born in New York City, but grew up in Singapore for most of my life. After I graduated from highschool in 2019, I moved back to the US to pursue a degree in computer science at Tufts University. I love building stuff and aspire to work as a software engineer after I graduate.",
};

const progressData = [
  {
    id: 1,
    title: "React/Redux",
    percantage: 90,
    progressColor: "#FFD15C",
  },
  {
    id: 2,
    title: "HTML/CSS",
    percantage: 90,
    progressColor: "#FF4C60",
  },
  {
    id: 3,
    title: "C++",
    percantage: 85,
    progressColor: "#6C6CE5",
  },
  {
    id: 4,
    title: "C",
    percantage: 80,
    progressColor: "#6C6CE5",
  },
  {
    id: 5,
    title: "JavaScript",
    percantage: 75,
    progressColor: "#6C6CE5",
  },
  {
    id: 6,
    title: "Swift",
    percantage: 60,
    progressColor: "#6C6CE5",
  },
  {
    id: 7,
    title: "Python",
    percantage: 60,
    progressColor: "#6C6CE5",
  },
  {
    id: 4,
    title: "Kubernetea",
    percantage: 60,
    progressColor: "#6C6CE5",
  }
];

const counterData = [
  {
    id: 1,
    title: "Projects completed",
    count: 198,
    icon: "icon-fire",
  },
  {
    id: 2,
    title: "Cup of coffee",
    count: 5670,
    icon: "icon-cup",
  },
  {
    id: 3,
    title: "Satisfied clients",
    count: 427,
    icon: "icon-people",
  },
  {
    id: 4,
    title: "Nominees winner",
    count: 35,
    icon: "icon-badge",
  },
];

function About() {
  return (
    <section id="about">
      <div className="container">
        <Pagetitle title="About Me" />
        <div className="row">
          <div className="col-md-3">
            <div className="text-center text-md-left">
              <img src={aboutContent.avatarImage} alt={aboutContent.name} />
            </div>
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
          </div>

          <div className="col-md-9 triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <div className="row">
                <div className="col-md-12">
                  <p>{aboutContent.content}</p>
                  <div className="mt-3">
                    <a href="EmilioEncarnacionResume.pdf" className="btn btn-default" download>
                      Download CV
                    </a>
                  </div>
                  <div
                    className="spacer d-md-none d-lg-none"
                    data-height="30"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer" data-height="70"></div>
      </div>
    </section>
  );
}

export default About;
