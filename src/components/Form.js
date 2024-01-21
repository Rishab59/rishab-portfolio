import "./FormStyles.css" ;

import React from "react" ;
import { useNavigate } from "react-router-dom" ;

import { useForm } from "react-hook-form" ;
import * as yup from "yup" ;
import { yupResolver } from "@hookform/resolvers/yup" ;


const Form = () => {
  const navigate = useNavigate() ;

  const schema = yup.object().shape({
    name: yup.string().required("* Name is Required !"),
    email: yup.string().email("* Email is Invalid !").required("* Email is Required !"),
    subject: yup.string().max(256, "* Subject must be at most 256 characters only !").required("* Subject is Required !"),
    message: yup.string().required("* Message is Required !"),
  }) ;

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  }) ;

  const onSubmit = async (data) => {
    // console.log(data) ;

    try {
      const response = await fetch("https://formspree.io/f/xpzvapgk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }) ;

      if (!response.ok) {
        console.error("Form submission failed: ", response.statusText) ;
      } 
      else {
        console.log("Form submitted successfully !") ;
        navigate("/") ;
      }
    }
    catch (error) {
      console.error("Form submission error: ", error.message) ;
    }
  } ;


  return (
    <div className = "form">
      <form onSubmit = { handleSubmit(onSubmit) }>
        <label>Your Name</label>
        <input type = "text" { ...register("name") } />
        <p className = "errors" style = {{ marginBottom: errors.name?.message ? "1.5rem" : "0rem" }}>{ errors.name?.message }</p>

        <label>Email</label>
        <input type = "text" { ...register("email") } />
        <p className = "errors" style = {{ marginBottom: errors.email?.message ? "1.5rem" : "0rem" }}>{errors.email?.message}</p>

        <label>Subject</label>
        <input type = "text" { ...register("subject") } />
        <p className = "errors" style = {{ marginBottom: errors.subject?.message ? "1.5rem" : "0rem" }}>{errors.subject?.message}</p>

        <label>Message</label>
        <textarea rows = "6" cols = "50" placeholder = "Type your Message here..." style = {{ resize: "none" }} { ...register("message") } />
        <p className = "errors" style = {{ marginBottom: errors.message?.message ? "1.5rem" : "0rem" }}>{errors.message?.message}</p>
        
        <button className = "btn" type = "submit" >Submit</button>
      </form>
    </div>
  ) ;
}


export default Form ;
