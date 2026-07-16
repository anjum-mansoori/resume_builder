import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 ">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid md:grid-cols-3 gap-8">

                    <div>
                        <h2 className="text-2xl font-bold">
                            <span className="text-red-600">&lt;</span>ResumeBuilder<span className="text-red-600">/&gt;</span>
                        </h2>

                        <p className="text-gray-400 mt-4">
                            Build professional resumes in minutes and
                            land your dream job faster.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">
                            Quick Links
                        </h3>

                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/templates">Templates</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/register">Register</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">
                            Contact
                        </h3>

                        <p className="text-gray-400">
                            support@resumebuilder.com
                        </p>

                        <p className="text-gray-400 mt-2">
                            Mumbai, India
                        </p>
                    </div>

                </div>

                <hr className="my-8 border-gray-700" />

                <p className="text-center text-gray-500">
                    &copy; 2026 ResumeBuilder. All Rights Reserved.
                </p>

            </div>
        </footer>
    );
};

export default Footer;