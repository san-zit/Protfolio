import React from "react";
import "./style.scss"
import projectImg from "./assets/img/project.png"
import userImg from "./assets/img/user.png"
function App() {
  return (

    <div className="wrapper">
      {/* <!-- Nav --> */}
      <header className="primary-header" id="home">
        <div className="left">
          <div>
            <h1>Sanjit</h1>
          </div>
          <div className="line"></div>
          <div>
            <h1>Soft. Engineer</h1>
          </div>
        </div>
        <div className="right">

          <input type="checkbox" id="check" />
          <label htmlFor="check" className="menu-icon">
            <i className="fa-solid fa-bars"></i>
          </label>

          <ul className="navigation">
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </header>

      {/* <!-- Hero --> */}
      <section className="section1" id="hero">
        <div className="hero">
          <div className="left">
            <div className="name">Hi, I am Sanjit Rijal</div>
            <div className="tag">Full stack Developer</div>
            <div className="sub-tag">I love coding</div>
            <a href={projectImg} download>
              <button>
                Download My CV 
                <i className="fa-solid fa-download"></i>
              </button>
            </a>
          </div>
          <div className="right">
            <img src={userImg} alt="User" />
          </div>
        </div>
      </section>

      {/* <!-- Banner --> */}
      <section className="section2">
        <div className="info-container">
          <div className="info-lists">
            <div className="info-content">
              <div className="icon-container">
                <i className="fa-solid fa-award"></i>
              </div>
              <div>
                <h5>IT</h5>
                <p>Graduate</p>
              </div>
            </div>
            <div className="divider">
            </div>

            <div className="info-content">
              <div className="icon-container">
                <i className="fa-solid fa-award"></i>
              </div>
              <div>
                <h5>IT</h5>
                <p>Graduate</p>
              </div>
            </div>
            <div className="divider">
            </div>
            <div className="info-content">
              <div className="icon-container">
                <i className="fa-solid fa-award"></i>
              </div>
              <div>
                <h5>IT</h5>
                <p>Graduate</p>
              </div>
            </div>
          </div>

        </div>



      </section>

      {/* <!-- Skills --> */}
      <section className="section3" id="skills">
        <div className="skills-container">
          <div>
            <i className="fa-brands fa-html5"></i>
            <div>HTML</div>
          </div>
          <div>
            <i className="fa-brands fa-html5"></i>
            <div>HTML</div>
          </div>
          <div>
            <i className="fa-brands fa-html5"></i>
            <div>HTML</div>
          </div>
        </div>
      </section>


      {/* <!-- Projects --> */}
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

      {/* <!-- About Me --> */}
      <section className="section5" id="about">
        <section className="about-me">
          <h2 className="title">About me</h2>
          <div className="about-container">
            <div className="left">
              <img src={userImg} alt="" width="60%" />
            </div>
            <div className="right">
              <h2>Sanjit Rijal</h2>
              <p className="detail">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus a quia aliquid architecto? Quisquam neque voluptatem vitae. Excepturi sapiente expedita rerum, laudantium eos, odio, aperiam quasi vero soluta eligendi praesentium!</p>

              <div className="interest-container">
                <div className="tag">
                  <h2>Interests</h2>
                </div>
                <div className="interests">
                  <span>Coding</span>
                  <span>Football</span>
                  <span>Movies</span>
                </div>
              </div>

            </div>
          </div>
        </section>
      </section>

      {/* <!-- Get in Touch --> */}
      <section className="section6" id="contact">
        <h2 className="title">Get in Touch</h2>
        <div className="socials">
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-github"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>
        <h2>OR</h2>
        <a href="mailto:admin@gmail.com">

          <div className="email-section">
            <div className="email">
              <p>admin@gmail.com</p>
              <div className="send">
                <i className="fa-solid fa-envelope"></i>
              </div>
            </div>
          </div>
        </a>

      </section>


      {/* <!-- footer --> */}
      <footer>
        <div className="footer-container">
          <div className="links">
            <h3>Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contacts">Contacts</a></li>
            </ul>
          </div>
          <div className="social-links">
            <h3>Social Links</h3>
            <ul>
              <li><a href="#home">Linkedin</a></li>
              <li><a href="#skills">Facebook</a></li>
              <li><a href="#projects">Github</a></li>
              <li><a href="#contacts">X</a></li>
            </ul>
          </div>
        </div>
        <div className="copy">&copy; Copy right all reserved. Made by me. ❤️</div>
      </footer>

      {/* <!-- Floating Icon --> */}
      <a href="#hero">
        <div className="floating">
          <i className="fa-solid fa-arrow-up"></i>
        </div>
      </a>
    </div>
  );
}

export default App;
