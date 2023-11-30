import React, { Component } from 'react'
import projectImg from "../assets/img/project.png"



export class Projects extends Component {
  render() {
    return (


      <section className="section4" id="projects">
        <h2 className="title">My Recent Works</h2>
        <div className="project-container">

          <div className="project-card">
            <div className="top">
              <img src={projectImg} alt="project" width="100%" />
            </div>
            <div className="bottom">
              <div className="icons">
                <i className="fa-brands fa-github"></i>
                <i className="fa-brands fa-react"></i>
              </div>
              <p>Portfolio with React</p>
              <p>Nov 1, 2023</p>
            </div>
          </div>

          <div className="project-card">
            <div className="top">
              <img src={projectImg} alt="project" width="100%" />
            </div>
            <div className="bottom">
              <div className="icons">
                <i className="fa-brands fa-github"></i>
                <i className="fa-brands fa-react"></i>
              </div>
              <p>Portfolio with React</p>
              <p>Nov 1, 2023</p>
            </div>
          </div>
          <div className="project-card">
            <div className="top">
              <img src={projectImg} alt="project" width="100%" />
            </div>
            <div className="bottom">
              <div className="icons">
                <i className="fa-brands fa-github"></i>
                <i className="fa-brands fa-react"></i>
              </div>
              <p>Portfolio with React</p>
              <p>Nov 1, 2023</p>
            </div>
          </div>

          <div className="project-card">
            <div className="top">
              <img src={projectImg} alt="project" width="100%" />
            </div>
            <div className="bottom">
              <div className="icons">
                <i className="fa-brands fa-github"></i>
                <i className="fa-brands fa-react"></i>
              </div>
              <p>Portfolio with React</p>
              <p>Nov 1, 2023</p>
            </div>
          </div>
          <div className="project-card">
            <div className="top">
              <img src={projectImg} alt="project" width="100%" />
            </div>
            <div className="bottom">
              <div className="icons">
                <i className="fa-brands fa-github"></i>
                <i className="fa-brands fa-react"></i>
              </div>
              <p>Portfolio with React</p>
              <p>Nov 1, 2023</p>
            </div>
          </div>
          <div className="project-card">
            <div className="top">
              <img src={projectImg} alt="project" width="100%" />
            </div>
            <div className="bottom">
              <div className="icons">
                <i className="fa-brands fa-github"></i>
                <i className="fa-brands fa-react"></i>
              </div>
              <p>Portfolio with React</p>
              <p>Nov 1, 2023</p>
            </div>
          </div>
        </div>
      </section>

    )
  }
}

export default Projects

