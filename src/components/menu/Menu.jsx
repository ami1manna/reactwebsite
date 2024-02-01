import React from 'react';
import Card from '../cards/Cards';
import './Menu.css';

function Menu() {
  return (
    <div className="menu-wrapper">
      <main className="main-content">
        <div className="hr hr-first dashed"></div>
        <div className="hr hr-second dashed"></div>

        <section className="beverages-section">
          <h3 className="section-title">Beverages</h3>
          <div className="beverages-main-content">
            <img src="https://cdn.pixabay.com/photo/2016/06/10/06/00/lemonade-1447521_960_720.png" alt="Image of a Drink" className="section-main-img" />
            <div className="beer-menu-list grid">
              <div className="beer-title-description col-1 grid-item">
                <p>Margarita</p>
                <p>Tequila, lime, agave, and mango</p>
              </div>
              <div className="beer-menu-hr col-2 grid-item"></div>
              <p className="price col-3 grid-item">&#8377; 640.00</p>
              <div className="beer-title-description col-1 grid-item">
                <p>Wine</p>
                <p>Babe Rose, Mondavi White</p>
              </div>
              <div className="beer-menu-hr col-2 grid-item"></div>
              <p className="price col-3 grid-item">&#8377; 560.00</p>
              <div className="beer-title-description col-1 grid-item">
                <p>Mineral Water</p>
                <p>Mineralized water</p>
              </div>
              <div className="beer-menu-hr col-2 grid-item"></div>
              <p className="price col-3 grid-item">&#8377; 400.00</p>
              <div className="beer-title-description col-1 grid-item">
                <p>Beer</p>
                <p>Indio, Tecate, XX</p>
              </div>
              <div className="beer-menu-hr col-2 grid-item"></div>
              <p className="price col-3 grid-item">&#8377; 400.00</p>
              <div className="beer-title-description col-1 grid-item">
                <p>Sodas</p>
                <p>Coca-Cola, Sprite, Fanta...</p>
              </div>
              <div className="beer-menu-hr col-2 grid-item"></div>
              <p className="price col-3 grid-item">&#8377; 400.00</p>
            </div>
          </div>
        </section>
        <div className="hr hr-first dashed"></div>
        <div className="hr hr-second dashed"></div>
        <section className="beverages-section">
          <h3 className="section-title">Hamburgers</h3>
          <div className="beverages-main-content">
            <div className="beer-menu-list grid">
              <div className="beer-title-description col-1 grid-item">
                <p>Chicken (Fried or Grilled)</p>
                <p>Lorem ipsum </p>
              </div>
              <div className="beer-menu-hr col-2 grid-item"></div>
              <p className="price col-3 grid-item">&#8377; 320.00</p>
              <div className="beer-title-description col-1 grid-item">
                <p>Cheese and Bacon</p>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="beer-menu-hr col-2 grid-item"></div>
              <p className="price col-3 grid-item">&#8377; 320.00</p>
              <div className="beer-title-description col-1 grid-item">
                <p>Hawaiian</p>
                <p>Lorem ipsum .</p>
              </div>
              <div className="beer-menu-hr col-2 grid-item"></div>
              <p className="price col-3 grid-item">&#8377; 320.00</p>
              <div className="beer-title-description col-1 grid-item">
                <p>Special</p>
                <p>Lorem ipsum</p>
              </div>
              <div className="beer-menu-hr col-2 grid-item"></div>
              <p className="price col-3 grid-item">&#8377; 320.00</p>
              <div className="beer-title-description col-1 grid-item">
                <p>Ham and Chicken</p>
                <p>Lorem ipsum </p>
              </div>
              <div className="beer-menu-hr col-2 grid-item"></div>
              <p className="price col-3 grid-item">&#8377; 320.00</p>
            </div>
            <img src="https://cdn.pixabay.com/photo/2012/04/05/00/36/hamburger-25357_960_720.png" alt="Image of a Beer" className="section-main-img food-img" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Menu;
