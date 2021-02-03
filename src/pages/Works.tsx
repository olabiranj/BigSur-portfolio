import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Nabvar";
import Footer from "../components/Footer";
import Link from "../components/inputs/Links";
import DisplayCard2 from "../components/DisplayCard2";
import eduImg from "../assets/img/eduCard.png";
import pmbImg from "../assets/img/pmbCard.png";
import digicitImg from "../assets/img/digicitCard.png";
import platoImg from "../assets/img/platoCard.png";
import residifyImg from "../assets/img/residifyCard.png";

const Works = () => {
  let [views, setViews] = useState(0);
  return (
    <div className="container">
      <Works.Wrapper>
        <Navbar />
        <section className="works col-md-10 mx-auto mt-4">
          <h2 className="head-text">My Works</h2>
          <div className="links mt-4">
            <Link func={() => setViews(0)}>All Project</Link>
            <Link
              func={() => setViews(2)}
              bg="#000000"
              color="#ffffff"
              border={true}
            >
              Mobile App
            </Link>
            <Link
              func={() => setViews(1)}
              bg="#000000"
              color="#ffffff"
              border={true}
            >
              Website
            </Link>
            <Link
              func={() => setViews(0)}
              bg="#000000"
              color="#ffffff"
              border={true}
            >
              Illustrations
            </Link>
          </div>
          {(views === 0 || views === 2) && (
            <DisplayCard2
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
              imgRight={eduImg}
            />
          )}
          {(views === 0 || views === 1) && (
            <DisplayCard2
              title="PayMyBills"
              desc={`Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.`}
              topBtn={[
                { text: "Web", textColor: "#FF6B6B", bgColor: "#FFF1FB" },
              ]}
              button={{
                text: "Case Study",
                textColor: "#ffffff",
                bgColor: "#03B66B",
                link: "/work-details",
              }}
              imgRight={pmbImg}
            />
          )}
          {(views === 0 || views === 1 || views === 2) && (
            <DisplayCard2
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
              imgRight={digicitImg}
            />
          )}
          {(views === 0 || views === 1 || views === 2) && (
            <DisplayCard2
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
              imgRight={residifyImg}
            />
          )}
          {(views === 0 || views === 1) && (
            <DisplayCard2
              title="Plato"
              desc={`Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.`}
              topBtn={[
                { text: "Web", textColor: "#FF6B6B", bgColor: "#FFF1FB" },
              ]}
              button={{
                text: "Case Study",
                textColor: "#ffffff",
                bgColor: "#03B66B",
                link: "/work-details",
              }}
              imgRight={platoImg}
            />
          )}

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
      font-size: 35px;
      line-height: 65px;
      /* identical to box height, or 186% */

      color: #ffffff;
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
