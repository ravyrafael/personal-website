import React from 'react'

const index = () => {
    return (
        <section>
        {/* Education
      ----------------------------------------------- */}
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>PUC Minas</h3>
                <p className="info">Bachelor of Information Systems <span>•</span> <em className="date">March 2013 [Incomplete]</em></p>
              </div>
            </div>
            <div className="row item">
              <div className="twelve columns">
                <h3>Pitágoras College</h3>
                <p className="info">Bachelor of Information Systems <span>•</span> <em className="date">March 2016 [Complete]</em></p>
              </div>
            </div>
          </div> {/* main-col end */}
        </div> {/* End Education */}
      </section>
    )
}

export default index;
