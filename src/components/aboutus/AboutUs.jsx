import React from 'react'
import './aboutus.css'
export default function Aboutus() {
  return (
    <>
    <div className="about-section">
      <img className="aboutimg" src="https://toohotel.com/wp-content/uploads/2022/09/TOO_restaurant_Panoramique_vue_Paris_nuit_v2-scaled.jpg"/>
  <div className="inner-container">

    <h1>Since 1990</h1>
    <p className="text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit ducimus, enim inventore earum, eligendi nostrum pariatur necessitatibus eius dicta a voluptates sit deleniti autem error eos totam nisi neque voluptates sit deleniti autem error eos totam nisi neque.
    </p>
    <div className="logo">
         <span>Instagram</span>
         <span>Xyz</span>
         <span>Abc</span>
    </div>
  </div>
  </div>
<form id="contact" action="" method="post">
    <h3>Contact Form</h3>
     <fieldset>
      <input placeholder="Your name" type="text" tabindex="1" required autofocus />
    </fieldset>
    <fieldset>
      <input placeholder="Your Email Address" type="email" tabindex="2" required/>
    </fieldset>
    <fieldset>
      <input placeholder="Your Phone Number (optional)" type="tel" tabindex="3" required />
    </fieldset>
    <fieldset>
      <input placeholder="Your Web Site (optional)" type="url" tabindex="4" required />
    </fieldset>
    <fieldset>
      <textarea placeholder="Type your message here...." tabindex="5" required></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
    </form>
</>
      
  )
}
