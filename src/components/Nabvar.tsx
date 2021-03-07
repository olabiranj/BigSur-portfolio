import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/img/logo.png";
import logo2 from "../assets/img/logo2.png";
import menu from "../assets/img/menu.png";
import triImg from "../assets/img/triangle2.png";
import zagImg from "../assets/img/Vector5.png";
import collapse from "../assets/img/collapse.png";
import { useHistory } from "react-router-dom";
import { ABOUT, CONTACT, HOME, WORKS } from "../services/routes";
const Navbar = () => {
  let [toggle, setToggle] = useState(false);
  const history = useHistory();
  return (
    <Navbar.Wrapper>
      {toggle && (
        <div className="menu">
          <div className="nav container">
            <div className="img" onClick={() => history.push(HOME)}>
              <img src={logo2} alt="tm-acad-logo" />
            </div>
            <div className="img" onClick={() => setToggle(!toggle)}>
              <img src={collapse} alt="tm-acad-logo" />
            </div>
          </div>
          <div className="nav-content">
            <div className="nav-content-inner">
              <div
                data-aos="fade-left"
                data-aos-delay="0"
                className={`nav-item ${
                  window.location.pathname === HOME && "active"
                }`}
              >
                <a href={HOME}>Home</a>
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="200"
                className={`nav-item ${
                  window.location.pathname === ABOUT && "active"
                }`}
              >
                <a href={ABOUT}>About Me</a>
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="300"
                className={`nav-item ${
                  window.location.pathname === WORKS && "active"
                }`}
              >
                <a href={WORKS}>My Works</a>
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="400"
                className="nav-item"
              >
                <a href="https://drive.google.com/file/d/19-VKEu926ImPwu2VmLWq-BudZZjfYbBG/view">
                  My Resume
                </a>
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="500"
                className={`nav-item ${
                  window.location.pathname === CONTACT && "active"
                }`}
              >
                <a href={CONTACT}>Contact Me</a>
              </div>
            </div>
          </div>
          <img className="triImg" src={triImg} alt="triangle" />
          <img className="zagImg" src={zagImg} alt="zigzag" />
        </div>
      )}
      <div className="img">
        <img src={logo} alt="logo" onClick={() => history.push(HOME)} />
      </div>
      <div className="img" onClick={() => setToggle(!toggle)}>
        <img src={menu} alt="menu" />
      </div>
    </Navbar.Wrapper>
  );
};

Navbar.Wrapper = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  .img {
    img {
      cursor: pointer;
    }
    :hover {
      opacity: 0.7;
    }
  }
  .menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 102vh;
    background: red;
    z-index: 10;
    background: #e5e5e5;
    padding-left: 10px;
    padding-right: 5px;
    .nav {
      padding-top: 20px;
      display: flex;
      justify-content: space-between;
      .img {
        img {
          cursor: pointer;
        }
      }
    }
    .nav-content {
      height: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      .nav-content-inner {
        height: 80%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-direction: column;
        .nav-item {
          a {
            font-family: Space Grotesk;
            font-style: normal;
            font-weight: 500;
            font-size: 40px;
            line-height: 65px;
            /* identical to box height, or 162% */

            color: #ababab;
            text-decoration: none;
            :hover {
              color: #090546;
            }
          }
        }
        .nav-item.active {
          a {
            color: #090909;
          }
        }
      }
    }
    .zagImg {
      position: absolute;
      left: 60px;
      top: 300px;
      z-index: -1;
    }
    .triImg {
      position: absolute;
      right: 60px;
      top: 150px;
      z-index: -1;
    }
  }
  @media (max-width: 420px) {
    .zagImg {
      display: none;
    }
    .triImg {
      display: none;
    }
  }
`;

export default Navbar;
