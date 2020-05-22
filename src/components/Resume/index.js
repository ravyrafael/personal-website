import React from 'react'
import Education from '../Education'
import Skills from '../Skills'
import Certificates from '../Certificates';

const index = () => {
    return (
        <section id="resume">
            <Education></Education>
            <Certificates></Certificates>
            <Skills></Skills>
        </section>
    )
}

export default index;
