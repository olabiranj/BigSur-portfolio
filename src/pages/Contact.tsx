import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [phonenum, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <section className="contact col-sm-10 mx-auto">
      <div className="row">
        <div className="col-md-6 mb-4">
          <h2>Get a Quote</h2>
          <p>
            I am always open to full-time & freelance opportunities. Please send
            me a message if you have any inquiries and I will respond to you ask
            soon as possible.
          </p>
          <div>
            <a href="mailto:olabiranj@gmail.com">
              <span className="fa fa-envelope"></span>
              olaiyaolabiran@gmail.com
            </a>
          </div>
          <br />
          <div>
            <a href="tel:+234 803 979 3005">
              <span className="fa fa-phone"></span>
              +234 809 348 1350
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
              placeholder="Your Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              required
              onChange={(e) => setMessage(e.target.value)}
              name=""
              value={message}
              placeholder="Your Message"
            ></textarea>
            <button className="btn shadow" type="submit">
              Submit
            </button>
            {/* <Link>Send a Message</Link> */}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
