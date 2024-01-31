import React from 'react'
import './bookTable.css'
export default function BookTable() {
  return (
    <form className="form">
    <p className="title">Register </p>
    <p className="message">Signup now and get full access to our app. </p>
        <div className="flex">
        <label>
            <input required="" placeholder="" type="text" className="input"/>
            
        </label>

        <label>
            <input required="" placeholder="" type="text" className="input"/>
           
        </label>
    </div>  
            
    <label>
        <input required="" placeholder="" type="email" className="input"/>
        
    </label> 
        
    <label>
        <input required="" placeholder="" type="password" className="input"/>
       
    </label>
    <label>
        <input required="" placeholder="" type="password" className="input"/>
        
    </label>
    <button className="submit">Submit</button>
    <p className="signin">Already have an acount ? <a href="#">Signin</a> </p>
</form>
  )
}
