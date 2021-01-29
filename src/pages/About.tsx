import React from "react";
import styled from "styled-components";
import Navbar from "../components/Nabvar";
import Footer from "../components/Footer";
import shayoImg from "../assets/img/shayo.png";

const About = () => {
  return (
    <div className="container">
      <About.Wrapper>
        <Navbar />
        <section className="whats-up">
          <div>
            <img src={shayoImg} alt="" />
          </div>
          <h2>What’s Up?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
            officiis totam autem laboriosam necessitatibus error asperiores eum
            ullam, officia libero ea aut nesciunt consectetur vitae repudiandae
            alias fugit nulla amet!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
            officiis totam autem laboriosam necessitatibus error asperiores eum
            ullam, officia libero ea aut nesciunt consectetur vitae repudiandae
            alias fugit nulla amet!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
            officiis totam autem laboriosam necessitatibus error asperiores eum
            ullam, officia libero ea aut nesciunt consectetur vitae repudiandae
            alias fugit nulla amet!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
            officiis totam autem laboriosam necessitatibus error asperiores eum
            ullam!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
            officiis totam autem laboriosam necessitatibus error asperiores eum
            ullam, officia libero ea aut nesciunt consectetur vitae repudiandae
            alias fugit nulla amet!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
            officiis totam autem laboriosam necessitatibus error asperiores eum
            ullam, officia libero ea aut nesciunt consectetur vitae repudiandae
            alias fugit nulla amet!
          </p>
          <div className="objectives">
            <h3>Objectives</h3>
            <p>
              I specialize in designing and developing user interfaces and
              digital products. I don’t restrict myself to design.
            </p>
            <ul>
              <li>
                I specialize in designing and developing user interfaces and
                digital products. I don’t restrict myself to design.
              </li>
              <li>
                I specialize in designing and developing user interfaces and
                digital products. I don’t restrict myself to design.
              </li>
              <li>
                I specialize in designing and developing user interfaces and
                digital products. I don’t restrict myself to design.
              </li>
            </ul>
          </div>
          <div className="objectives">
            <h3>Interests</h3>
            <p>
              I specialize in designing and developing user interfaces and
              digital products. I don’t restrict myself to design.
            </p>
            <ul>
              <li>Cooking</li>
              <li>Eating</li>
              <li>Designing</li>
              <li>Traveling</li>
            </ul>
          </div>
        </section>
        <Footer />
      </About.Wrapper>
    </div>
  );
};

About.Wrapper = styled.div`
  .whats-up {
    margin-top: 90px;
    div {
      img {
        margin-right: 95px;
        margin-bottom: 25px;
        border-radius: 25px;
        float: left;
      }
    }
    h2 {
      font-family: Space Grotesk;
      font-style: normal;
      font-weight: bold;
      font-size: 50px;
      line-height: 64px;
      /* identical to box height */

      color: #ffffff;
    }
    p {
      text-align: justify;
      font-family: Axiforma;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 40px;
      /* or 250% */

      color: #9a9999;
    }
    .objectives {
        margin-top: 80px;
      h3 {
        font-family: Space Grotesk;
        font-style: normal;
        font-weight: bold;
        font-size: 35px;
        line-height: 65px;
        /* identical to box height, or 186% */

        color: #ffffff;
      }
      ul {
          list-style-type: none;
        li {
          font-family: Axiforma;
          font-
          style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 40px;
          /* or 250% */

          color: #bcbcbc;
          margin-bottom: 20px;
          ::before {content: "•"; color: #FF6B6B; margin-right: 20px;}
        }
      }
    }
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 420px) {
    .whats-up {
      margin-top: 90px;
      div {
        img {
          width: 100%;
        }
      }
    }
  }
`;

export default About;
