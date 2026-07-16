const ClassicTemplate = ({ resume }) => {
    return (
        <div className=" bg-white w-[794px] min-h-[1123px] mx-auto p-10 shadow-2xl ">

            <div className="text-center border-b-4 border-blue-600 pb-6">

                <h1 className="text-4xl font-bold text-gray-900">
                    {resume.fullName}
                </h1>

                <div className="mt-3 text-gray-600 flex flex-wrap justify-center gap-3">

                    <span>{resume.email}</span>

                    <span>|</span>

                    <span>{resume.phone}</span>

                    <span>|</span>

                    <span>{resume.address}</span>

                </div>

            </div>

            <section className="mt-8">

                <h2 className="text-2xl font-bold text-blue-700 border-b-2 border-blue-600 pb-2">
                    Professional Summary
                </h2>

                <p className="mt-4 text-gray-700 leading-relaxed">
                    {resume.summary}
                </p>

            </section>

            <section className="mt-8">

                <h2 className="text-2xl font-bold text-blue-700 border-b-2 border-blue-600 pb-2">
                    Education
                </h2>

                {resume.education?.map((edu, index) => (

                    <div
                        key={index}
                        className="mt-5"
                    >

                        <h3 className="text-lg font-semibold">
                            {edu.degree}
                        </h3>

                        <p className="text-gray-700">
                            {edu.college}
                        </p>

                        <p className="text-gray-500">
                            {edu.year}
                        </p>

                    </div>

                ))}

            </section>

            <section className="mt-8">

                <h2 className="text-2xl font-bold text-blue-700 border-b-2 border-blue-600 pb-2">
                    Experience
                </h2>

                {resume.experience?.map((exp, index) => (

                    <div
                        key={index}
                        className="mt-5"
                    >

                        <h3 className="text-lg font-semibold">
                            {exp.role}
                        </h3>

                        <p className="font-medium text-gray-700">
                            {exp.company}
                        </p>

                        <p className="text-gray-500 text-sm">
                            {exp.duration}
                        </p>

                        <p className="mt-2 text-gray-700 leading-relaxed">
                            {exp.description}
                        </p>

                    </div>

                ))}

            </section>

            {/* Skills */}

            <section className="mt-8">

                <h2 className="text-2xl font-bold text-blue-700 border-b-2 border-blue-600 pb-2">
                    Skills
                </h2>

                <div className="flex flex-wrap gap-3 mt-5">

                    {resume.skills?.map((skill, index) => (

                        <span
                            key={index}
                            className="
                                border
                                border-blue-600
                                text-blue-700
                                px-4
                                py-2
                                rounded-md
                                font-medium
                            "
                        >
                            {skill}
                        </span>

                    ))}

                </div>

            </section>

        </div>
    );
};

export default ClassicTemplate;