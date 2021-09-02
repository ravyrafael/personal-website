import React, {useState, useEffect} from 'react'
import api from "../../utils/api"
import { useForm } from "react-hook-form";

const Contact = ({saveFile}) => {
  const { handleSubmit, register, errors } = useForm();
  const [warning, setWarning] = useState("")
  const [isLoading, setLoading] = useState(false)
  const [success, setSuccess] = useState("")
  useEffect(()=>{
  },[errors])


const onSubmit = (values, e) =>{ 
  setLoading(true)
  try{
    fetch("http://handson-way-backend-alb-925492143.us-east-1.elb.amazonaws.com/cards/image/52")
    .then(function(response) {
      console.log(response)
      return response.blob()
    })
    .then(function(blob) {
        const navigator = window.navigator;
        var file = new File([blob], "picture.jpg", {type: 'image/jpeg'});
        var filesArray = [file];
  
        if(navigator.canShare && navigator.canShare({ files: filesArray })) {
          navigator.share({
            text: 'some_text',
            files: filesArray,
            title: 'some_title',
            url: 'some_url'
          });
        }
      })
  

    api.post("/message",values).then(x=>{
      e.target.reset()
      setSuccess("Your message was sent!")
      setWarning("")
      setLoading(false)
    }).catch(err=>{
      console.log(err)
      setSuccess("")
      setWarning("Error. Oh boy...")
      setLoading(false)
    })
  }
  catch(err){
    console.log(err)
    setSuccess("")
    setWarning("Error. Oh boy...")
    setLoading(false)
  }
}

    return (
      <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
        <h1><span>Would you like to know me better? Get In Touch.</span></h1>
        </div>
        <div className="ten columns">
        <h2>Would you like to know me better? Get In Touch.</h2>
        </div>
      </div>
      <div className="row">
        <div className="eight columns">
            <fieldset>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
              <red>{errors.name && errors.name.message}</red>
                <label htmlFor="contactName">Name <span className="required">*</span></label>
                <input type="text" size={35} id="name" name="name" ref={register({required:"Required"})}/>

              </div>
              <div>
              <red>{errors.email && errors.email.message}</red>
                <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                <input type="email" size={35} id="email" name="email" ref={register({
                  required: "Required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "invalid email address"
                  }
                })} />
              </div>
              <div>
              <red>{errors.subject && errors.subject.message}</red>
                <label htmlFor="contactSubject">Subject <span className="required">*</span></label>
                <input type="text" size={35} id="subject" name="subject" ref={register({required:"Required"})} />
                
              </div>
              <div>
              <red>{errors.phone && errors.phone.message}</red>
                 <label htmlFor="phone">Phone <span className="required">*</span></label>
                <input type="text" size={35} id="phone" name="phone" ref={register({required:"Required"})} />
                
              </div>
              <div>
              <red> {errors.message && errors.message.message}</red>
                <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                <textarea cols={50} rows={4} id="message" name="message" class="textarea-fixed" ref={register({required:"Required"})} />
              </div>
              <div>
                <button className="submit">Submit</button>
                {isLoading && <span id="image-loader">
                  <img alt="" src="images/loader.gif" />
                </span>}
              </div>
              </form>
            </fieldset>
             {warning && <div id="message-warning"> {warning}</div>}
             {success && <div id="message-success">
            <i className="fa fa-check" />{success}<br />
          </div>}
        </div>
        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
                <h4>Contact Details</h4>
                <p className="address">
                Ravy Rafael<br />
                Brazil<br />
                Belo Horizonte - MG<br />
                <span>+55 (31) 99254-4622</span><br />
                  <span>ravyrafael@gmail.com</span>
            </p>
          </div>
        </aside>
      </div>
    </section> 
    )
}

export default Contact;
