import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Switch, Route, Link, useHistory } from "react-router-dom";
// import fbImg from "../assets/img/fb-img.png";
// import githubImg from "../assets/img/github.png";
// import lkImg from "../assets/img/lk-img.png";
// import twImg from "../assets/img/twitter.png";
import avatar from "../assets/img/avatar.jpg";
import avatar2 from "../assets/img/avatar2.jpg";
import macbook from "../assets/img/macbook.png";
import reactImg from "../assets/img/react-png.png";
import reduxImg from "../assets/img/redux.png";
import gitImg from "../assets/img/git.png";
import mongodbImg from "../assets/img/mongodb.png";
import nodeImg from "../assets/img/node.png";

interface largeProps {
  large: boolean;
}
const Home = () => {
  const [large, setLarge] = useState(false);
  const [close, setClose] = useState(false);
  const history = useHistory();
  const [name, setName] = useState("");
  const [phonenum, setPhone] = useState("");
  const [email, setEmail] = useState("");
  //   const [message, setMessage] = useState("");
  let none = "#";

  useEffect(() => {}, []);
  return (
    <Home.Wrapper large={large}>
      <div className="flex-ct template-container">
        <div className="notification-bar flex-sb">
          <div className="info-details">
            <ul>
              <li>
                <a href="/">
                  <span className="fab fa-apple"></span>
                </a>
              </li>
              <li>
                <a href="/">Joshua Olabiran</a>
              </li>
              <li>
                <a href={none}>File</a>
              </li>
              <li>
                <a href={none}>Edit</a>
              </li>
              <li>
                <a href={none}>View</a>
              </li>
              <li>
                <a href={none}>Go</a>
              </li>
            </ul>
          </div>
          <div className="info-details">
            <ul>
              <li>
                <span className="fa fa-user-circle"></span>
              </li>
              <li>
                <span className="fa fa-volume-mute"></span>
              </li>
              <li>
                <span className="fa fa-wifi"></span>
              </li>
              <li>{`${new Date().getHours()}:${new Date().getMinutes()}`}</li>
            </ul>
          </div>
        </div>
        <div
          className={`body-content ${!large && "container"} ${
            close && "d-none"
          }`}
        >
          <div className="col-xl-12 mx-auto shadow-lg">
            <div className="row nav-container ">
              <div className="col-3 col-3-none d-flex">
                <div
                  className="circle red"
                  onClick={() => setClose(true)}
                ></div>
                <div
                  className="circle yellow"
                  onClick={() => setLarge(!large)}
                ></div>
                <div
                  className="circle green"
                  onClick={() => setLarge(!large)}
                ></div>
              </div>
              <div className="col d-flex center-nav">
                <div
                  className={`${window.location.pathname === "/" && "active"}`}
                >
                  <Link to="/">Home</Link>
                </div>
                <div
                  className={`${
                    window.location.pathname === "/work" && "active"
                  }`}
                >
                  <Link to="/work">My Works</Link>
                </div>
                <div
                  className={`${
                    window.location.pathname === "/contact" && "active"
                  }`}
                >
                  <Link to="/contact">Contact</Link>
                </div>
                <div>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://drive.google.com/file/d/1jekuDHov_-S9q1jvslJMhnB9-JyD_Y34/view?usp=sharing"
                  >
                    Resume
                  </a>
                </div>
              </div>
              <div className="col-3 col-3-img">
                <a href="https://twitter.com/Olabiranjoshua">
                  <span className="fab fa-twitter mr-3"></span>
                </a>
                <a href="https://github.com/olabiranj">
                  <span className="fab fa-github mr-3"></span>
                </a>
                <a href="https://www.linkedin.com/in/joshua-olabiran-6625a3177/">
                  <span className="fab fa-linkedin-in mr-3"></span>
                </a>
                <img src={avatar} alt="avatar" />
              </div>
            </div>
            <div className="row bottom-content">
              <div className="col-lg-3 pt-3">
                <div className="side-link-container">
                  <p>Technologies</p>
                  <div className="p-1 px-2 rounded mb-1 active">
                    <p>React</p>
                  </div>
                  <div className="p-1 px-2 rounded mb-1 ">
                    <p>Redux</p>
                  </div>
                  <div className="p-1 px-2 rounded mb-1 ">
                    <p>Git</p>
                  </div>
                  <div className="p-1 px-2 rounded mb-1 ">
                    <p>NPM</p>
                  </div>
                  <div className="p-1 px-2 rounded mb-1 ">
                    <p>Node.js</p>
                  </div>
                  <div className="p-1 px-2 rounded mb-1 ">
                    <p>Express</p>
                  </div>
                  <div className="p-1 px-2 rounded mb-1 ">
                    <p>ESlint</p>
                  </div>
                  <div className="p-1 px-2 rounded mb-1 ">
                    <p>Prettier</p>
                  </div>
                </div>
                <div className="side-link-container">
                  <p>Hobbies</p>
                  <div className="p-1 px-2 rounded mb-1 active shadow">
                    <p>Driving</p>
                  </div>
                  <div className="p-1 px-2 rounded mb-1 ">
                    <p>Travelling</p>
                  </div>
                  <div className="p-1 px-2 rounded mb-1 ">
                    <p>Tennis</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                <Switch>
                  <Route path="/" exact>
                    <div className="col-md-10 mx-auto">
                      <div className="flex-ct mx-3">
                        <div className="row">
                          <div className="col-md-5 pt-5" data-aos="fade-down">
                            <img
                              src={avatar2}
                              alt="big-avatar"
                              className="big-avatar rounded-circle shadow-lg"
                            />
                          </div>
                          <div
                            className="col-md-7 pt-5 about"
                            data-aos="fade-up"
                          >
                            <h1>What’s Up 😁?</h1>
                            <p className="mt-3">
                              I am an experienced Software Developer with a
                              demonstrated history of working in the information
                              technology and services industry. I am skilled in
                              React, Redux, Embedded JavaScript (EJS),
                              express.js and MongoDB. I convert UI designs made
                              from Figma, Adobe XD, Zeplin, etc into real world
                              applications. I am a strong engineering
                              professional with a Bachelor of Science(Education)
                              - focused in Computer Science from Lagos State
                              University.
                            </p>
                            <a
                              className="btn shadow"
                              href="https://wa.me/2348093481350"
                            >
                              Hire Me
                            </a>
                          </div>
                        </div>
                      </div>
                      <br />
                      <br />
                      <h4 className="mt-4 ml-3 mb-4">Projects</h4>
                      <h3 className="col-md-8 mx-auto project-text">
                        <b>
                          "There is no such thing as a boring project. There are
                          only boring executions "
                        </b>
                        <br />
                        ―Irene Etzkorn
                      </h3>
                      <div className="projects mx-4 mb-3">
                        <div className="row single-project ">
                          <div className="col-md-5 col-lg-5  p-3 py-4">
                            <div className="flex-ct">
                              <img src={macbook} alt="edu" />
                            </div>
                          </div>
                          <div className="col-md-7 p-3">
                            <div className="">
                              <h1>R'ch Me</h1>
                              <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Architecto inventore porro
                                blanditiis in! Voluptatibus minus, est maxime
                                vel eos modi nemo illum ad deleniti beatae
                                nostrum quas. Consequatur, amet voluptate.
                              </p>
                              <button
                                onClick={() =>
                                  window.open("https://www.rchme.co/", "_blank")
                                }
                                className="btn shadow"
                              >
                                Launch
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="projects mx-4 mb-3">
                        <div className="row single-project">
                          <div className="col-md-5 p-3 py-4">
                            <div className="flex-ct">
                              <img src={macbook} alt="edu" />
                            </div>
                          </div>
                          <div className="col-md-7 p-3">
                            <div className="">
                              <h1>TM Academy</h1>
                              <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Architecto inventore porro
                                blanditiis in! Voluptatibus minus, est maxime
                                vel eos modi nemo illum ad deleniti beatae
                                nostrum quas. Consequatur, amet voluptate.
                              </p>
                              <button
                                onClick={() =>
                                  window.open(
                                    "https://tmacademy.tm30.net/",
                                    "_blank"
                                  )
                                }
                                className="btn shadow"
                              >
                                Launch
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="projects mx-4">
                        <div className="row single-project">
                          <div className="col-md-5 p-3 py-4">
                            <div className="flex-ct">
                              <img src={macbook} alt="edu" />
                            </div>
                          </div>
                          <div className="col-md-7 p-3">
                            <div className="">
                              <h1>EduSponsor</h1>
                              <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Architecto inventore porro
                                blanditiis in! Voluptatibus minus, est maxime
                                vel eos modi nemo illum ad deleniti beatae
                                nostrum quas. Consequatur, amet voluptate.
                              </p>
                              <button
                                onClick={() =>
                                  window.open(
                                    "https://myedusponsor.com/",
                                    "_blank"
                                  )
                                }
                                className="btn shadow"
                              >
                                Launch
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-5 mx-auto">
                        <button
                          onClick={() => history.push("/work")}
                          className="btn shadow btn-block"
                        >
                          View All Projects
                        </button>
                      </div>
                      <br />
                      <br />
                      <h4 className="mt-4 ml-3">Tools and Technologies</h4>
                      <div className="flex-ct my-4 py-4 tools">
                        <img
                          className="m-4"
                          src={reactImg}
                          alt="react"
                          height={100}
                        />
                        <img
                          className="m-4"
                          src={reduxImg}
                          alt="redux"
                          height={100}
                        />
                        <img
                          className="m-4"
                          src={nodeImg}
                          alt="react"
                          height={100}
                        />
                        <img
                          className="m-4"
                          src={gitImg}
                          alt="react"
                          height={100}
                        />
                        <img
                          className="m-4"
                          src={mongodbImg}
                          alt="redux"
                          height={100}
                        />
                      </div>
                    </div>
                  </Route>
                  <Route path="/work" exact>
                    <div className="col-md-10 mx-auto">
                      <h4 className="mt-4 ml-3">Projects</h4>
                      <div className="projects mx-4 mb-3">
                        <div className="row single-project ">
                          <div className="col-md-12 col-lg-5 p-3 py-4">
                            <div className="flex-ct">
                              <img src={macbook} alt="edu" />
                            </div>
                          </div>
                          <div className="col-md-7 p-3">
                            <div className="">
                              <h1>R'ch Me</h1>
                              <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Architecto inventore porro
                                blanditiis in! Voluptatibus minus, est maxime
                                vel eos modi nemo illum ad deleniti beatae
                                nostrum quas. Consequatur, amet voluptate.
                              </p>
                              <button
                                onClick={() =>
                                  window.open("https://www.rchme.co/", "_blank")
                                }
                                className="btn shadow"
                              >
                                Launch
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="projects mx-4 mb-3">
                        <div className="row single-project">
                          <div className="col-md-5 p-3 py-4">
                            <div className="flex-ct">
                              <img src={macbook} alt="edu" />
                            </div>
                          </div>
                          <div className="col-md-7 p-3">
                            <div className="">
                              <h1>TM Academy</h1>
                              <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Architecto inventore porro
                                blanditiis in! Voluptatibus minus, est maxime
                                vel eos modi nemo illum ad deleniti beatae
                                nostrum quas. Consequatur, amet voluptate.
                              </p>
                              <button
                                onClick={() =>
                                  window.open(
                                    "https://tmacademy.tm30.net/",
                                    "_blank"
                                  )
                                }
                                className="btn shadow"
                              >
                                Launch
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="projects mx-4 mb-3">
                        <div className="row single-project">
                          <div className="col-md-5 p-3 py-4">
                            <div className="flex-ct">
                              <img src={macbook} alt="edu" />
                            </div>
                          </div>
                          <div className="col-md-7 p-3">
                            <div className="">
                              <h1>Awa Cloud</h1>
                              <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Architecto inventore porro
                                blanditiis in! Voluptatibus minus, est maxime
                                vel eos modi nemo illum ad deleniti beatae
                                nostrum quas. Consequatur, amet voluptate.
                              </p>
                              <button
                                onClick={() =>
                                  window.open(
                                    "https://awa-cloud.netlify.app/",
                                    "_blank"
                                  )
                                }
                                className="btn shadow"
                              >
                                Launch
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="projects  mx-4">
                        <div className="row single-project">
                          <div className="col-md-5 p-3 py-4">
                            <div className="flex-ct">
                              <img src={macbook} alt="edu" />
                            </div>
                          </div>
                          <div className="col-md-7 p-3">
                            <div className="">
                              <h1>EduSponsor</h1>
                              <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Architecto inventore porro
                                blanditiis in! Voluptatibus minus, est maxime
                                vel eos modi nemo illum ad deleniti beatae
                                nostrum quas. Consequatur, amet voluptate.
                              </p>
                              <button
                                onClick={() =>
                                  window.open(
                                    "https://myedusponsor.com/",
                                    "_blank"
                                  )
                                }
                                className="btn shadow"
                              >
                                Launch
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <br />
                    </div>
                  </Route>
                  <Route path="/contact" exact>
                    <section className="contact col-sm-10 mx-auto">
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <h2>Get a Quote</h2>
                          <p>
                            I am always open to full-time & freelance
                            opportunities. Please send me a message if you have
                            any inquiries and I will respond to you ask soon as
                            possible.
                          </p>
                          <div>
                            <a href="mailto:olabiranj@gmail.com">
                              <span className="fa fa-envelope"></span>
                              olabiranj@gmail.com
                            </a>
                          </div>
                          <br />
                          <div>
                            <a href="tel:+234 803 979 3005">
                              <span className="fa fa-phone"></span>
                              +234 809 348 1350
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <form
                            action="mailto:olabiranj@gmail.com"
                            method="POST"
                            encType="multipart/form-data"
                            name="Email Form"
                          >
                            <input
                              className="text-input"
                              placeholder="Your Full Name"
                              type="text"
                              required
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                            <input
                              className="text-input"
                              placeholder="Your Phone Number"
                              required
                              type="tel"
                              value={phonenum}
                              onChange={(e) => setPhone(e.target.value)}
                            />
                            <input
                              className="text-input"
                              required
                              placeholder="Your Email"
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <textarea
                              required
                              name=""
                              placeholder="Your Message"
                            ></textarea>
                            <button className="btn shadow" type="submit">
                              Submit
                            </button>
                            {/* <Link>Send a Message</Link> */}
                          </form>
                        </div>
                      </div>
                    </section>
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="footer flex-ct">
          <div className="footer-content flex-sb px-3 py-2">
            <img src={fbImg} alt="facebook" className="m-auto" />
            <img src={githubImg} alt="github" className="m-auto" />
            <img src={lkImg} alt="linkedIn" className="m-auto" />
            <img src={twImg} alt="twitter" className="m-auto" />
          </div>
        </div> */}
      </div>
    </Home.Wrapper>
  );
};

Home.Wrapper = styled.div<largeProps>`
  .template-container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    .notification-bar {
      position: fixed;
      top: 0;
      width: 100%;
      background: rgba(0, 0, 0, 0.15);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      .info-details {
        ul {
          list-style-type: none;
          padding-inline-start: 0;
          padding 2px 0;
          margin: 0;
          li {
            margin-right: 10px;
            margin-left: 10px;
            display: inline;
            font-size: 0.8rem;
            a {
              text-decoration: none;
            }
          }
        }
      }
    }
    .body-content {
      .col-xl-12{
        ${(props) =>
          props.large &&
          `position: fixed;
        top: 28px;
        left: 0;`}
        box-shadow: 0 1rem 3rem rgba(0,0,0,.55)!important;
        border-radius: 10px;
        background: rgba(0, 0, 0, 0.35);
        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);
        >.nav-container{
          border-bottom: rgba(225, 225, 225, 0.25) solid 0.7px;
          .col-3{
            div{
              margin-top: 15px;
              height: 12px;
              width: 12px;
              border-radius: 50%;
              margin-right: 5px;
              cursor: pointer;
            }
            .yellow{
              background: yellow;
            }
            .red{
              background: red;
            }
            .green{
              background: green;
            }
          }
          .col-3-img{
            display: flex;
            justify-content: center;
            align-items: center;
            img{
              width: 30px;
              height: 30px;
              margin-right: 5px;
              border-radius: 50%;
            }
          }
          .col{
            padding-left: 0 !important;
            div{
              width: 100px;
              padding-top: 15px;
              padding-bottom: 15px;
              a {
                text-decoration: none;
                display: block;
                font-size: 0.8rem;
                text-align: center!important;
                color: rgb(255, 255, 255, 0.25);
              }
            }
            .active{
              border-bottom: rgba(225, 225, 225, 0.85) solid 2px;
              a{
                color: rgb(255, 255, 255, 0.75);
              }
            }
          }
        }
        .bottom-content{
          h1{
            font-family: 'Space Grotesk', sans-serif;
                font-weight: bold;
          }
          p{
            color:  rgba(225, 225, 225, 0.6);
          }
          .col-lg-3{
            ${(props) => (props.large ? `height: 95vh;` : "height: 70vh;")}
            overflow-y: auto;
            ::-webkit-scrollbar-track {
              -webkit-box-shadow: inset 0 0 6px rgba(225, 225, 225, 0.3);
              background-color: inherit;
            }

            ::-webkit-scrollbar {
              width: 6px;
              background-color: inherit;
            }

            ::-webkit-scrollbar-thumb {
              background-color:  rgba(225, 225, 225, 0.3);
              border-radius: 10px;
            }
            .side-link-container{
              p{
                color: rgb(255, 255, 255, 0.25);
                font-size: 0.8rem;
                margin-bottom: 4px;
              }
              >div{
                p{
                  color: #ffffff;
                }
                :hover{
                  background: rgba(0, 0, 0, 0.35);
                }
              }
              .active{
                background: rgba(0, 0, 0, 0.35);
              }
            }
          }
          .col-lg-9{
            border-bottom-right-radius: 10px;
            &.flex-ct{
              height: 54vh;
            }
            background: rgba(0, 0, 0, 0.35);
            height: 60vh;
             ${(props) => (props.large ? `height: 95vh;` : "height: 70vh;")}
            overflow-y: auto;
            ::-webkit-scrollbar-track {
              -webkit-box-shadow: inset 0 0 6px rgba(225, 225, 225, 0.3);
              background-color: inherit;
            }

            ::-webkit-scrollbar {
              width: 6px;
              background-color: inherit;
            }

            ::-webkit-scrollbar-thumb {
              background-color:  rgba(225, 225, 225, 0.3);
              border-radius: 10px;
            }
          }
          .big-avatar{
            width: 100%;
          }
          .about{
            h1{
            }
            p{
              color:  rgba(225, 225, 225, 0.6);
              font-size: 18px;
              font-family: 'Mulish', sans-serif;
            }
          }
          .project-text{
            font-family: 'Space Grotesk', sans-serif;
            font-size: 36px;
          }
          .projects{  
            margin-top: 70px;
            margin-bottom: 70px;
            img{
              margin-top: 30px;
              width: 70%;
            }
            .single-project{
              background-color:  rgba(225, 225, 225, 0.05);
              border-radius: 10px;
              p{
                font-family: 'Mulish', sans-serif;
                font-size: 16px;
              }
            }
          }
          .tool{

          }
        }
      }
    }
    .footer{
      height: 70px;
      .footer-content{
        background: rgba(225, 225, 225, 0.25);
        backdrop-filter: blur(4px);
        border-radius: 15px;
        -webkit-backdrop-filter: blur(4px);
        padding-left: -15px !important;
        img{
          border-radius: 10px;
          height: 50px;
          width: 50px;
          transition: all .2s;
          margin-right:5px !important;
          margin-left:5px !important;
          :hover{
            transform: scale(1.3);
          }
        }
      }
    }
  }
  .contact {
    margin-top: 100px;
    .row {
      .col-md-6 {
        h2 {
          font-family: Space Grotesk;
          font-style: normal;
          font-weight: bold;
          font-size: 50px;
          line-height: 64px;
          /* identical to box height */

          color: #ffffff;
          margin-bottom: 50px;
        }
        p {
          font-style: normal;
          font-weight: normal;
          font-size: 15px;
          font-family: 'Mulish', sans-serif;
          line-height: 30px;
          /* or 200% */

          color: rgba(255, 255, 255, 0.71);
        }
        div {
          margin-top: 30px;
          a {
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            font-family: 'Mulish', sans-serif;
            line-height: 24px;
            /* identical to box height */

            color: rgba(255, 255, 255, 0.71);

            span {
              margin-right: 15px;
            }
          }
        }
        form {
          margin-top: 20px;
          .text-input {
            margin-bottom: 20px;
            background: rgba(9, 9, 9, 0.27);
            border: 1px solid rgba(63, 63, 63, 0.78);
            box-sizing: border-box;
            border-radius: 15px;
            padding: 14px;
            padding-left: 27px;
            width: 100%;
            font-style: normal;
            font-weight: 300;
            font-size: 13px;
            line-height: 30px;
            /* identical to box height, or 231% */
            outline: none;
            color: rgba(255, 255, 255, 0.6);
            :focus{
            background: rgba(9, 9, 9, 0.27);
            }
          }
          textarea {
            width: 100%;
            height: 150px;
            margin-bottom: 20px;
            background: rgba(9, 9, 9, 0.27);
            border: 1px solid rgba(63, 63, 63, 0.78);
            box-sizing: border-box;
            border-radius: 15px;
            padding: 14px;
            padding-left: 27px;
            width: 100%;
            font-style: normal;
            font-weight: 300;
            font-size: 13px;
            line-height: 30px;
            /* identical to box height, or 231% */
            outline: none;
            color: rgba(255, 255, 255, 0.6);
            margin-bottom: 30px;
          }
        }
      }
    }
  }
  @media (max-width: 988px) {
    .template-container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    .notification-bar {
      position: fixed;
      top: 0;
      width: 100%;
      background: rgba(0, 0, 0, 0.15);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      .info-details {
        ul {
          list-style-type: none;
          padding-inline-start: 0;
          padding 2px 0;
          margin: 0;
          li {
            margin-right: 10px;
            margin-left: 10px;
            display: inline;
            font-size: 0.8rem;
            a {
              text-decoration: none;
            }
          }
        }
      }
    }
    .body-content {
      .col-xl-12{
        position: fixed;
        top: 28px;
        left: 0;
        box-shadow: 0 1rem 3rem rgba(0,0,0,.55)!important;
        border-radius: 0px;
        background: rgba(0, 0, 0, 0.35);
        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);
        >.nav-container{
          border-bottom: rgba(225, 225, 225, 0.25) solid 0.7px;
          justify-content: space-between;
          .col-3-none{
            display: none !important;
          }
          .col-3{
            div{
              margin-top: 15px;
              height: 12px;
              width: 12px;
              border-radius: 50%;
              margin-right: 5px;
              cursor: pointer;
            }
            .yellow{
              background: yellow;
            }
            .red{
              background: red;
            }
            .green{
              background: green;
            }
          }
          .col-3-img{
            display: flex;
            justify-content: center;
            align-items: center;
            img{
              width: 30px;
              height: 30px;
              margin-right: 5px;
              border-radius: 50%;
            }
          }
          .col{
            padding-left: 0 !important;
            div{
              width: 100px;
              padding-top: 15px;
              padding-bottom: 15px;
              a {
                text-decoration: none;
                display: block;
                font-size: 0.8rem;
                text-align: center!important;
                color: rgb(255, 255, 255, 0.25);
              }
            }
            .active{
              border-bottom: rgba(225, 225, 225, 0.85) solid 2px;
              a{
                color: rgb(255, 255, 255, 0.75);
              }
            }
          }
        }
        .bottom-content{
          h1{
            font-family: 'Space Grotesk', sans-serif;
                font-weight: bold;
          }
          p{
            color:  rgba(225, 225, 225, 0.6);
          }
          .col-lg-3{
            display: none;
            height: 95vh;
            overflow-y: auto;
            ::-webkit-scrollbar-track {
              -webkit-box-shadow: inset 0 0 6px rgba(225, 225, 225, 0.3);
              background-color: inherit;
            }

            ::-webkit-scrollbar {
              width: 6px;
              background-color: inherit;
            }

            ::-webkit-scrollbar-thumb {
              background-color:  rgba(225, 225, 225, 0.3);
              border-radius: 10px;
            }
            .side-link-container{
              p{
                color: rgb(255, 255, 255, 0.25);
                font-size: 0.8rem;
                margin-bottom: 4px;
              }
              >div{
                p{
                  color: #ffffff;
                }
                :hover{
                  background: rgba(0, 0, 0, 0.35);
                }
              }
              .active{
                background: rgba(0, 0, 0, 0.35);
              }
            }
          }
          .col-lg-9{
            border-bottom-right-radius: 10px;
            &.flex-ct{
              height: 54vh;
            }
            background: rgba(0, 0, 0, 0.35);
            height: 60vh;
            height: 95vh;
            overflow-y: auto;
            ::-webkit-scrollbar-track {
              -webkit-box-shadow: inset 0 0 6px rgba(225, 225, 225, 0.3);
              background-color: inherit;
            }

            ::-webkit-scrollbar {
              width: 6px;
              background-color: inherit;
            }

            ::-webkit-scrollbar-thumb {
              background-color:  rgba(225, 225, 225, 0.3);
              border-radius: 10px;
            }
          }
          .big-avatar{
            width: 100%;
          }
          .about{
            h1{
              font-family: 'Space Grotesk', sans-serif;
                  font-weight: bold;
            }
            p{
              color:  rgba(225, 225, 225, 0.6);
              font-size: 18px;
              font-family: 'Mulish', sans-serif;
            }
          }
          .projects{  
            margin-top: 70px;
            margin-bottom: 70px;
            img{
              margin-top: 30px;
              width: 70%;
            }
            .single-project{
              background-color:  rgba(225, 225, 225, 0.05);
              border-radius: 10px;
              p{
                font-family: 'Mulish', sans-serif;
                font-size: 16px;
              }
            }
          }
          .tool{

          }
        }
      }
    }
    .footer{
      height: 70px;
      .footer-content{
        background: rgba(225, 225, 225, 0.25);
        backdrop-filter: blur(4px);
        border-radius: 15px;
        -webkit-backdrop-filter: blur(4px);
        padding-left: -15px !important;
        img{
          border-radius: 10px;
          height: 50px;
          width: 50px;
          transition: all .2s;
          margin-right:5px !important;
          margin-left:5px !important;
          :hover{
            transform: scale(1.3);
          }
        }
      }
    }
  }
  }
  @media (max-width: 420px) {

  }
`;

export default Home;
