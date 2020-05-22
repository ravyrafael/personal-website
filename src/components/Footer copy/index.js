import React from 'react'

const index = () => {
    return (
        <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/ravyrafael/"><i className="fa fa-facebook" /></a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ravyrafael/"><i className="fa fa-linkedin" /></a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://www.github.com/ravyrafael/"><i className="fa fa-github" /></a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="skype:RavyRafael"><i className="fa fa-skype" /></a></li>
            </ul>
            <ul className="copyright">
              <li>This site is using a <a title="Styleshout" href="https://www.heroku.com/">Heroku</a> CI/CD and it was done with <a title="Styleshout" href="https://reactjs.org/">ReactJS</a></li>   
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer>
    )
}

export default index;
