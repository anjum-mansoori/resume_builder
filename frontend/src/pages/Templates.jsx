import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Templates = () => {

    const templates = [
        {
            id: 1,
            name: "Classic",
            image: "img/classic.jpeg",
            description: "Simple ATS-friendly layout."
        },
        {
            id: 2,
            name: "Modern",
            image: "img/modern.jpeg",
            description: "Modern design with clean sections."
        },
        {
            id: 3,
            name: "Professional",
            image: "img/professional.jpeg",
            description: "Perfect for corporate jobs."
        },
        {
            id: 4,
            name: "Minimal",
            image: "img/minimal.jpeg",
            description: "Elegant and distraction-free."
        },
        {
            id: 5,
            name: "Developer",
            image: "img/developer.jpeg",
            description: "Perfect for Software Developers."
        }
    ];

    return (
        <>
            <Navbar />

            <section className="py-16 px-6 bg-gray-100 min-h-screen">

                <div className="max-w-7xl mx-auto">

                    <h1 className="text-4xl font-bold text-center">
                        Choose Your Resume Template
                    </h1>

                    <p className="text-center text-gray-600 mt-4">
                        Select a professional template and start building your resume.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

                        {templates.map((template) => (

                            <div
                                key={template.id}
                                className="
                                    bg-white
                                    rounded-xl
                                    overflow-hidden
                                    shadow-lg
                                    hover:shadow-2xl
                                    transition
                                "
                            >

                                <img
                                    src={template.image}
                                    alt={template.name}
                                    className="
                                        w-full
                                        h-72
                                        object-cover
                                    "
                                />

                                <div className="p-5">

                                    <h2 className="text-xl font-bold">
                                        {template.name}
                                    </h2>

                                    <p className="text-gray-600 mt-2">
                                        {template.description}
                                    </p>

                                    <Link
                                        to={`/createResume/${template.name.toLowerCase()}`}
                                        className="
                                            mt-4
                                            inline-block
                                            bg-blue-600
                                            text-white
                                            px-5
                                            py-2
                                            rounded-lg
                                            hover:bg-blue-700
                                            transition
                                        "
                                    >
                                        Use Template
                                    </Link>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            <Footer />
        </>
    );
};

export default Templates;