// import eduImg from "../assets/img/eduImg.png";
import tmacad from "../assets/img/tmacad.png";
// import rchme from "../assets/img/rchme.png";
import nodeId from "../assets/img/node-id.png";
import awacloud from "../assets/img/awa-cloud.png";
import anna from "../assets/img/anna.png";
// import josax from "../assets/img/josax2.png";

const Works = () => {
  return (
    <div className="col-md-10 mx-auto">
      <h4 className="mt-4 ml-3">Projects</h4>
      {/* <div className="projects mx-4 mb-3">
        <div className="row single-project ">
          <div className="col-md-12 col-lg-5 p-3 py-4">
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
      </div> */}
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
      <div className="projects mx-4 mb-3">
        <div className="row single-project">
          <div className="col-md-5 p-3 py-4">
            <div className="flex-ct">
              <img src={awacloud} alt="edu" />
            </div>
          </div>
          <div className="col-md-7 p-3">
            <div className="">
              <h1>Awa Cloud</h1>
              <p>
                A progressive web application that forecast the atmospheric
                condition of all cities in the world
              </p>
              <button
                onClick={() =>
                  window.open("https://awa-cloud.netlify.app/", "_blank")
                }
                className="btn shadow"
              >
                Launch
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="projects  mx-4">
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
                onClick={() =>
                  window.open("https://myedusponsor.com/", "_blank")
                }
                className="btn shadow"
              >
                Launch
              </button>
            </div>
          </div>
        </div>
      </div> */}
      <div className="projects  mx-4">
        <div className="row single-project">
          <div className="col-md-5 p-3 py-4">
            <div className="flex-ct">
              <img src={nodeId} alt="edu" />
            </div>
          </div>
          <div className="col-md-7 p-3">
            <div className="">
              <h1>Node-Id</h1>
              <p>
                An npm package that randmonly generates a unique id for faster
                development set up.
              </p>
              <button
                onClick={() =>
                  window.open("https://www.npmjs.com/package/node-id", "_blank")
                }
                className="btn shadow"
              >
                Launch
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="projects  mx-4">
        <div className="row single-project">
          <div className="col-md-5 p-3 py-4">
            <div className="flex-ct">
              <img src={anna} alt="edu" />
            </div>
          </div>
          <div className="col-md-7 p-3">
            <div className="">
              <h1>Julianna</h1>
              <p>A dark-themed portfolio website for Ogunlade Oluwasayo</p>
              <button
                onClick={() =>
                  window.open("https://julianna.netlify.app/", "_blank")
                }
                className="btn shadow"
              >
                Launch
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="projects  mx-4">
        <div className="row single-project">
          <div className="col-md-5 p-3 py-4">
            <div className="flex-ct">
              <img src={josax} alt="edu" />
            </div>
          </div>
          <div className="col-md-7 p-3">
            <div className="">
              <h1>Josax</h1>
              <p>An online music store for Josax</p>
              <button
                onClick={() =>
                  window.open("https://josax.herokuapp.com/", "_blank")
                }
                className="btn shadow"
              >
                Launch
              </button>
            </div>
          </div>
        </div>
      </div> */}

      <br />
    </div>
  );
};

export default Works;
