import React from "react";
import styled from "styled-components";
import Link from "../components/inputs/Links";
import Navbar from "../components/Nabvar";
import triImg from "../assets/img/Polygon.png";
import zagImg from "../assets/img/Vector5.png";
import bg1Img from "../assets/img/Rectangle72.png";
import bg2Img from "../assets/img/Rectangle73.png";
import userImg from "../assets/img/user.png";
import settingsImg from "../assets/img/settings.png";
import bookImg from "../assets/img/book.png";
import DisplayCard from "../components/DisplayCard";
import eduBg from "../assets/img/anna1.jpg";
import pmbBg from "../assets/img/anna2.jpg";
import adobeXD from "../assets/img/adobe-xd-logo-png-transparent 2.png";
import adobeIllustr from "../assets/img/586d7feb25738d9f2d793e96 1.png";
import adobeAE from "../assets/img/Vector.png";
import figma from "../assets/img/1_nUZs178q_SxL7NbW7mE10A 2.png";
import slack from "../assets/img/slack.png";
import zeplin from "../assets/img/zeplin.png";
import betterInt from "../assets/img/Rectangle 20.png";
import arrowLeftImg from "../assets/img/arrow-left.png";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="container">
      <Home.Wrapper>
        <Navbar />
        <section className="header">
          <div className="header-content">
            <p>Hello, I'm</p>
            <h1>
              <span>Juli</span>anna
            </h1>
            <h5 className="header-desc col-sm-10">
              I specialize in designing and developing user interfaces and
              digital products. I don’t restrict myself to design. The blend of
              design, user experience, marketing, and business is where I feel I
              excel.
            </h5>
            <div className="links mt-4">
              <Link>Hire Me</Link>
              <Link
                goto={`/contact`}
                bg="#000000"
                color="#ffffff"
                border={true}
              >
                Contact Me
              </Link>
            </div>
          </div>
          <img className="triImg" src={triImg} alt="triangle" />
          <img className="zagImg" src={zagImg} alt="zigzag" />
          <div className="icon-links">
            <div>
              <a href="/">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
            <div>
              <a href="/">
                <i className="fab fa-behance"></i>
              </a>
            </div>
            <div>
              <a href="/">
                <i className="fab fa-dribbble"></i>
              </a>
            </div>
            <div>
              <a href="/">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </section>
        <section className="what-i-do">
          <div className="content">
            <h2>What I do in Nutshell</h2>
            <p className="col-sm-8">
              I specialize in designing and developing user interfaces and
              digital products. I don’t restrict myself to design.{" "}
            </p>
            <div className="row">
              <div className="col-sm-4">
                <div className="icon-container">
                  <img className="bg-1" src={bg1Img} alt="bg-1" />
                  <img className="bg-2" src={bg2Img} alt="bg-2" />
                  <img className="logo-icon" src={userImg} alt="logo-icon" />
                </div>
                <h3>User Research</h3>
                <p>
                  I specialize in designing and developing user interfaces and
                  digital products. I don’t restrict myself to design.{" "}
                </p>
              </div>
              <div className="col-sm-4">
                <div className="icon-container">
                  <img className="bg-1" src={bg1Img} alt="bg-1" />
                  <img className="bg-2" src={bg2Img} alt="bg-2" />
                  <img
                    className="logo-icon"
                    src={settingsImg}
                    alt="logo-icon"
                  />
                </div>
                <h3>Design Strategy</h3>
                <p>
                  I specialize in designing and developing user interfaces and
                  digital products. I don’t restrict myself to design.
                </p>
              </div>
              <div className="col-sm-4">
                <div className="icon-container">
                  <img className="bg-1" src={bg1Img} alt="bg-1" />
                  <img className="bg-2" src={bg2Img} alt="bg-2" />
                  <img className="logo-icon" src={bookImg} alt="logo-icon" />
                </div>
                <h3>Wireframing & Prototyping</h3>
                <p>
                  I specialize in designing and developing user interfaces and
                  digital products. I don’t restrict myself to design.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="my-works">
          <h2>My Works</h2>
          <p className="col-sm-7">
            I specialize in designing and developing user interfaces and digital
            products. I don’t restrict myself to design.
          </p>

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
              link: "/",
            }}
            imgRight={eduBg}
          />
          <DisplayCard
            title="PayMyBills"
            desc={`Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.`}
            topBtn={[
              { text: "Mobile", textColor: "#FF6B6B", bgColor: "#FFF1FB" },
            ]}
            button={{
              text: "Case Study",
              textColor: "#ffffff",
              bgColor: "#03B66B",
              link: "/",
            }}
            imgRight={pmbBg}
          />
          <div className="see-all">
            <Link bg="#000000" border color="#ffffff" goto={`/works`}>
              See All
            </Link>
          </div>
        </section>
        <section className="tools">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <h2 className="col-md-10 mb-4">
                  “My Working Tools I specialize in designing and developing”
                </h2>
                <p className="col-md-10">
                  I specialize in designing and developing user interfaces and
                  digital products. I don’t restrict myself to design.{" "}
                </p>
              </div>
              <div className="col-md-6">
                <div className="tools-container">
                  <p>
                    <img className="link-icon" src={adobeXD} alt="adobe" />
                    Adobe XD
                  </p>
                  <p>
                    <img className="link-icon" src={adobeIllustr} alt="adobe" />
                    Adobe Illustrator
                  </p>
                  <p>
                    <img className="link-icon" src={adobeAE} alt="adobe" />
                    Adobe After-Effect
                  </p>
                  <p>
                    <img className="link-icon" src={figma} alt="adobe" />
                    Figma
                  </p>
                  <p>
                    <img className="link-icon" src={slack} alt="adobe" />
                    Slack
                  </p>
                  <p>
                    <img className="link-icon" src={zeplin} alt="adobe" />
                    Zeplin
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="publications">
          <h2>My Publications</h2>
          <p className="col-md-7 mb-4">
            I specialize in designing and developing user interfaces and digital
            products. I don’t restrict myself to design.
          </p>
          <div className="row">
            <div className="col-md-6 px-4">
              <div className="content">
                <img src={betterInt} alt="better interface" />
                <div className="text">
                  <h3>Designing Better Interface</h3>
                  <p>
                    Design is the process of creating machines, interactive
                    systems, buildings, vehicles, software, objects, etc. It
                    user-centered, i.e. users are at the heart of the design. It
                    is about creating solutions for people, physical items, or
                    abstract systems to address a need or a problem. Simply put,
                    Design is a science of creating things: from inception to
                    delivery.
                  </p>
                </div>
                <div className="circle-btn">
                  <img src={arrowLeftImg} alt="left" />
                </div>
              </div>
            </div>
            <div className="col-md-6 px-4">
              <div className="content">
                <img src={betterInt} alt="better interface" />
                <div className="text">
                  <h3>Designing Better Interface</h3>
                  <p>
                    Design is the process of creating machines, interactive
                    systems, buildings, vehicles, software, objects, etc. It
                    user-centered, i.e. users are at the heart of the design. It
                    is about creating solutions for people, physical items, or
                    abstract systems to address a need or a problem. Simply put,
                    Design is a science of creating things: from inception to
                    delivery.
                  </p>
                </div>
                <div className="circle-btn">
                  <img src={arrowLeftImg} alt="left" />
                </div>
              </div>
            </div>
          </div>
          <div className="see-all">
            <Link bg="#000000" border color="#ffffff">
              See All
            </Link>
          </div>
        </section>
        <Footer />
      </Home.Wrapper>
    </div>
  );
};

Home.Wrapper = styled.div`
  .header {
    min-height: 90vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .header-content {
      height: fit-content;
      width: 90%;
      p {
        font-family: Axiforma;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 33px;
        /* identical to box height */

        /* linear gradient */
        text-align: left;
        background: linear-gradient(
          90deg,
          #ff6b6b 0%,
          #faab32 53.94%,
          #ff6b6b 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      > h1 {
        font-family: Space Grotesk;
        font-style: normal;
        font-weight: bold;
        font-size: 130px;
        padding: 0;
        span {
          color: #000000;
          background: #ffffff;
          padding: 0 25px;
          border-radius: 10px;
          margin-right: 5px;
        }
      }
      .header-desc {
        margin-top: 50px;
        font-family: Axiforma;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 40px;
        /* or 222% */

        color: #bcbcbc;
      }
      .links {
        display: flex;
        flex-wrap: wrap;
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
    .icon-links {
      position: absolute;
      bottom: 90px;
      right: 70px;
      dispaly: flex;
      flex-direction: column;
      height: fit-content;
      div {
        height: 36px;
        width: 36px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #ffffff;
        margin-bottom: 10px;
        a {
          text-decoration: none;
          color: #000000;
        }
      }
    }
  }
  .what-i-do {
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    .content {
      h2 {
        font-family: Space Grotesk;
        font-style: normal;
        font-weight: bold;
        font-size: 35px;
        line-height: 65px;
        /* identical to box height, or 186% */

        color: #ffffff;
      }
      p {
        font-family: Axiforma;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 40px;
        /* or 222% */

        color: #bcbcbc;
        margin-left: -15px;
        margin-bottom: 60px;
      }
      .row {
        .col-sm-4 {
          .icon-container {
            position: relative;
            margin-left: -10px;
            .bg-2 {
              position: absolute;
              bottom: 10px;
              left: 10px;
            }
            .logo-icon {
              position: absolute;
              bottom: 23px;
              left: 25px;
            }
          }
          h3 {
            font-family: Space Grotesk;
            font-style: normal;
            font-weight: bold;
            font-size: 18px;
            line-height: 23px;
          }
          p {
            font-family: Axiforma;
            font-style: normal;
            font-weight: normal;
            font-size: 13px;
            line-height: 27px;
            /* or 208% */
            margin-left: 0;
            color: #bcbcbc;
          }
        }
      }
    }
  }
  .my-works {
    h2 {
      font-family: Space Grotesk;
      font-style: normal;
      font-weight: bold;
      font-size: 35px;
      line-height: 65px;
      /* identical to box height, or 186% */

      color: #ffffff;
    }
    p {
      font-family: Axiforma;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 40px;
      /* or 222% */

      color: #bcbcbc;
      margin-left: -15px;
      margin-bottom: 60px;
    }
    .see-all {
      display: flex;
      justify-content: center;
      margin-top: 100px;
      margin-bottom: 100px;
    }
  }
  .tools {
    margin-bottom: 100px;
    .container-fluid {
      .row {
        .col-md-6 {
          h2 {
            font-family: Space Grotesk;
            font-style: normal;
            font-weight: bold;
            font-size: 35px;
            line-height: 65px;
            /* or 186% */

            color: #ffffff;
          }
          p {
            font-family: Axiforma;
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 40px;
            /* or 222% */

            color: #bcbcbc;
          }
          .tools-container {
            display: flex;
            flex-wrap: wrap;
            div {
              border-radius: 40px;
              border: 1px solid #ffffff;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            p {
              padding: 10px 30px;
              border-radius: 40px;
              border: 1px solid #ffffff;
              margin-right: 20px;
              font-family: Axiforma;
              font-style: normal;
              font-weight: normal;
              font-size: 15px;
              color: #ffffff;
              background: #090909;
            }
            .link-icon {
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
  .publications {
    h2 {
      font-family: Space Grotesk;
      font-style: normal;
      font-weight: bold;
      font-size: 35px;
      line-height: 65px;
      margin-left: 10px;
    }
    p {
      font-family: Axiforma;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 40px;
      /* or 222% */
      color: #bcbcbc;
    }
    .row {
      margin-top: 40px;
      .col-md-6 {
        margin-bottom: 20px;
        .content {
          position: relative;
          background: rgba(9, 9, 9, 0.87);
          border: 1px solid rgba(63, 63, 63, 0.78);
          box-sizing: border-box;
          border-radius: 10px;
          img {
            width: 100%;
            margin-bottom: 30px;
          }
          .text {
            padding-left: 20px;
            padding-right: 20px;
            h3 {
              font-family: Space Grotesk;
              font-style: normal;
              font-weight: bold;
              font-size: 25px;
              line-height: 30px;
            }
            p {
              font-family: Axiforma;
              font-style: normal;
              font-weight: normal;
              font-size: 14px;
              line-height: 30px;
              /* or 214% */

              color: #bcbcbc;
            }
          }
          .circle-btn {
            height: 60px;
            width: 60px;
            border-radius: 50%;
            background: #ff6b6b;
            box-shadow: 0px 4px 12px #690303;
            position: absolute;
            right: -25px;
            bottom: 7px;
            img {
              width: 20px;
              height: 20px;
              margin-top: 20px;
              margin-left: 20px;
            }
          }
        }
      }
    }
    .see-all {
      display: flex;
      justify-content: center;
      margin-top: 100px;
      margin-bottom: 100px;
    }
  }

  @media (max-width: 768px) {
    .header {
      .header-content {
        h1 {
          font-size: 70px;
        }
        .header-desc {
          font-size: 14px;
        }
      }
    }
  }
  @media (max-width: 420px) {
    .header {
      .header-content {
        h1 {
          font-size: 50px;
        }
        .header-desc {
          font-size: 14px;
        }
      }
      .icon-links {
        right: 10px;
      }
      .zagImg {
        left: 10px;
        top: 300px;
      }
      .triImg {
        top: 130px;
      }
    }
  }
`;

export default Home;
