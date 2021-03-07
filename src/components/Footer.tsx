import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/img/logo.png";
import { HOME } from "../services/routes";

const Footer = () => {
  const history = useHistory();
  return (
    <div className="container">
      <Footer.Wrapper>
        <div className="img" onClick={() => history.push(HOME)}>
          <img src={logo} alt="tm-acad-logo" />
        </div>
        <div className="icon-links">
          <div>
            <a href="https://twitter.com/julee_baby">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          <div>
            <a href="https://www.behance.net/ogunladoluwasa">
              <i className="fab fa-behance"></i>
            </a>
          </div>
          <div>
            <a href="https://dribbble.com/Jullly">
              <i className="fab fa-dribbble"></i>
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/ogunladeoluwasayo/">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </Footer.Wrapper>
    </div>
  );
};

Footer.Wrapper = styled.section`
  margin-top: 200px;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
  .icon-links {
    display: flex;
    div {
      height: 36px;
      width: 36px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #ffffff;
      margin-right: 10px;
      a {
        text-decoration: none;
        color: #000000;
      }
    }
  }
  @media (max-width: 420px) {
    .img {
      img {
        height: 30px;
      }
    }
    .icon-links {
      div {
        height: 30px;
        width: 30px;
        border-radius: 50%;
      }
    }
  }
`;

export default Footer;
