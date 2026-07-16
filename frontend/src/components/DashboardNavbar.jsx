import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

const DashboardNavbar = () => {
    const navigate = useNavigate();
    const userName = localStorage.getItem("name");
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        toast.success("Logged Out!");
        navigate("/")
    };

    return (

        <nav className="bg-blue-300 shadow-md px-4 sm:px-6 py-4">

            <div className="max-w-7xl mx-auto flex items-center justify-between">

                <Link
                    to="/"
                    className="text-xl sm:text-2xl font-bold"
                >
                    <span className="text-red-600">
                        &lt;
                    </span>
                    ResumeBuilder
                    <span className="text-red-600">
                        /&gt;
                    </span>
                </Link>

                <ul className="hidden md:flex items-center gap-6 font-semibold">

                    <Link to="/dashboard">
                        <li>Dashboard</li>
                    </Link>

                    <Link to="/createResume">
                        <li>Create Resume</li>
                    </Link>

                    <Link to="/templates">
                        <li>Templates</li>
                    </Link>

                </ul>

                <div className="hidden md:flex items-center gap-4">
                    <p className="font-semibold">
                        Welcome, {userName}
                    </p>

                    <button
                        onClick={handleLogout}
                        className="bg-red-600 text-white px-4 py-2 rounded-lg"
                    >
                        Logout
                    </button>
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden"
                >
                    {isOpen ? (
                        <X size={28} />
                    ) : (
                        <Menu size={28} />
                    )}
                </button>

            </div>

            {isOpen && (

                <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">

                    <ul className="flex flex-col gap-4 font-semibold">

                        <Link to="/dashboard">
                            <li>Dashboard</li>
                        </Link>

                        <Link to="/createResume">
                            <li>Create Resume</li>
                        </Link>

                        <Link to="/templates">
                            <li>Templates</li>
                        </Link>

                        <hr />

                        <p>
                            Welcome, {userName}
                        </p>

                        <button
                            onClick={handleLogout}
                            className="bg-red-600 text-white py-2 rounded-lg"
                        >
                            Logout
                        </button>

                    </ul>

                </div>

            )}

        </nav>

    );
};

export default DashboardNavbar;