import React from 'react'
import "./timeline.scss"


const index = () => {
    return (
<section id="experiences">
        <div className="row example-centered">
          <div className="col-md-12 example-title">
            <h2>Experiences</h2>
          </div>
          <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
            <ul className="timeline timeline-centered">
            <li className="timeline-item period">
                <div className="timeline-info" />
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <h2 className="timeline-title">Totvs - 2017</h2>
                </div>
              </li>
              <li className="timeline-item">
                <div className="timeline-info">
                <div className="timeline-marker" />
                  <span></span>
                </div>
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <h3 className="timeline-title">Web Artifacts Publish</h3>
                  <p>Migrate a desktop artifacts publisher to use in a Expedition Dashboard.</p>
                  <b> Tecnologies: </b>Asp.Net; MVC5; .Net; C#; Javascript; Tfs
                </div>
              </li>
              <li className="timeline-item">
                <div className="timeline-info">
                  <span></span>
                </div>
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <h3 className="timeline-title">Expedition Dashboard Upgrade</h3>
                  <p>Refactory Dashboard using SOLID concepts for new features </p>
                  <b> Tecnologies: </b>Asp.Net; MVC5; .Net; C#; Javascript; MicrosoftTests; RhynoMocks; Tfs GatedCheckIn;
                </div>
              </li>
              <li className="timeline-item">
                <div className="timeline-info">
                  <span></span>
                </div>
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <h3 className="timeline-title">Automatic Installer Generator and Publisher</h3>
                  <p>Development of a module to automatically generate and publish installers according to the customer's request</p>
                  <b> Tecnologies: </b>Asp.Net; MVC5; .Net; C#; Javascript; InnoSetup; Jira Integration;
                </div>
              </li>
              <li className="timeline-item period">
                <div className="timeline-info" />
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <h2 className="timeline-title">Meta3 - 2018</h2>
                </div>
              </li>
              <li className="timeline-item">
                <div className="timeline-info">
                  <span></span>
                </div>
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <h3 className="timeline-title">Mercosul Plates</h3>
                  <p>Adapt all legacy systems to accept mercosul plates pattern.</p>
                  <b> Tecnologies: </b>Asp.Net; .Net; C#; Javascript; AzureDevops; git
                </div>
              </li>
              <li className="timeline-item">
                <div className="timeline-info">
                </div>
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <h3 className="timeline-title">Uniface Migration</h3>
                  <p>Migrate a legacy Uniface Sytem for a .Net Web Plataform.</p>
                  <b> Tecnologies: </b>.Net; MVC5; C#; Javascript; Uniface; AzureDevops; git
                </div>
              </li>
              <li className="timeline-item">
                <div className="timeline-info">
                </div>
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <h3 className="timeline-title">Car fleet inventory System</h3>
                  <p>Development of a new system to control car fleet data.</p>
                  <b> Tecnologies: </b>Asp.Net; MVC5; C#; Javascript; AzureDevops; git
                </div>
              </li>
              <li className="timeline-item period">
                <div className="timeline-info" />
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <h2 className="timeline-title">Reply - 2019</h2>
                </div>
              </li>
              <li className="timeline-item">
                <div className="timeline-info">
                </div>
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <h3 className="timeline-title">Manufactory Production Control System</h3>
                  <p>System to control flows of Manufactory Production.</p>
                  <b> Tecnologies: </b>.Net; C#, Windows Workflow Foundation; TCP; Tag RFID;
                </div>
              </li>
              <li className="timeline-item">
                <div className="timeline-info">
                </div>
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <h3 className="timeline-title">Internal Social Network HR App.</h3>
                  <p>Mobile Application used for internal company communication</p>
                  <b> Tecnologies: </b>React Native; Javacript, Angular6; Aws; GitLab  CI/CD;
                </div>
              </li> 
              <li className="timeline-item">
                <div className="timeline-info">
                </div>
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <h3 className="timeline-title">Code Challenge <i className="fa fa-trophy yellow" /></h3>
                  <p>7th place in Worldwide Reply CodeChallenge.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    )
}

export default index;
