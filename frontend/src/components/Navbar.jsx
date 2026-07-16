import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Menu, X } from 'lucide-react'
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    const [isOpen, setIsOpen] = useState(false)

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("name")
        navigate("/");
    };

    return (
        <nav className='bg-blue-300 py-4 px-6 min-h-[72px] relative'>

            <div className='flex items-center justify-between'>

                <Link to="/"> <div className="logo text-2xl font-bold cursor-pointer">
                    <span className='text-red-600'>&lt;</span>
                    ResumeBuilder
                    <span className='text-red-600'>/&gt;</span>
                </div>  </Link>

                <ul className="hidden md:flex items-center gap-6 font-bold">

                    <li className="hover:text-blue-700 transition">
                        <Link to="/">Home</Link>
                    </li>

                    <li className="hover:text-blue-700 transition">
                        <Link to="/templates">Templates</Link>
                    </li>
                    <li className="hover:text-blue-700 transition">
                        <Link to="/about">About</Link>
                    </li>
                    {token ? (
                        <>
                            <li className="hover:text-blue-700 transition">
                                <Link to="/dashboard">Dashboard</Link>
                            </li>

                            <button
                                onClick={handleLogout}
                                className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <li className="hover:text-blue-700 transition">
                                <Link to="/login">Login</Link>
                            </li>

                            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
                                <Link to="/register">Sign Up</Link>
                            </button>
                        </>
                    )}

                </ul>

                <button onClick={() => setIsOpen(!isOpen)} className='md:hidden' >
                    {isOpen ? <X size={30} /> : <Menu size={30} />}
                </button>

            </div>

            {
                isOpen && (
                    <div className='md:hidden mt-4 bg-white rounded-lg shadow-lg p-4'>

                        <ul className="flex flex-col gap-4 font-semibold">

                            <li>
                                <Link to="/">Home</Link>
                            </li>

                            <li>
                                <Link to="/templates">Templates</Link>
                            </li>

                            <li>
                                <Link to="/about">About</Link>
                            </li>

                            {token ? (
                                <>
                                    <li>
                                        <Link to="/dashboard">Dashboard</Link>
                                    </li>

                                    <button
                                        onClick={handleLogout}
                                        className="bg-red-600 text-white py-2 rounded-lg"
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <li>
                                        <Link to="/login">Login</Link>
                                    </li>

                                    <button className="bg-blue-600 text-white py-2 rounded-lg">
                                        <Link to="/register">Sign Up</Link>
                                    </button>
                                </>
                            )}
                        </ul>

                    </div>
                )
            }

        </nav >
    )
}

export default Navbar
