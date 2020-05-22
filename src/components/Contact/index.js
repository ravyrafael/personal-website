import React, {useState} from 'react'
import sentEmail from "../../utils/sendEmail"
const Contact = () => {
  const [form, setForm] = useState({name:"", email:"", subject:"", message:"", phone:""})
  const [warning, setWarning] = useState("")
  const [success, setSuccess] = useState("")
  const [btnEnabled, setBtn] = useState(false)

  const handleInputChange = e => {
    const {name, value} = e.target
      setForm({...form,
          [name]: value
        })
  }
  const SendMessage = async () => {
    if(validateForm()){
      await sentEmail()
      setSuccess("Your message was sent, thank you!")
      setWarning("")
      setForm({name:"", email:"", subject:"", message:"", phone:""})
    }
    else
    {
      setWarning("Error boy")
    }
}
const validateForm = ()=>{
  var valid = !Object.entries(form).some((x,i)=>!x[1])
  console.log(valid)
  if(valid)
    if(form.email.includes("@") && form.email.includes(".com"))
      return true
  else{
    return false
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
              <div>
                <label htmlFor="contactName">Name <span className="required">*</span></label>
                <input type="text" size={35} id="name" name="name" onChange={handleInputChange} value={form.name}/>
              </div>
              <div>
                <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                <input type="email" size={35} id="email" name="email" onChange={handleInputChange} value={form.email} />
              </div>
              <div>
                <label htmlFor="contactSubject">Subject</label>
                <input type="text" size={35} id="subject" name="subject" onChange={handleInputChange} value={form.subject} />
              </div>
              <div>
                <label htmlFor="phone">Phone</label>
                <input type="text" size={35} id="phone" name="phone" onChange={handleInputChange} value={form.phone} />
              </div>
              <div>
                <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                <textarea cols={50} rows={15} id="message" name="message"  onChange={handleInputChange} value={form.contactMessage} />
              </div>
              <div>
                <button className="submit" onClick={SendMessage}>Submit</button>
                <span id="image-loader">
                  <img alt="" src="images/loader.gif" />
                </span>
              </div>
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
                <span>+55 (31)99254-4622</span><br />
                  <span>ravyrafael@gmail.com</span>
            </p>
          </div>
        </aside>
      </div>
    </section> 
    )
}

export default Contact;
