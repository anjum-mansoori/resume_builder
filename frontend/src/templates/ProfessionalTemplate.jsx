const ProfessionalTemplate = ({ resume }) => {
    return (
        <div className=" bg-white w-[794px] min-h-[1123px] mx-auto shadow-xl" >

            <div className="bg-blue-700 text-white p-8">

                <h1 className="text-4xl font-bold">
                    {resume.fullName}
                </h1>

                <p className="mt-2">
                    {resume.email}
                </p>

                <p>
                    {resume.phone}
                </p>

            </div>

            <div className="p-8">

                <h2 className="text-2xl font-bold text-blue-700">
                    Summary
                </h2>

                <p className="mt-3">
                    {resume.summary}
                </p>

                <h2 className="text-2xl font-bold text-blue-700 mt-8">
                    Education
                </h2>

                {resume.education?.map((edu, index) => (
                    <div key={index} className="mt-4">
                        <h3 className="font-semibold">
                            {edu.degree}
                        </h3>

                        <p>{edu.college}</p>

                        <p>{edu.year}</p>
                    </div>
                ))}

                <div className="mt-8">

                    <h2 className="text-2xl font-bold border-b pb-2">
                        Experience
                    </h2>

                    {resume.experience?.map((exp, index) => (
                        <div
                            key={index}
                            className="mt-4"
                        >
                            <h3 className="font-semibold text-lg">
                                {exp.role}
                            </h3>

                            <p>
                                {exp.company}
                            </p>

                            <p className="text-gray-500">
                                {exp.duration}
                            </p>

                            <p className="mt-2">
                                {exp.description}
                            </p>
                        </div>
                    ))}

                </div>

                <h2 className="text-2xl font-bold text-blue-700 mt-8">
                    Skills
                </h2>

                <div className="flex flex-wrap gap-3 mt-4">
                    {resume.skills?.map((skill, index) => (
                        <span
                            key={index}
                            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
                        >
                            {skill}
                        </span>
                    ))}
                </div>

            </div>

        </div>
    );
};

export default ProfessionalTemplate;