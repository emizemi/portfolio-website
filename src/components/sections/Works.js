import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Pagetitle from "../elements/Pagetitle";
import Portfolio from "../elements/Portfolio";

const filters = [
  {
    id: 1,
    text: "Everything",
  },
  {
    id: 2,
    text: "creative",
  },
  {
    id: 3,
    text: "art",
  },
  {
    id: 4,
    text: "design",
  },
  {
    id: 5,
    text: "branding",
  },
];

const allData = [
  {
    id: 1,
    title: "Emaily",
    category: "website",
    image: "images/works/5.svg",
    link: "https://github.com/emizemi/Emaily",
  },
  {
    id: 2,
    title: "Collecting Workflow-Centric Traces",
    category: "research paper",
    image: "images/works/4.svg",
    link: "https://drive.google.com/file/d/1XRZjgGl-vA26mcnwvVbEhLCZvaut2lmG/view?usp=sharing",
  },
  {
    id: 3,
    title: "Self-Improver",
    category: "IOS app",
    image: "images/works/3.svg",
    link: "https://github.com/emizemi/Self-Improver",
  },
  {
    id: 4,
    title: "Predicting CPU performance using Linear Regression",
    category: "research paper",
    image: "images/works/6.svg",
    link: "https://drive.google.com/file/d/1X-uGLRz1vT_E8p3oiDNpgVbAjjR6HFEo/view?usp=sharing",
  },
  {
    id: 5,
    title: "Slide Express",
    category: "IOS app",
    image: "images/works/1.svg",
    link: "https://appadvice.com/app/slide-express/1250966160",
  },
];

function Works() {
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(6);
  const [dataIncrement] = useState(3);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);
  const [noMorePost, setNoMorePost] = useState(false);

  useEffect(() => {
    setActiveFilter(filters[0].text.toLowerCase());
    setVisibleItems(getAllItems.filter((item) => item.id <= 6));
  }, [getAllItems]);

  const handleChange = (e) => {
    e.preventDefault();
    setActiveFilter(e.target.textContent.toLowerCase());
    let tempData;
    if (e.target.textContent.toLowerCase() === filters[0].text.toLowerCase()) {
      tempData = getAllItems.filter((data) => data.id <= dataVisibleCount);
    } else {
      tempData = getAllItems.filter(
        (data) =>
          data.category === e.target.textContent.toLowerCase() &&
          data.id <= dataVisibleCount
      );
    }
    setVisibleItems(tempData);
  };

  const handleLoadmore = (e) => {
    e.preventDefault();
    let tempCount = dataVisibleCount + dataIncrement;
    if (dataVisibleCount > getAllItems.length) {
      setNoMorePost(true);
    } else {
      setDataVisibleCount(tempCount);
      if (activeFilter === filters[0].text.toLowerCase()) {
        console.log("they are same");
        setVisibleItems(getAllItems.filter((data) => data.id <= tempCount));
      } else {
        setVisibleItems(
          getAllItems.filter(
            (data) => data.category === activeFilter && data.id <= tempCount
          )
        );
      }
    }
  };

  return (
    <section id="works">
      <div className="container">
        <Pagetitle title="Projects" />
        {/* Start Portfolio Filters */}
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeInOut"
          animateOnce={true}
        >
        </ScrollAnimation>
        {/* End Portfolio Filters */}

        {/* Start Portfolio Items */}
        <div className="row portfolio-wrapper">
          {visibleItems.map((item) => (
            <div className="col-md-4 col-sm-6 grid-item" key={item.id}>
              <Portfolio portfolio={item} />
            </div>
          ))}
        </div>
        {/* End Portfolio Items */}
      </div>
    </section>
  );
}

export default Works;
