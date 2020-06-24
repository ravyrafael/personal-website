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
              <div className="columns download">
                <p>
                  <a target="_blank"href="Resume_RavyRafael_2020.pdf" className="button margin"><i className="fa fa-download" />Resume</a>
                  <a target="_blank"href="Ravy_Rafael.json"className="button margin"><i className="fa fa-download" />Json Resume</a>
                </p>
              </div>
            </div> 
          </div>
        </div>
      </section> 
    )
}

export default index;
