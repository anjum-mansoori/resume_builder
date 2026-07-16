import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
    return (
        <>
            <Navbar />

            <section className="bg-gray-100 min-h-screen py-16 px-6">

                <div className="max-w-6xl mx-auto">

                    <div className="text-center">

                        <h1 className="text-5xl font-bold">
                            About Resume Builder
                        </h1>

                        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                            Resume Builder is a modern web application that helps
                            job seekers create professional resumes quickly and
                            efficiently. Choose from multiple resume templates,
                            customize your information, and build resumes that
                            stand out to recruiters and hiring managers.
                        </p>

                    </div>

                    <div className="mt-20 bg-white rounded-2xl shadow-lg p-10">

                        <h2 className="text-3xl font-bold mb-4">
                            Our Mission
                        </h2>

                        <p className="text-gray-700 leading-relaxed">
                            Our mission is to simplify resume creation for
                            students, freshers, and professionals. We believe
                            everyone deserves access to high-quality resume
                            templates without complicated tools or expensive
                            software.
                        </p>

                    </div>

                    <div className="mt-12">

                        <h2 className="text-3xl font-bold text-center mb-10">
                            Key Features
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                            <div className="bg-white p-6 rounded-xl shadow-md">
                                <h3 className="text-xl font-bold mb-3">
                                    Multiple Templates
                                </h3>

                                <p className="text-gray-600">
                                    Choose from Classic, Modern, Professional,
                                    Minimal, and Developer templates.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md">
                                <h3 className="text-xl font-bold mb-3">
                                    Easy Editing
                                </h3>

                                <p className="text-gray-600">
                                    Create, edit, and update resumes anytime
                                    with a simple user-friendly interface.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md">
                                <h3 className="text-xl font-bold mb-3">
                                    Secure Accounts
                                </h3>

                                <p className="text-gray-600">
                                    User authentication keeps your resumes
                                    private and secure.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md">
                                <h3 className="text-xl font-bold mb-3">
                                    Responsive Design
                                </h3>

                                <p className="text-gray-600">
                                    Access and manage your resumes from desktop,
                                    tablet, or mobile devices.
                                </p>
                            </div>

                        </div>

                    </div>

                    <div className="mt-20 bg-white rounded-2xl shadow-lg p-10">

                        <h2 className="text-3xl font-bold mb-6">
                            Built With
                        </h2>

                        <div className="flex flex-wrap gap-4">
                            {[
                                "React",
                                "Tailwind CSS",
                                "Node.js",
                                "Express.js",
                                "MongoDB",
                                "JWT Authentication",
                            ].map((tech, index) => (
                                <span
                                    key={index}
                                    className="
                                        bg-blue-100
                                        text-blue-700
                                        px-4
                                        py-2
                                        rounded-full
                                        font-medium
                                    "
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                    </div>

                    <div className="mt-20 text-center">

                        <h2 className="text-3xl font-bold">
                            Start Building Your Resume Today
                        </h2>

                        <p className="mt-4 text-gray-600">
                            Create professional resumes, showcase your skills,
                            and take the next step in your career journey.
                        </p>

                    </div>

                </div>

            </section>

            <Footer />
        </>
    );
};

export default About;