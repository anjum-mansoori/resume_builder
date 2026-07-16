const DeveloperTemplate = ({ resume }) => {
    return (
        <div
            className="
        bg-gray-950
        text-white
        w-[794px]
        min-h-[1123px]
        mx-auto
        shadow-2xl
        overflow-hidden
    "
        >
            <div className="bg-gray-900 p-10 border-b border-gray-700">

                <h1 className="text-4xl font-bold text-green-400">
                    {resume.fullName}
                </h1>

                <p className="mt-3 text-gray-300">
                    Full Stack Developer
                </p>

                <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-400">

                    <span>{resume.email}</span>

                    <span>{resume.phone}</span>

                    <span>{resume.address}</span>

                </div>

            </div>

            {/* Body */}

            <div className="p-10">

                {/* About */}

                <div>

                    <h2 className="text-green-400 text-xl font-bold">
                        ABOUT ME
                    </h2>

                    <div className="h-[2px] bg-green-400 mt-2 mb-4"></div>

                    <p className="text-gray-300 leading-relaxed">
                        {resume.summary}
                    </p>

                </div>

                {/* Tech Stack */}

                <div className="mt-10">

                    <h2 className="text-green-400 text-xl font-bold">
                        TECH STACK
                    </h2>

                    <div className="h-[2px] bg-green-400 mt-2 mb-4"></div>

                    <div className="flex flex-wrap gap-3">

                        {resume.skills?.map((skill, index) => (

                            <span
                                key={index}
                                className="
                                    bg-gray-800
                                    border
                                    border-green-400
                                    px-4
                                    py-2
                                    rounded-lg
                                "
                            >
                                {skill}
                            </span>

                        ))}

                    </div>

                </div>

                {/* Experience */}

                <div className="mt-10">

                    <h2 className="text-green-400 text-xl font-bold">
                        EXPERIENCE
                    </h2>

                    <div className="h-[2px] bg-green-400 mt-2 mb-4"></div>

                    {resume.experience?.map((exp, index) => (

                        <div
                            key={index}
                            className="
                                bg-gray-900
                                p-5
                                rounded-lg
                                mb-4
                            "
                        >

                            <h3 className="text-lg font-bold">
                                {exp.role}
                            </h3>

                            <p className="text-green-400">
                                {exp.company}
                            </p>

                            <p className="text-gray-500 text-sm">
                                {exp.duration}
                            </p>

                            <p className="mt-3 text-gray-300">
                                {exp.description}
                            </p>

                        </div>

                    ))}

                </div>

                {/* Education */}

                <div className="mt-10">

                    <h2 className="text-green-400 text-xl font-bold">
                        EDUCATION
                    </h2>

                    <div className="h-[2px] bg-green-400 mt-2 mb-4"></div>

                    {resume.education?.map((edu, index) => (

                        <div
                            key={index}
                            className="
                                bg-gray-900
                                p-5
                                rounded-lg
                                mb-4
                            "
                        >

                            <h3 className="font-bold text-lg">
                                {edu.degree}
                            </h3>

                            <p className="text-gray-300">
                                {edu.college}
                            </p>

                            <p className="text-gray-500">
                                {edu.year}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </div>
    );
};

export default DeveloperTemplate;