import React, {useState,useEffect} from 'react'
import api from '../../utils/api'

const Projects = () => {
  const [projects, setProjects] = useState([])
  
  useEffect(()=>{
    api.get("users/ravyrafael/repos").then(response =>{
      let data = response.data.map((x) => ({url : x.svn_url, name: x.name, description: x.description, date:new Date(x.pushed_at) }))
      .sort((x, y)=>x.date.getTime() < y.date.getTime() ? 1 : -1).filter((x,y)=> y<8)
      console.log(data)

      setProjects(data)
    })
    console.log(projects)
  },[])
  return (
    <section id="portfolio">
    <div className="row">
      <div className="twelve columns collapsed">
       <div className="projects-title"> 
          <h2>Last github projects</h2>
        </div>
        {/* portfolio-wrapper */}
        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {projects.map((item, index) =>(
                    <div className="columns portfolio-item">
                      <div className="item-wrap">
                        <a href={item.url} title>
                          <img alt="" src={"images/portfolio/"+index+".jpg"} />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h4>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h4>
                              <p>{item.description}</p>
                              <p></p>
                              <p className="footer">Published At {item.date.toDateString()}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
          ))}
        </div> {/* portfolio-wrapper end */}
      </div> {/* twelve columns end */}
    </div></section>
    )
}

export default Projects;
