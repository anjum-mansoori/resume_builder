import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <>
            <section className="pt-16  lg:min-h-[calc(100vh-80px)] flex lg:items-center">
                <div className="max-w-7xl mx-auto px-6 w-full ">

                    <div className="grid lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
                        <div className="space-y-6">
                            <h1 className="text-5xl font-bold leading-tight">
                                Build a Professional
                                <span className="text-blue-600"> Resume </span>
                                in Minutes
                            </h1>

                            <p className="text-lg text-gray-600">
                                Create ATS-Friendly resumes that help you land interviews,
                                impress recruiters, and get hired faster.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link to="/createResume"> <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                                    Create Resume
                                </button>
                                </Link>
                                <Link to={"/templates"}>  <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition">
                                    View Templates
                                </button> </Link>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <img
                                src="https://images.unsplash.com/photo-1586281380349-632531db7ed4"
                                alt="Resume Builder"
                                className="w-full max-w-md rounded-xl shadow-2xl"
                            />
                        </div>

                    </div>
                </div>
            </section>

        </>
    );
};

export default Hero;
