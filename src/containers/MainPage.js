import React from "react";
import Navbar from "./navbar/Navbar";
import BlogPosts from "../components/blog-posts/BlogPosts";
import Footer from "../components/footer/Footer";
import CaseStudies from "./carousel-slider/CaseStudies";
import Careers from "../components/careers/Careers";
import JoinTheTeam from "./video-slider/VideoSlider";

function MainPage() {
    return (
        <>
            <Navbar />
            <JoinTheTeam />
            <CaseStudies />
            <Careers />
            <BlogPosts />
            <Footer />
        </>
    );
}

export default React.memo(MainPage);
