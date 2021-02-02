import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Nabvar";
import Footer from "../components/Footer";
import phone from "../assets/img/phone.png";
import mail from "../assets/img/envelope.png";
import Link from "../components/inputs/Links";

const Contact = () => {
  const [name, setName] = useState("");
  const [phonenum, setPhone] = useState("");
  const [email, setEmail] = useState("");
  //   const [message, setMessage] = useState("");
  return (
    <div className="container">
      <Contact.Wrapper>
        <Navbar />
        <section className="contact col-sm-10 mx-auto">
          <div className="row">
            <div className="col-md-6 mb-4">
              <h2>Get a Quote</h2>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <div>
                <a href="mailto:ogunladeoluwasayo@gmail.com">
                  <span>
                    <img src={mail} alt="" />
                  </span>
                  ogunladeoluwasayo@gmail.com
                </a>
              </div>
              <br />
              <div>
                <a href="tel:+234 803 979 3005">
                  <span>
                    <img src={phone} alt="" />
                  </span>
                  +234 803 979 3005
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <form
                action="mailto:olabiranj@gmail.com"
                method="POST"
                encType="multipart/form-data"
                name="Email Form"
              >
                <input
                  className="text-input"
                  placeholder="Your Full Name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className="text-input"
                  placeholder="Your Phone Number"
                  required
                  type="tel"
                  value={phonenum}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <input
                  className="text-input"
                  required
                  placeholder="Your Full Name"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                  required
                  name=""
                  placeholder="Your Message"
                ></textarea>
                {/* <button type="submit"> Submit</button> */}
                <Link>Send a Message</Link>
              </form>
            </div>
          </div>
        </section>
        <Footer />
      </Contact.Wrapper>
    </div>
  );
};

Contact.Wrapper = styled.div`
  .contact {
    margin-top: 100px;
    .row {
      .col-md-6 {
        h2 {
          font-family: Space Grotesk;
          font-style: normal;
          font-weight: bold;
          font-size: 50px;
          line-height: 64px;
          /* identical to box height */

          color: #ffffff;
          margin-bottom: 50px;
        }
        p {
          font-family: Axiforma;
          font-style: normal;
          font-weight: normal;
          font-size: 15px;
          line-height: 30px;
          /* or 200% */

          color: rgba(255, 255, 255, 0.71);
        }
        div {
          margin-top: 30px;
          a {
            font-family: Axiforma;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 24px;
            /* identical to box height */

            color: rgba(255, 255, 255, 0.71);

            span {
              margin-right: 15px;
            }
          }
        }
        form {
          margin-top: 20px;
          .text-input {
            margin-bottom: 20px;
            background: rgba(9, 9, 9, 0.87);
            border: 1px solid rgba(63, 63, 63, 0.78);
            box-sizing: border-box;
            border-radius: 15px;
            padding: 17px;
            padding-left: 27px;
            width: 100%;
            font-family: Axiforma;
            font-style: normal;
            font-weight: 300;
            font-size: 13px;
            line-height: 30px;
            /* identical to box height, or 231% */
            outline: none;
            color: rgba(255, 255, 255, 0.6);
          }
          textarea {
            width: 100%;
            height: 150px;
            margin-bottom: 20px;
            background: rgba(9, 9, 9, 0.87);
            border: 1px solid rgba(63, 63, 63, 0.78);
            box-sizing: border-box;
            border-radius: 15px;
            padding: 17px;
            padding-left: 27px;
            width: 100%;
            font-family: Axiforma;
            font-style: normal;
            font-weight: 300;
            font-size: 13px;
            line-height: 30px;
            /* identical to box height, or 231% */
            outline: none;
            color: rgba(255, 255, 255, 0.6);
            margin-bottom: 30px;
          }
        }
      }
    }
  }
`;

export default Contact;
