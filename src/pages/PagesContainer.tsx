import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/img/avatar.jpg";
import { StyledWrapper } from "../services/StyledWrapper";
import Home from "./Home";
import Works from "./Works";
import Contact from "./Contact";
import Tweets from "./Tweets";

const PagesContainer = () => {
  const [large, setLarge] = useState(false);
  const [close, setClose] = useState(false);
  let none = "#";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <StyledWrapper large={large}>
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
                <a href={none} className="disabled">
                  File
                </a>
              </li>
              <li>
                <a href={none} className="disabled">
                  Edit
                </a>
              </li>
              <li>
                <a href={none} className="disabled">
                  View
                </a>
              </li>
              <li>
                <a href="/">Refresh</a>
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
                  onClick={() => setClose(true)}
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
                <div
                  className={`${
                    window.location.pathname === "/tweets" && "active"
                  }`}
                >
                  <Link to="/tweets">Tweet</Link>
                </div>
                <div>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="/Joshua_CV.pdf"
                    // href="https://drive.google.com/file/d/1TTdGfAcGflHWBnBLKgnHTMK3SnDfGP8d/view?usp=sharing"
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
                <a href="https://gitlab.com/olabiranj">
                  <span className="fab fa-gitlab mr-3"></span>
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
                  <div className="p-1 px-2 rounded mb-1 ">
                    <p>Javascript</p>
                  </div>
                  <div className="p-1 px-2 rounded mb-1 active">
                    <p>React</p>
                  </div>
                  <div className="p-1 px-2 rounded mb-1 ">
                    <p>Redux</p>
                  </div>
                  <div className="p-1 px-2 rounded mb-1 ">
                    <p>SCSS</p>
                  </div>
                  <div className="p-1 px-2 rounded mb-1 ">
                    <p>Typescript</p>
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
                    <p>ESlint</p>
                  </div>
                  <div className="p-1 px-2 rounded mb-1 ">
                    <p>Prettier</p>
                  </div>
                </div>
                <div className="side-link-container">
                  <p>Interests</p>
                  <div className="p-1 px-2 rounded mb-1 ">
                    <p>Travelling</p>
                  </div>
                  <div className="p-1 px-2 rounded mb-1 ">
                    <p>Tennis</p>
                  </div>
                  <div className="p-1 px-2 rounded mb-1 active shadow">
                    <p>Driving</p>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-9"> */}
              {window.location.pathname === "/" && (
                <div className="col-lg-9">
                  <Home />
                </div>
              )}
              {window.location.pathname === "/work" && (
                <div className="col-lg-9">
                  <Works />
                </div>
              )}
              {window.location.pathname === "/contact" && (
                <div className="col-lg-9">
                  <Contact />
                </div>
              )}
              {window.location.pathname === "/tweets" && (
                <div className="col-lg-9">
                  <Tweets />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default PagesContainer;
