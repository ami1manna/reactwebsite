import React from "react";
import "./Home.css";
import Button from "../button/Button";
import Cards from "../cards/Cards";
import BannerImg from "./banner.png";
export default function LandingPage() {
  return (
    <>
      <div class="card">
        <div class="card-content">
          <p class="card-title">Card hover effect</p>
          <p class="card-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sint,
            ipsa assumenda, accusantium sit debitis vel vitae amet inventore
            fugit autem natus asperiores officiis reiciendis aut nisi unde ex
            voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Cum sint, ipsa assumenda, accusantium sit debitis vel vitae amet
            inventore fugit autem natus asperiores officiis reiciendis aut nisi
            unde ex voluptate
          </p>
          <Button>Know More</Button>
        </div>

        <img src={BannerImg}></img>
      </div>
      

      <div>
      <Cards></Cards>
      <Cards></Cards>
      <Cards></Cards>
      <Cards></Cards>
      <Cards></Cards>

      <Cards></Cards>
      <Cards></Cards>
      <Cards></Cards>
      <Cards></Cards>
      <Cards></Cards>
      </div>
    </>
  );
}
