import React, {Suspense, lazy} from "react";
import './App.scss';
import Navbar from "./containers/navbar/Navbar";
import {HashRouter, Route, Switch} from "react-router-dom";
import CaseStudies from "./containers/carousel-slider/CaseStudies";
import About from "./containers/navbar/About";
import Footer from "./components/footer/Footer";
import JoinTheTeam from "./components/join-the-team/JoinTheTeam";
import Careers from "./containers/careers/Careers";
import BlogPosts from "./components/blog-posts/BlogPosts";
import AllJobs from "./containers/careers/all-jobs/AllJobs";
import JobDescription from "./containers/careers/job-description/JobDescription";

function App() {
    const CaseStudies = lazy(() => {
        return new Promise(resolve => {
            setTimeout(() => resolve(import('./containers/carousel-slider/CaseStudies')), 100);
        });
    });

    return (
        <HashRouter>
            <Suspense fallback={JoinTheTeam}>
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
                            {/*<Route path="/careers" exact>*/}
                            {/*  <AllJobs />*/}
                            {/*</Route>*/}
                            {/*<Route path="/careers/:id" exact>*/}
                            {/*    <JobDescription />*/}
                            {/*</Route>*/}
                        </Switch>
                <Footer />
            </Suspense>
          </HashRouter>
  );
}

export default App;
