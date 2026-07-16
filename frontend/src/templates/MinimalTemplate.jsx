const MinimalTemplate = ({ resume }) => {
    return (
        <div className=" bg-white w-[794px] min-h-[1123px]  mx-auto p-10 shadow-lg" >

            <h1 className="text-4xl font-bold">
                {resume.fullName}
            </h1>

            <p className="mt-2 text-gray-600">
                {resume.email} | {resume.phone}
            </p>

            <p className="text-gray-600">
                {resume.address}
            </p>

            <div className="mt-8">
                <h2 className="text-2xl font-bold border-b pb-2">
                    Summary
                </h2>

                <p className="mt-3">
                    {resume.summary}
                </p>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-bold border-b pb-2">
                    Education
                </h2>

                {resume.education?.map((edu, index) => (
                    <div key={index} className="mt-4">
                        <h3 className="font-semibold">
                            {edu.degree}
                        </h3>

                        <p>{edu.college}</p>

                        <p className="text-gray-500">
                            {edu.year}
                        </p>
                    </div>
                ))}
            </div>

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

            <div className="mt-8">
                <h2 className="text-2xl font-bold border-b pb-2">
                    Skills
                </h2>

                <div className="flex flex-wrap gap-3 mt-4">
                    {resume.skills?.map((skill, index) => (
                        <span
                            key={index}
                            className="bg-gray-200 px-3 py-1 rounded-full"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default MinimalTemplate;

