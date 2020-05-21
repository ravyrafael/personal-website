import React from 'react'
import Menu from '../Menu'

const index = () => {
    return (
    <header id="home">
        <Menu></Menu>
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I'm Ravy Rafael.</h1>
            <h3>I'm a <span>Javascript</span> and <span>C#</span> developer, <span>illustrator</span> and <span>webdesigner</span> creating awesome and
              effective visual identities for companies of all sizes around the globe. Let's <a className="smoothscroll" href="#about">start scrolling</a>
              and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
            <hr />
            <ul className="social">
              <li><a href="#"><i className="fa fa-facebook" /></a></li>
              <li><a href="#"><i className="fa fa-twitter" /></a></li>
              <li><a href="#"><i className="fa fa-google-plus" /></a></li>
              <li><a href="#"><i className="fa fa-linkedin" /></a></li>
              <li><a href="#"><i className="fa fa-instagram" /></a></li>
              <li><a href="#"><i className="fa fa-dribbble" /></a></li>
              <li><a href="#"><i className="fa fa-skype" /></a></li>
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
