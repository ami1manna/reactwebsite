import React from 'react'
import './bookTable.css'
export default function BookTable() {
  return (
    <form className="form">
    <p className="title">Book Table </p>
    <p className="message">Book now get 20% off </p>
        <div className="flex">
        <label>
            <input required="" placeholder="First Name" type="text" className="input"/>
            
        </label>

        <label>
            <input required="" placeholder="Last Name" type="text" className="input"/>
           
        </label>
    </div>  
            
    <label>
        <input required="" placeholder="Mobile" type="number" maxLength={10} className="input"/>
        
    </label> 
        
    <label>
        <input required="" placeholder="Enter Date" type="date" className="input"/>
       
    </label>
    <label>
        <input required="" placeholder="Number of seats" type="number" className="input"/>
        
    </label>
    <button className="submit">Book</button>
  
    </form>
  )
}
