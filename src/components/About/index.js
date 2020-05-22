import React from 'react'

const index = () => {
    return (
        <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profile.jpeg" alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>Who i am</h2>
            <p> I am a lively person, curious and hungry for knowledge. My main focuses are on getting things done and doing it well.
                I have a passion for cats and an unconditional love for my daughter Duda.
                I seek more international experiences and discover new cultures.
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Ravy Rafael</span><br />
                  <span> Brazil<br />
                    Belo Horizonte - MG
                  </span><br />
                  <span>+55 (31)99254-4622</span><br />
                  <span>ravyrafael@gmail.com</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a target="_blank"href="RavyRafael_2020.pdf" className="button"><i className="fa fa-download" />Resume</a>
                </p>
                <p>
                  <a target="_blank"href="RavyRafael.Json"className="button"><i className="fa fa-download" />Json Resume</a>
                </p>
              </div>
            </div> {/* end row */}
          </div> {/* end .main-col */}
        </div>
      </section> 
    )
}

export default index;
