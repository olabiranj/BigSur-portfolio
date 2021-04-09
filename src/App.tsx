import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { HOME } from "./services/routes";
import loaderImg from "./assets/img/loader.gif";

import "./index.css";
const Home = lazy(() => import("./pages/Home"));

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
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
          <Route path={HOME} component={Home} />
          {/* <Route component={ErrorPage} />  */}
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
