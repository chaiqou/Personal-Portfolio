import React, { Suspense } from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Spinner from "./components/Spinner";

const Projects = React.lazy(() => import("./pages/Projects"));
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Suspense>
        <Footer />
      </Router>
    </>
  );
};

export default App;
