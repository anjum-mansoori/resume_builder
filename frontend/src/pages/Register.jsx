import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {

    const navigate = useNavigate()

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(
            `${import.meta.env.VITE_API_URL}/api/auth/register`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            }
        );
        const data = await response.json()
        localStorage.setItem("token", data.token);
        localStorage.setItem("name", data.name);
        toast.success("Account Created Successfully!");
        navigate("/dashboard")
        setName("");
        setEmail("")
        setPassword("")
    };

    return (
        <>
            <Navbar />

            <div className="min-h-[calc(100vh-72px)] flex items-center justify-center bg-gray-100 px-4">

                <div className="bg-white w-full max-w-md p-6 sm:p-8 rounded-xl shadow-lg">

                    <h1 className="text-3xl font-bold text-center mb-6">
                        Create Account
                    </h1>

                    <form
                        className="space-y-4"
                        onSubmit={handleSubmit}
                    >

                        <input
                            type="text"
                            placeholder="Full Name"
                            value={name}
                            onChange={(e) =>
                                setName(e.target.value)
                            }
                            className="w-full border p-3 rounded-lg"
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            className="w-full border p-3 rounded-lg"
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                            className="w-full border p-3 rounded-lg"
                        />

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg"
                        >
                            Register
                        </button>

                    </form>

                </div>

            </div>
        </>
    );
};

export default Register;