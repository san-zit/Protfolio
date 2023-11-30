
import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Banner extends Component {
  static propTypes = {}

  render() {
    return (<section className="section2">
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
      
    )
  }
}

export default Banner

