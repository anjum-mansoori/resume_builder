import React from "react";
import DashboardNavbar from "../components/DashboardNavbar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Dashboard = () => {
    const [resumes, setResumes] = useState([]);
    let userName = localStorage.getItem("name");

    useEffect(() => {
        const fetchResumes = async () => {
            const token = localStorage.getItem("token");
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/api/resume`,
                {
                    headers: {
                        authorization: token
                    }
                }
            );

            const data = await response.json();
            setResumes(data);
        };

        fetchResumes();

    }, []);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this resume?"
        );

        if (!confirmDelete) return;
        try {
            const token = localStorage.getItem("token");
            await fetch(
                `${import.meta.env.VITE_API_URL}/api/resume/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        authorization: token
                    }
                }
            );
            toast.success("Resume Deleted!");
            setResumes(resumes.filter(
                (resume) => resume._id !== id
            ));

        } catch (error) {
            console.log(error);
        }

    };

    return (
        <>
            <DashboardNavbar />

            <div className="min-h-[calc(100vh-72px)] bg-gray-100 p-4 sm:p-6">

                <div className="max-w-6xl mx-auto mt-4">

                    <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                        Welcome {userName}👋
                    </h1>

                    <p className="text-gray-600 mb-8 text-sm sm:text-base">
                        Manage your resumes here.
                    </p>

                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">

                        <h2 className="text-xl sm:text-2xl font-semibold">
                            My Resumes
                        </h2>

                        <Link
                            to="/createResume"
                            className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition text-center"
                        >
                            + Create New Resume
                        </Link>

                    </div>

                    {resumes.length > 0 ? (

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                            {resumes.map((resume) => (

                                <div
                                    key={resume._id}
                                    className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition"
                                >

                                    <h3 className="text-lg sm:text-xl font-bold mb-4 break-words">
                                        {resume.summary}
                                    </h3>

                                    <p className="text-sm text-blue-600 mb-4">
                                        Template: {resume.template}
                                    </p>

                                    <div className="flex flex-wrap gap-3">

                                        <Link to={`/previewResume/${resume._id}`}  >
                                            <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
                                                Preview
                                            </button>
                                        </Link>

                                        <Link to={`/edit-resume/${resume._id}`}>
                                            <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg">
                                                Edit
                                            </button>
                                        </Link>

                                        <button
                                            onClick={() => handleDelete(resume._id)}
                                            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition" >
                                            Delete
                                        </button>

                                    </div>

                                </div>

                            ))}

                        </div>

                    ) : (

                        <div className="bg-white rounded-xl p-6 sm:p-8 text-center shadow-md">

                            <h3 className="text-xl sm:text-2xl font-semibold mb-3">
                                No Resumes Found
                            </h3>

                            <p className="text-gray-500 mb-5 text-sm sm:text-base">
                                Create your first resume now.
                            </p>

                            <Link
                                to="/createResume"
                                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                            >
                                Create Resume
                            </Link>

                        </div>

                    )}

                </div>

            </div>
        </>
    );
};

export default Dashboard;