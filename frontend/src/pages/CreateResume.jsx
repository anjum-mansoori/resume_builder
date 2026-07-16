import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const CreateResume = () => {
    const { template } = useParams();
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        summary: "",
        education: [
            {
                college: "",
                degree: "",
                year: "",
            },
        ],
        experience: [
            {
                company: "",
                role: "",
                duration: "",
                description: "",
            },
        ],
        skills: [""],

        template: template || "classic"
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const addEducation = () => {
        setFormData({
            ...formData,
            education: [
                ...formData.education,
                {
                    college: "",
                    degree: "",
                    year: "",
                },
            ],
        });
    };

    const handleEducationChange = (index, e) => {
        const updatedEducation = [
            ...formData.education,
        ];

        updatedEducation[index][e.target.name] = e.target.value;

        setFormData({
            ...formData,
            education: updatedEducation,
        });

    };

    const removeEducation = (index) => {
        if (formData.education.length === 1) {
            return;
        }
        const updatedEducation =
            formData.education.filter(
                (_, i) => i !== index
            );
        setFormData({
            ...formData,
            education: updatedEducation,
        });
    };

    const addSkill = () => {
        setFormData({
            ...formData,
            skills: [
                ...formData.skills,
                ""
            ]
        });
    };

    const handleSkillChange = (index, e) => {
        const updatedSkills = [
            ...formData.skills
        ];
        updatedSkills[index] = e.target.value;

        setFormData({
            ...formData,
            skills: updatedSkills
        });
    };

    const removeSkill = (index) => {
        if (formData.skills.length === 1) {
            return;
        }
        const updatedSkills =
            formData.skills.filter(
                (_, i) => i !== index
            );
        setFormData({
            ...formData,
            skills: updatedSkills
        });
    };

    const addExperience = () => {
        setFormData({
            ...formData,
            experience: [
                ...formData.experience,
                {
                    company: "",
                    role: "",
                    duration: "",
                    description: "",
                },
            ],

        });

    };

    const handleExperienceChange = (index, e) => {
        const updatedExperience = [
            ...formData.experience,
        ];

        updatedExperience[index][e.target.name] =
            e.target.value;

        setFormData({
            ...formData,
            experience: updatedExperience,
        });

    };

    const removeExperience = (index) => {
        if (formData.experience.length === 1) {
            return
        }
        const updatedExperience = formData.experience.filter((_, i) => i !== index);
        setFormData({
            ...formData,
            experience: updatedExperience
        });
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const token = localStorage.getItem("token");

            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/api/resume/create`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        authorization: token
                    },
                    body: JSON.stringify(formData)
                }
            );

            const data = await response.json();
            toast.success("Resume Saved Successfully!");
            navigate("/dashboard")
            setFormData({
                fullName: "",
                email: "",
                phone: "",
                address: "",
                summary: "",
                education: [
                    {
                        college: "",
                        degree: "",
                        year: "",
                    },
                ],
                experience: [
                    {
                        company: "",
                        role: "",
                        duration: "",
                        description: "",
                    },
                ],
                skills: [""],
            })
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Navbar />

            <div className="max-w-4xl mx-auto p-6">

                <h1 className="text-4xl font-bold mb-8">
                    Create Resume
                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >

                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full border p-3 rounded-lg"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border p-3 rounded-lg"
                    />

                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border p-3 rounded-lg"
                        maxLength={10}
                    />

                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full border p-3 rounded-lg"
                    />

                    <textarea
                        name="summary"
                        placeholder="Professional Summary"
                        value={formData.summary}
                        onChange={handleChange}
                        rows="5"
                        className="w-full border p-3 rounded-lg"
                    />

                    <h2 className="text-2xl font-bold mt-10">
                        Education
                    </h2>

                    {
                        formData.education.map(
                            (edu, index) => (
                                <div
                                    key={index}
                                    className="border p-4 rounded-lg mt-4 relative space-y-4 "  >

                                    {
                                        formData.education.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => removeEducation(index)}
                                                className="absolute top-2 right-3 text-red-500" >
                                                <X size={20} />
                                            </button>
                                        )
                                    }

                                    <input
                                        type="text"
                                        name="college"
                                        placeholder="College"
                                        value={edu.college}
                                        onChange={(e) =>
                                            handleEducationChange(index, e)
                                        }
                                        className="w-full border p-3 rounded-lg " />

                                    <input
                                        type="text"
                                        name="degree"
                                        placeholder="Degree"
                                        value={edu.degree}
                                        onChange={(e) => handleEducationChange(index, e)
                                        }
                                        className=" w-full border  p-3 rounded-lg " />

                                    <input
                                        type="text"
                                        name="year"
                                        placeholder="Year"
                                        value={edu.year}
                                        onChange={(e) =>
                                            handleEducationChange(index, e)
                                        }
                                        className=" w-full border  p-3 rounded-lg  " />
                                </div>
                            )
                        )
                    }

                    <button
                        type="button"
                        onClick={addEducation}
                        className=" bg-green-600 text-white px-5 py-3 rounded-lg mt-4 mr-4">
                        + Add Education
                    </button>

                    <h2 className="text-2xl font-bold mt-10">
                        Experience
                    </h2>

                    {
                        formData.experience.map(
                            (exp, index) => (
                                <div
                                    key={index}
                                    className=" border p-4 rounded-lg mt-4 space-y-4 relative" >

                                    {
                                        formData.experience.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => removeExperience(index)}
                                                className="absolute top-2 right-3 text-red-500" >
                                                <X size={20} />
                                            </button>
                                        )
                                    }

                                    <input
                                        type="text"
                                        name="company"
                                        placeholder="Company"
                                        value={exp.company}
                                        onChange={(e) =>
                                            handleExperienceChange(index, e)}
                                        className="w-full border p-3  rounded-lg " />

                                    <input
                                        type="text"
                                        name="role"
                                        placeholder="Role"
                                        value={exp.role}
                                        onChange={(e) =>
                                            handleExperienceChange(index, e)}
                                        className="w-full border p-3  rounded-lg " />

                                    <input
                                        type="text"
                                        name="duration"
                                        placeholder="Duration"
                                        value={exp.duration}
                                        onChange={(e) =>
                                            handleExperienceChange(index, e)}
                                        className="w-full border p-3  rounded-lg " />

                                    <textarea
                                        name="description"
                                        placeholder="Job Description"
                                        value={exp.description}
                                        onChange={(e) =>
                                            handleExperienceChange(index, e)}
                                        className="w-full border p-3  rounded-lg " />

                                </div>
                            )
                        )
                    }

                    <button
                        type="button"
                        onClick={addExperience}
                        className=" bg-purple-600 text-white px-5 py-3 rounded-lg mt-4 mr-4">
                        + Add Experience
                    </button>

                    <h2 className="text-2xl font-bold mt-10">
                        Skills
                    </h2>

                    {
                        formData.skills.map((skill, index) => (
                            <div
                                key={index}
                                className="flex gap-3 mt-4"
                            >

                                <input
                                    type="text"
                                    placeholder="Skill"
                                    value={skill}
                                    onChange={(e) => handleSkillChange(index, e)}
                                    className="flex-1 border p-3 rounded-lg " />

                                {
                                    formData.skills.length > 1 && (
                                        <button
                                            type="button"
                                            onClick={() => removeSkill(index)}
                                            className="text-red-500" >
                                            <X size={30} />
                                        </button>
                                    )
                                }

                            </div>
                        )
                        )
                    }

                    <div className="mt-4">
                        <button
                            type="button"
                            onClick={addSkill}
                            className=" bg-orange-600 text-white px-5 py-3 rounded-lg " >
                            + Add Skill
                        </button>
                    </div>

                    <div className="mt-10">
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
                        >
                            Save Resume
                        </button>
                    </div>

                </form>

            </div>
        </>
    );
};

export default CreateResume;