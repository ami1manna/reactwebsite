import React from "react";
import "./Home.css";
import Button from "../button/Button";
import Cards from "../cards/Cards";
import BannerImg from "./banner.png";
import { HOMEPAGECARDS } from '../../homepagecard';
import { Link, animateScroll as scroll } from "react-scroll";

export default function LandingPage() {
  const scrollToSection = (sectionId) => {
    scroll.scrollTo(sectionId, {
      duration: 800,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <>
      <div className="card">
        <div className="card-content">
          <p className="card-title">Card hover effect</p>
          
          <p className="card-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sint,
            ipsa assumenda, accusantium sit debitis vel vitae amet inventore
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sint,
            ipsa assumenda, accusantium sit debitis vel vitae amet inventore
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sint,
            ipsa assumenda, accusantium sit debitis vel vitae amet inventore
          
          </p>
          <input typw="text" className="inputext"  placeholder="Dish"></input>
          <Button onClick={() => scrollToSection("section1")}>
           Search
          </Button>
        </div>

        <img src={BannerImg} alt="Banner" />
      </div>

      <div className="homecard">
        {HOMEPAGECARDS.map((item) => (
          <Link
            key={item}
            to={item.title}  // Replace 'sectionId' with the actual section ID
            smooth={true}
            duration={800}
            className="scroll-link"
          >
            <Cards {...item} />
          </Link>
        ))}
      </div>

      {/* Sample Section */}
      <div id="indian" className="section">
        <h2>Section 1</h2>
        <p>Content of Section 1 goes here...</p>
      </div>

      {/* Add more sections as needed */}
    </>
  );
}
