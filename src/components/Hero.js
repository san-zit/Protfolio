
import React, { Component } from 'react'
import projectImg from "../assets/img/project.png"
import userImg from "../assets/img/user.png"
import Layout from './Layout'

export class Hero extends Component {


    render() {

        return (
            <Layout>
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
            </Layout>


        )
    }
}

export default Hero

