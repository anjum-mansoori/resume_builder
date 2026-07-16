import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Feature";
import Templates from "../components/TemplatesSection";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Features />
            <Templates />
            <Footer />
        </>
    );
};

export default Home;