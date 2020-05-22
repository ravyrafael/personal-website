import React from 'react'

const index = () => {
    return (
        <section>
        {/* Education
      ----------------------------------------------- */}
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Certificates</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Alura Javascript Career</h3>
                <p className="info">Ecmascript 6 Certified<span>•</span> <em className="date">April 2017</em></p>
              </div>
            </div>
            <div className="row item">
              <div className="twelve columns">
                <h3>Udemy React-Redux Basic</h3>
                <p className="info">React-Redux Basic Certified<span>•</span> <em className="date">March 2018</em></p>
              </div>
            </div> 
            <div className="row item">
              <div className="twelve columns">
                <h3>Udemy React-Redux Advanced</h3>
                <p className="info">React-Redux Advanced Certified<span>•</span> <em className="date">May 2018</em></p>
              </div>
            </div> 
          </div> {/* main-col end */}
        </div> {/* End Education */}
      </section>
    )
}

export default index;
