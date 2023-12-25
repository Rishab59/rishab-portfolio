import "./FormStyles.css" ;

import React from "react" ;


const Form = () => {
  return (
    <div className = "form">
      <form action = "https://formspree.io/f/xpzvapgk" method = "POST">
        <label>Your Name</label>
        <input type = "text" name = "name" required />

        <label>Email</label>
        <input type = "email" name = "email" required />

        <label>Subject</label>
        <input type = "text" name = "subject" required />

        <label>Message</label>
        <textarea rows = "6" cols = "50" name = "message" placeholder = "Type your Message here..." style = {{ resize: "none" }} required />          
        
        <button type = "submit" className = "btn" >Submit</button>
      </form>
    </div>
  ) ;
}


export default Form ;

