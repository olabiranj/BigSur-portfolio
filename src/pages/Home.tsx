import { useHistory } from "react-router-dom";
// import macbook from "../assets/img/macbook.png";
import reactImg from "../assets/img/react-png.png";
import reduxImg from "../assets/img/redux.png";
import gitImg from "../assets/img/git.png";
import mongodbImg from "../assets/img/mongodb.png";
import nodeImg from "../assets/img/node.png";
import tsImg from "../assets/img/ts-img.png";
import eduImg from "../assets/img/eduImg.png";
import tmacad from "../assets/img/tmacad.png";
import rchme from "../assets/img/rchme.png";
import { useRef } from "react";

const Home = () => {
  var headerRef = useRef<any>(null);
  const history = useHistory();

  return (
    <div className="col-md-10 mx-auto" ref={headerRef}>
      <div className="flex-ct mx-3">
        <div className="row">
          <div className="col-md-5 pt-5" data-aos="fade-down">
            <img
              src="https://media.licdn.com/dms/image/D4D03AQETjU4sNdjnog/profile-displayphoto-shrink_400_400/0/1665339540404?e=1677715200&v=beta&t=bkAYp_vLiapJ5_isTUy72Qc1zQFP8K_GDbRBo2vmUjc"
              alt="big-avatar"
              className="big-avatar rounded-circle shadow-lg mt-4"
            />
          </div>
          <div className="col-md-7 pt-5 about" data-aos="fade-up">
            <h1>What’s Up 😁?</h1>
            <p className="mt-3">
              I'm <b className="text-light">Joshua Olabiran</b> an experienced
              Software Developer with years professional working experience in
              the information technology (IT) and services industry. Skilled in
              React, Next.js, Typescript, GraghQL, SCSS, Git, Node, Express.js,
              and MongoDB. Has ability to convert UI designs made from Figma,
              Adobe XD, Zeplin, etc into real-world applications. A strong
              engineering professional with a Bachelor of Science focused in
              Computer Science. Also has ability to build web applications
              following the best practices for optimal performance and
              scalability.
            </p>
            <a className="btn shadow" href="https://wa.me/2348093481350">
              Hire Me
            </a>
          </div>
        </div>
      </div>
      <br />
      <br />
      <h4 className="mt-4 ml-3 mb-4">Projects</h4>
      <h3 className="col-md-12 mx-auto project-text">
        <b>
          "There is no such thing as a boring project. There are only boring
          executions "
        </b>
        <br />
        ―Irene Etzkorn
      </h3>
      <div className="projects mx-4 mb-3">
        <div className="row single-project ">
          <div className="col-md-5 col-lg-5  p-3 py-4">
            <div className="flex-ct">
              <img src={rchme} alt="edu" />
            </div>
          </div>
          <div className="col-md-7 p-3">
            <div className="">
              <h1>R'ch Me</h1>
              <p>
                R'ch Me™ is the instant engagement platform that acts as a
                digital business card. The easiest way to share contact info,
                websites, socials - anything!
              </p>
              <button
                onClick={() => window.open("https://www.rchme.co/", "_blank")}
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
              <img src={tmacad} alt="edu" />
            </div>
          </div>
          <div className="col-md-7 p-3">
            <div className="">
              <h1>TM Academy</h1>
              <p>
                TM30 ACADEMY is a name synonymous with excellence that offers
                results-oriented IT courses for personal career growth and
                corporate training in Nigeria. We have excelled in IT
                Training/Education, IT Consultancy and IT Solutions Development
                & Services. Our IT Training Centre is located in Lagos.
              </p>
              <button
                onClick={() =>
                  window.open("https://tmacademy.tm30.net/", "_blank")
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
              <img src={eduImg} alt="edu" />
            </div>
          </div>
          <div className="col-md-7 p-3">
            <div className="">
              <h1>EduSponsor</h1>
              <p>
                Edusponsor is a platform that enables candidates have access to
                examination sponsorship as well as other gifts from
                organizations after participating in qualifying tests
              </p>
              <button
                onClick={() => window.open("https://edusponsor.com/", "_blank")}
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
        <img className="m-4" src={tsImg} alt="ts" />
        <img className="m-4" src={reactImg} alt="rc" />
        <img className="m-4" src={reduxImg} alt="redux" />
        <img className="m-4" src={nodeImg} alt="node" />
        <img className="m-4" src={gitImg} alt="regitact" />
        <img className="m-4" src={mongodbImg} alt="mongodb" />
      </div>
    </div>
  );
};

export default Home;
