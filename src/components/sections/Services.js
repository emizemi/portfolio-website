import React from "react";
import { Link } from "react-scroll";
import Pagetitle from "../elements/Pagetitle";
import Service from "../elements/Service";
import Skill from "../elements/Skill";
import TrackVisibility from "react-on-screen";

const servicesData = [
  {
    id: 1,
    icon: "images/service-1.svg",
    title: "UI/UX design",
    content:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    color: "#6C6CE5",
    contentColor: "light",
  },
  {
    id: 2,
    icon: "images/service-2.svg",
    title: "Web Development",
    content:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    color: "#F9D74C",
    contentColor: "dark",
  },
  {
    id: 3,
    icon: "images/service-3.svg",
    title: "Photography",
    content:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    color: "#F97B8B",
    contentColor: "light",
  },
];

const progressDataOne = [
  {
    id: 1,
    title: "React",
    percantage: 90,
    progressColor: "#FFD15C",
  },
  {
    id: 2,
    title: "C++",
    percantage: 85,
    progressColor: "#6C6CE5",
  },
  {
    id: 3,
    title: "C",
    percantage: 80,
    progressColor: "#FF4C60",
  },
  {
    id: 4,
    title: "Python",
    percantage: 70,
    progressColor: "#FFD15C",
  },
  {
    id: 5,
    title: "Express",
    percantage: 60,
    progressColor: "#6C6CE5",
  }
];

const progressDataTwo = [
  {
    id: 1,
    title: "HTML/CSS",
    percantage: 90,
    progressColor: "#FF4C60",
  },
  {
    id: 2,
    title: "REST APIs",
    percantage: 85,
    progressColor: "#FFD15C",
  },
  {
    id: 3,
    title: "JavaScript",
    percantage: 75,
    progressColor: "#6C6CE5",
  },
  {
    id: 4,
    title: "Swift",
    percantage: 60,
    progressColor: "#FF4C60",
  },
  {
    id: 5,
    title: "MongoDB",
    percantage: 60,
    progressColor: "#FFD15C",
  }
];

function Services() {
  return (
    <section id="services">
      <div className="container">
        <Pagetitle title="Skills" />
        <div className="row">
          <div className="col-md-6 triangle-left-md triangle-top-sm">
              <div className="rounded bg-white shadow-dark padding-30">
                <div className="row">
                  <div className="col-md-12">
                    {progressDataOne.map((progress) => (
                      <TrackVisibility
                        once
                        key={progress.id}
                        className="progress-wrapper"
                      >
                        <Skill progress={progress} />
                      </TrackVisibility>
                    ))}
                  </div>
                </div>
              </div>
          </div>
          <div className="col-md-6 triangle-left-md triangle-top-sm">
              <div className="rounded bg-white shadow-dark padding-30">
                <div className="row">
                  <div className="col-md-12">
                    {progressDataTwo.map((progress) => (
                      <TrackVisibility
                        once
                        key={progress.id}
                        className="progress-wrapper"
                      >
                        <Skill progress={progress} />
                      </TrackVisibility>
                    ))}
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
