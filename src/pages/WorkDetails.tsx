import React from "react";
import styled from "styled-components";
import Navbar from "../components/Nabvar";
import Footer from "../components/Footer";
import eduImg from "../assets/img/eduDetail2.png";
import eduImg2 from "../assets/img/eduDetail1.png";
import { useHistory } from "react-router-dom";

const WorkDetails = () => {
  const history = useHistory();
  return (
    <div className="container">
      <WorkDetails.Wrapper>
        <Navbar />
        <section className="work-details col-sm-10 mx-auto">
          <h5 onClick={() => history.goBack()}>
            <i className="fas fa-chevron-left"></i>
          </h5>
          <h6>Mobile App</h6>
          <h2 className="col-md-8 mt-4">
            EduSponsor - A Product that help Students have access to sponsorship
          </h2>
          <img src={eduImg} alt="eduImg" />

          <h3 className=" mt-4">Overview</h3>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit.
          </p>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit. Exercitation veniam consequat sunt nostrud
            amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            amet sint.
          </p>
          <h3 className="">Tools</h3>
          <p>Figma, Adobe Illustrator</p>
          <h3>Project Brief</h3>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit.
          </p>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
          <h3>Role</h3>
          <p>Lead Designer</p>
          <h3>MockUps</h3>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
          <img src={eduImg2} alt="eduImg" />
          <h3>Conclusion</h3>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit.
          </p>
        </section>
        <Footer />
      </WorkDetails.Wrapper>
    </div>
  );
};

WorkDetails.Wrapper = styled.div`
  .work-details {
    margin-top: 30px;
    h5 {
      cursor: pointer;
    }
    h6 {
      font-family: Axiforma;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 40px;
      /* identical to box height, or 222% */

      /* linear gradient */

      background: linear-gradient(
        90deg,
        #ff6b6b 0%,
        #faab32 53.94%,
        #ff6b6b 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-top: 50px;
    }
    h2 {
      font-family: Axiforma;
      font-style: normal;
      font-weight: bold;
      font-size: 30px;
      line-height: 65px;
      /* or 217% */

      color: #ffffff;
    }
    img {
      margin-top: 50px;
      border-radius: 30px;
      border: 1px solid rgba(63, 63, 63, 0.78);
      width: 100%;
      margin-bottom: 50px;
    }
    h3 {
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
      font-size: 16px;
      line-height: 35px;
      /* or 219% */

      color: #9a9999;
    }
  }
`;

export default WorkDetails;
