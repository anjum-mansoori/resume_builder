const ModernTemplate = ({ resume }) => {
    return (
        <div className=" bg-white w-[794px] min-h-[1123px] mx-auto  shadow-2xl overflow-hidden" >

            <div className="grid md:grid-cols-3">

                <div className="bg-gray-900 text-white p-5 sm:p-8">

                    <h1 className="text-2xl sm:text-3xl font-bold leading-tight break-words">
                        {resume.fullName}
                    </h1>

                    {/* Contact */}

                    <div className="mt-8">

                        <h2 className="text-lg font-semibold border-b border-gray-600 pb-2">
                            Contact
                        </h2>

                        <p className="mt-4 break-all text-sm sm:text-base">
                            {resume.email}
                        </p>

                        <p className="mt-2 text-sm sm:text-base">
                            {resume.phone}
                        </p>

                        <p className="mt-2 text-sm sm:text-base break-words">
                            {resume.address}
                        </p>

                    </div>

                    {/* Skills */}

                    <div className="mt-10">

                        <h2 className="text-lg font-semibold border-b border-gray-600 pb-2">
                            Skills
                        </h2>

                        <div className="flex flex-wrap gap-2 mt-4">

                            {resume.skills?.map((skill, index) => (
                                <span
                                    key={index}
                                    className="
                                        bg-gray-700
                                        px-3
                                        py-1
                                        rounded-full
                                        text-xs
                                        sm:text-sm
                                        break-words
                                    "
                                >
                                    {skill}
                                </span>
                            ))}

                        </div>

                    </div>

                </div>

                {/* Right Content */}

                <div className="md:col-span-2 p-5 sm:p-8">

                    {/* Summary */}

                    <div>

                        <h2 className="text-xl sm:text-2xl font-bold text-blue-600 border-b pb-2">
                            Professional Summary
                        </h2>

                        <p className="mt-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                            {resume.summary}
                        </p>

                    </div>

                    {/* Experience */}

                    <div className="mt-10">

                        <h2 className="text-xl sm:text-2xl font-bold text-blue-600 border-b pb-2">
                            Experience
                        </h2>

                        {resume.experience?.map((exp, index) => (

                            <div
                                key={index}
                                className="mt-5"
                            >

                                <h3 className="text-base sm:text-lg font-semibold break-words">
                                    {exp.role}
                                </h3>

                                <p className="text-blue-600 font-medium break-words">
                                    {exp.company}
                                </p>

                                <p className="text-gray-500 text-sm">
                                    {exp.duration}
                                </p>

                                <p className="mt-2 text-gray-700 text-sm sm:text-base break-words">
                                    {exp.description}
                                </p>

                            </div>

                        ))}

                    </div>

                    {/* Education */}

                    <div className="mt-10">

                        <h2 className="text-xl sm:text-2xl font-bold text-blue-600 border-b pb-2">
                            Education
                        </h2>

                        {resume.education?.map((edu, index) => (

                            <div
                                key={index}
                                className="mt-5"
                            >

                                <h3 className="font-semibold text-base sm:text-lg break-words">
                                    {edu.degree}
                                </h3>

                                <p className="break-words">
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

        </div>
    );
};

export default ModernTemplate;