import React from "react";
import styled from "styled-components";
import Navbar from "../components/Nabvar";
import Footer from "../components/Footer";
import Link from "../components/inputs/Links";
import DisplayCard from "../components/DisplayCard";
import eduBg from "../assets/img/anna1.jpg";
import pmbBg from "../assets/img/anna2.jpg";
import unknownBg from "../assets/img/anna3.jpg";
import estateBg from "../assets/img/anna4.jpg";
import platoBg from "../assets/img/anna5.jpg";

const Works = () => {
  return (
    <div className="container">
      <Works.Wrapper>
        <Navbar />
        <section className="works col-sm-10 mx-auto">
          <h2>My Works</h2>
          <div className="links mt-4">
            <Link>All Project</Link>
            <Link bg="#000000" color="#ffffff" border={true}>
              Mobile App
            </Link>
            <Link bg="#000000" color="#ffffff" border={true}>
              Website
            </Link>
            <Link bg="#000000" color="#ffffff" border={true}>
              Illustrations
            </Link>
          </div>
          <DisplayCard
            title="EduSponsor"
            desc={`Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.`}
            topBtn={[
              { text: "Mobile", textColor: "#3347FF", bgColor: "#CED3FF" },
            ]}
            button={{
              text: "Case Study",
              textColor: "#ffffff",
              bgColor: "#F04770",
              link: "/work-details",
            }}
            imgRight={eduBg}
          />
          <DisplayCard
            title="PayMyBills"
            desc={`Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.`}
            topBtn={[{ text: "Web", textColor: "#FF6B6B", bgColor: "#FFF1FB" }]}
            button={{
              text: "Case Study",
              textColor: "#ffffff",
              bgColor: "#03B66B",
              link: "/work-details",
            }}
            imgRight={pmbBg}
          />
          <DisplayCard
            title="Digicit"
            desc={`Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.`}
            topBtn={[
              { text: "Web", textColor: "#FF6B6B", bgColor: "#FFF1FB" },
              { text: "Mobile", textColor: "#3347FF", bgColor: "#CED3FF" },
            ]}
            button={{
              text: "Case Study",
              textColor: "#ffffff",
              bgColor: "#F04770",
              link: "/work-details",
            }}
            imgRight={unknownBg}
          />
          <DisplayCard
            title="Estate Management System"
            desc={`Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.`}
            topBtn={[
              { text: "Web", textColor: "#FF6B6B", bgColor: "#FFF1FB" },
              { text: "Mobile", textColor: "#3347FF", bgColor: "#CED3FF" },
            ]}
            button={{
              text: "Case Study",
              textColor: "#ffffff",
              bgColor: "#03B66B",
              link: "/work-details",
            }}
            imgRight={estateBg}
          />
          <DisplayCard
            title="Plato"
            desc={`Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.`}
            topBtn={[{ text: "Web", textColor: "#FF6B6B", bgColor: "#FFF1FB" }]}
            button={{
              text: "Case Study",
              textColor: "#ffffff",
              bgColor: "#03B66B",
              link: "/work-details",
            }}
            imgRight={platoBg}
          />
          <div className="have-project">
            <h2>You have a Project? Let’s discuss it</h2>
            <div className="contact-link">
              <div>
                <Link bg="#000000" color="#ffffff" border={true}>
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </Works.Wrapper>
    </div>
  );
};

Works.Wrapper = styled.div`
  .works {
    h2 {
      font-family: Space Grotesk;
      font-style: normal;
      font-weight: bold;
      font-size: 50px;
      line-height: 65px;
      /* identical to box height, or 130% */

      color: #ffffff;
      margin-top: 100px;
      margin-bottom: 50px;
    }
    .links {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 50px;
    }
    .have-project {
      margin-top: 100px;
      h2 {
        font-family: Space Grotesk;
        font-style: normal;
        font-weight: bold;
        font-size: 35px;
        text-align: center;
        line-height: 45px;
        /* identical to box height */

        color: #ffffff;
      }
      .contact-link {
        display: flex;
        justify-content: center;
        margin-top: 50px;
        margin-bottom: 50px;
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

export default Works;
