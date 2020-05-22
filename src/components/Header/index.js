import React from 'react'
import Menu from '../Menu'

const index = () => {
    return (
    <header id="home">
        <Menu></Menu>
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">Hi there! I'm Ravy Rafael.</h1>
            <h3>I'm a <span>C#</span> developer and <span>Javascript</span> lover. 
            I have knowledge in <span>Node</span> and several studies carried out in <span>React,</span> <span>React Native</span> and <span>Redux</span>.  
            If you are interested in meeting me lets <a className="smoothscroll" href="#about">start scrolling </a>
              and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
            <hr />
            <ul className="social">
              <li><a target="_blank" href="https://www.linkedin.com/in/ravyrafael/"><i className="fa fa-linkedin" /></a></li>
              <li><a target="_blank" href="https://www.github.com/ravyrafael/"><i className="fa fa-github" /></a></li>
              <li><a target="_blank" href="skype:RavyRafael"><i className="fa fa-skype" /></a></li>
            </ul>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
        </p>
      </header>
    )
}

export default index;
