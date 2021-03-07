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
        <section className="whats-up col-sm-10 mx-auto">
          <div>
            <img src={shayoImg} alt="" />
          </div>
          <h2>What’s Up?</h2>
          <p>
            I currently work as a Product designer at Omnibiz inc. , a tech
            company that helps you closer to your customers located in Lagos,
            Nigeria.
          </p>
          <p>
            I love to create fun, innovative, and accessible websites and
            applications. I enjoy learning new things and constantly seek out
            new learning opportunities.
          </p>
          <p>
            My experience as a user experience designer for the past 2 years
            includes crafting of beautiful websites and mobile applications for
            clients.
          </p>
          <p>
            In addition to good visual abilities, I also possess great
            presentation skills which allow me to successfully present design
            ideas to stakeholders. My strong conceptualization ability allows me
            to picture and then bring to life beautiful work. Finally, I have
            extensive knowledge of wireframe and user flow creation. I know you
            will agree you have found your next UI/UX Designer upon meeting.
          </p>

          <div className="objectives">
            <h3>Objectives</h3>
            <p>My life objectives include but not limited to;</p>
            <ul>
              <li>
                To continuously develop my interpersonal, communications and
                management skills. To be top-notch in all my dealings.
              </li>
              <li>
                To challenge me to do more problem-solving that will contribute
                to a greater impact in the organization.
              </li>
              <li>
                To become a world-known product designer, disruption the design
                space home and abroad.
              </li>
            </ul>
          </div>
          <div className="objectives">
            <h3>Interests</h3>
            <p>
              Yes, I am a full-time product designer. But when I'm not designer,
              I engage in one the following activity
            </p>
            <ul>
              <li>Reading</li>
              <li>Eating</li>
              <li>Dancing (I’m bad at it, lol)</li>
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
