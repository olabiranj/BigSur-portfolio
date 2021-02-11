import React from "react";
import styled from "styled-components";
import Link from "./inputs/Links";

interface DisplayCardProps {
  title?: string;
  desc?: string;
  topBtn?: {
    bgColor: string;
    textColor: string;
    text: string;
  }[];
  button: {
    bgColor: string;
    textColor: string;
    text: string;
    link: string;
  };
  imgRight: string;
}
const DisplayCard = (props: DisplayCardProps) => {
  let { title, desc, topBtn, button, imgRight } = props;
  return (
    <DisplayCard.Wrapper button={button} imgRight={imgRight}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div className="card-desc">
              {topBtn?.map((dt) => (
                <Link
                  key={dt.text}
                  bg={dt.bgColor}
                  color={dt.textColor}
                  size="sm"
                  disable
                >
                  {dt.text}
                </Link>
              ))}
              <h2>{title}</h2>
              <p>{desc}</p>
              <Link
                bg={button.bgColor}
                color={button.textColor}
                goto={button.link}
              >
                {button.text}
              </Link>
            </div>
          </div>
          <div className="col-lg-6 img-bg"></div>
        </div>
      </div>
    </DisplayCard.Wrapper>
  );
};

DisplayCard.Wrapper = styled.div<DisplayCardProps>`
  width: 100%;
  height: fit-content;
  border-radius: 30px;
  background: #090909;
  margin-bottom: 50px;
  border: 1px solid rgba(63, 63, 63, 0.78);
  background: url(${(props) => props.imgRight});
  padding: 15px;
  padding-left: 25px;
  background-size: cover;
  background-repeat: no-repeat;
  .row {
    margin-bottom: 25px;
    .card-desc {
      h2 {
        font-size: 25px;
      }
      p {
        font-family: Axiforma;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 30px;
        /* or 222% */

        color: #bcbcbc;
        margin-left: 0;
        margin-bottom: 50px;
      }
    }
  }
  @media (max-width: 990px) {
    background: #090909;
  }
`;

export default DisplayCard;
