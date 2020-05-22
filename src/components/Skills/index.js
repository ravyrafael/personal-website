import React from 'react'

const index = () => {
    return (
        <section id="skills">
      <div className="row skill">
        <div className="three columns header-col">
          <h1><span>Skills</span></h1>
        </div>
        <div className="nine columns main-col">
          <div className="bars">
            <ul className="skills">
              <li><span className="bar-expand Csharp" /><em>C#</em></li>
              <li><span className="bar-expand Net" /><em>.NET</em></li>
              <li><span className="bar-expand javascript" /><em>Javascript</em></li>
              <li><span className="bar-expand node" /><em>Node</em></li>
              <li><span className="bar-expand react" /><em>React</em></li>
              <li><span className="bar-expand react-native" /><em>React Native</em></li>
              <li><span className="bar-expand redux" /><em>Redux</em></li>
            </ul>
          </div>
        </div> 
      </div> 
      </section>
    )
}

export default index;
