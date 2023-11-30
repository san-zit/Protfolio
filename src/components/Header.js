import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
     

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

    )
  }
}

export default Header
