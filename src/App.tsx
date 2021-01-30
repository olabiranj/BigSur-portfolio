import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { ABOUT, CONTACT, HOME, WORKS, WORK_DETIALS } from "./services/routes";
import loaderImg from "./assets/img/loader.png";

import "./index.css";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Works = lazy(() => import("./pages/Works"));
const Contact = lazy(() => import("./pages/Contact"));
const WorkDetails = lazy(() => import("./pages/WorkDetails"));

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <Suspense
      fallback={
        <div className="loader-container">
          <div className="loader-container-inner">
            <img src={loaderImg} alt="loader" className="spin-loader" />
          </div>
        </div>
      }
    >
      <Router>
        <Switch>
          <Route exact path={HOME} component={Home} />
          <Route exact path={ABOUT} component={About} />
          <Route exact path={WORKS} component={Works} />
          <Route exact path={CONTACT} component={Contact} />
          <Route exact path={WORK_DETIALS} component={WorkDetails} />
          {/* <Route exact path={"/course_details/:id"} component={CourseDetails} />
          <Route component={ErrorPage} /> */}
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
