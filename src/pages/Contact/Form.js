import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useForm as useFormspree } from '@formspree/react';
import { Button } from 'components';

function Form({ addClasses }) {
  const [serverState, sendToFormspree] = useFormspree(process.env.REACT_APP_FORM_ID);
  const { register, handleSubmit, errors } = useForm();
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => { 
    if (serverState.succeeded){
      setSubmitted(true);
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [serverState.succeeded]);

  return (
    <form className={"form " + addClasses} onSubmit={handleSubmit(sendToFormspree)}>
      <div className="form__field-wrapper">
        <label htmlFor="name">Name:</label> 
        <input type="text" name="name" placeholder="Enter name here" id="name" 
          ref={register({ required: "Name cannot be empty" })} />
        {errors.name && <i className="form__field-error">{errors.name.message}</i>}
      </div>

      <div className="form__field-wrapper">
        <label htmlFor="email">Email:</label> 
        <input type="email" name="email" placeholder="Enter email here" id="email" 
          ref={register({ 
            required: "Email cannot be empty",
            pattern: {
              value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Looks like this is not an email"
            }
          })} 
        />
        {errors.email && <i className="form__field-error">{errors.email.message}</i>}
      </div>

      <div className="form__field-wrapper">
        <label htmlFor="message">Message:</label> 
        <textarea name="message" placeholder="Enter message here" id="message" cols="30" rows="10" 
          ref={register({ required: "Message cannot be empty" })} />
        {errors.message && <i className="form__field-error">{errors.message.message}</i>}
      </div>

      <Button className={"form__submit-btn"} type="submit" content="Send email" disabled={Object.keys(errors).length || serverState.submitting}/>

      <div className={"form__submit-msg " + (submitted ? "visible" : null)}>Your message was sent!</div>
    </form>
  );
}
  
export default Form;