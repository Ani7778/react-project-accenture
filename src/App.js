import React from "react";
import './App.scss';
import Navbar from "./containers/navbar/Navbar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import CaseStudies from "./containers/carousel-slider/CaseStudies";
import About from "./containers/navbar/About";
import Footer from "./components/footer/Footer";
import JoinTheTeam from "./components/join-the-team/JoinTheTeam";
import Careers from "./containers/careers/Careers";
import BlogPosts from "./components/blog-posts/BlogPosts";
import AllJobs from "./containers/careers/all-jobs/AllJobs";

function App() {
  return (
      <Router>
        <Navbar />
              <Switch>
                    <Route path="/" exact>
                        <JoinTheTeam />
                        <CaseStudies />
                        <Careers />
                        <BlogPosts />
                    </Route>
                    <Route path="/info" exact>
                      <About />
                    </Route>
                  <Route path="/careers" exact>
                      <AllJobs />
                  </Route>
              </Switch>
        <Footer />
      </Router>
  );
}

export default App;
