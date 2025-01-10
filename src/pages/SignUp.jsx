import { NavLink } from "react-router-dom";
import basket from '../assets/images/registr.png';
import { Button, Input } from "antd";
import { useState } from "react";
import { GooglePlusOutlined } from "@ant-design/icons";

export default function SignUp() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        if (!name || !email || !password) {
            alert("All fields are required!");
            return;
        }
        console.log({ name, email, password });
        alert("Account created successfully!");
    };

    return (
        <div className="max-h-[100vh] h-[100vh] flex flex-col lg:flex-row gap-10 lg:gap-[130px] items-center max-w-[1920px] mx-auto">
            <img
                src={basket}
                className=" lg:max-w-[805px] object-cover max-h-[100vh]"
                alt="Sign up illustration"
            />
            <div className="w-full max-w-[400px] px-4 lg:px-0">
                <h2 className="text-[24px] lg:text-[36px] font-semibold text-center lg:text-left">
                    Create an account
                </h2>
                <p className="mt-4 lg:mt-3 mb-6 lg:mb-8 text-center lg:text-left">
                    Enter your details below
                </p>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="outline-none border-b border-slate-300 block w-full mb-6"
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="outline-none border-b border-slate-300 block w-full mb-6"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="outline-none border-b border-slate-300 block w-full mb-6"
                />
                <Button
                    className="text-white bg-red-500 py-4 w-full mt-6"
                    onClick={handleSubmit}
                >
                    Create Account
                </Button>
                <Button className="w-full mt-4 flex items-center"><GooglePlusOutlined style={{color:"orange", fontSize:"20px"}}/> <p>Sign up with Google
                </p></Button>
                <p className="mt-5 text-center lg:text-left">
                    Already have an account?{" "}
                    <NavLink
                        to="/login"
                        className="hover:border-b border-blue-500 text-blue-500 font-semibold ml-2"
                    >
                        Log in
                    </NavLink>
                </p>
                <NavLink
                    className="flex justify-center items-center my-4 text-orange-400 font-semibold border py-2 hover:bg-orange-400 hover:text-white rounded-lg transition-all"
                    to="/"
                >
                    Return to Home
                </NavLink>
            </div>
        </div>
    );
}
