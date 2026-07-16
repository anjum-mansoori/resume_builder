import React from "react";
import { Zap, FileText, Palette, Download } from "lucide-react";

const Features = () => {
    const features = [
        {
            icon: <Zap size={40} />,
            title: "Fast Builder",
            description:
                "Create professional resumes in just a few minutes with our easy-to-use builder.",
        },
        {
            icon: <FileText size={40} />,
            title: "ATS Friendly",
            description:
                "Optimized resume layouts designed to pass Applicant Tracking Systems.",
        },
        {
            icon: <Palette size={40} />,
            title: "Modern Designs",
            description:
                "Choose from beautiful, recruiter-approved resume templates.",
        },
        {
            icon: <Download size={40} />,
            title: "PDF Download",
            description:
                "Download your resume instantly in high-quality PDF format.",
        },
    ];

    return (
        <section className="pt-18 pb-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16 mt-10">
                    <h2 className="text-4xl font-bold mb-4">
                        Why Choose Our Resume Builder?
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Everything you need to create a professional resume that gets
                        noticed by recruiters.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center"
                        >
                            <div className="flex justify-center text-blue-600 mb-5">
                                {feature.icon}
                            </div>

                            <h3 className="text-xl font-semibold mb-3">
                                {feature.title}
                            </h3>

                            <p className="text-gray-600 text-sm">
                                {feature.description}
                            </p>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Features;