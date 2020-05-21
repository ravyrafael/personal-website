import React, {useState,useEffect} from 'react'
import api from '../../utils/api'

const Projects = () => {
  const [projects, setProjects] = useState([])
    




  useEffect(()=>{
    api.get("users/ravyrafael/repos").then(response =>{
      let data = response.data.map((x) => ({url : x.svn_url, name: x.name, description: x.description, date:new Date(x.pushed_at) })).sort((x, y)=>x.date > y ? 1 : -1).filter((x,y)=> y<4)
      console.log(data)

      setProjects(data)
    })
    console.log(projects)
  },[])
  return (
        <section id="resume">
        {/* Education
      ----------------------------------------------- */}
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Projects</span></h1>
          </div>
          <div className="nine columns main-col">
            {projects.map((item)=>(
            <div className="row item">
              <div className="twelve columns">
                
            <h3>{item.name}</h3>
            <p className="info">Pushed at<span>•</span> <em className="date">{item.date.toDateString()}</em></p>
                <p>
                  {item.description}
                </p>
              </div>
            </div>
            ))
            }
          </div> {/* main-col end */}
        </div> {/* End Education */}
      </section>
    )
}

export default Projects;
