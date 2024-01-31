import React from 'react';
import './Cards.css'
export default function Cards({image,title,description,dish}) {
  return (
    <div className="cardcontainer">
  <div className="box">
    <span ><img class="cardicon" src={image} /></span>
    <div>
      <strong className="cardtitle">{title}</strong>
      <p>{description}</p>
      <span>{dish}</span> <span>more+</span>
    </div>
  </div>
</div>

  );
}
