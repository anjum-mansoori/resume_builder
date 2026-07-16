import React from "react";
import { Link } from "react-router-dom";

const Templates = () => {
    const templates = [
        {
            id: 1,
            name: "Modern",
            image:
                "img/modern.jpeg",
        },
        {
            id: 2,
            name: "Professional",
            image:
                "img/professional.jpeg",
        },
        {
            id: 3,
            name: "Classic",
            image:
                "img/classic.jpeg",
        },
        {
            id: 4,
            name: "Minimal",
            image:
                "img/minimal.jpeg",
        },
    ];

    return (
        <section className="pb-24 ">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold">
                        Professional Resume Templates
                    </h2>

                    <p className="text-gray-600 mt-4">
                        Choose from recruiter-approved resume templates.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {templates.map((template) => (
                        <div
                            key={template.id}
                            className="group rounded-xl overflow-hidden shadow-lg bg-white" >
                            <div className="relative overflow-hidden">
                                <img
                                    src={template.image}
                                    alt={template.name}
                                    className=" w-full h-80 object-cover transition duration-300 group-hover:scale-105 "
                                />

                                <div
                                    className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center "
                                >
                                    <Link
                                        to={`/createResume/${template.name.toLowerCase()}`}
                                        className=" bg-white text-black px-5  py-2  rounded-lg font-semibold "
                                    >
                                        Use Template
                                    </Link>
                                </div>

                            </div>

                            <div className="p-4 text-center">
                                <h3 className="font-bold text-lg">
                                    {template.name}
                                </h3>

                                <p className="text-sm text-gray-500 mt-2">
                                    ATS Friendly Resume
                                </p>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Templates;