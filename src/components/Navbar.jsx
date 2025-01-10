import { NavLink, useLocation } from "react-router-dom";
import { Dropdown } from "antd";
import {
    UserOutlined,
    FileDoneOutlined,
    CloseSquareOutlined,
    StarOutlined,
    LogoutOutlined,
} from "@ant-design/icons";
import { useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const handleMenuClick = (e) => {
        console.log("Menu item clicked:", e.key);
    };

    const items = [
        { label: <NavLink to={"/my-account"}>Manage My Account</NavLink>, key: "1", icon: <UserOutlined /> },
        { label: "My Order", key: "2", icon: <FileDoneOutlined /> },
        { label: "My Cancellations", key: "3", icon: <CloseSquareOutlined /> },
        { label: "My Reviews", key: "4", icon: <StarOutlined /> },
        { label: <NavLink to={"/signUp"}>Logout</NavLink>, key: "5", icon: <LogoutOutlined /> },
    ];

    const menuProps = {
        items,
        onClick: handleMenuClick,
    };

    return (
        <div className="fixed top-0 left-0 w-full bg-nav-bg z-50 shadow-md">
            {/* Topbar */}
            <div className="max-w-[1440px] mx-auto px-5">
                <div className="flex justify-between items-center mt-4 gap-10 w-full">
                    <NavLink to="/" className="text-2xl font-bold text-gray-800 hidden sm:block">
                        Exclusive
                    </NavLink>

                    <div className="hidden md:flex gap-12">
                        <NavLink to="/" className={`font-mono text-base transition-all hover:underline ${
                            location.pathname === "/" ? "font-bold text-red-500" : ""
                        }`}>
                            Home
                        </NavLink>
                        <NavLink to="/contact" className={`font-mono text-base transition-all hover:underline ${
                            location.pathname === "/contact" ? "font-bold text-red-500" : ""
                        }`}>
                            Contact
                        </NavLink>
                        <NavLink to="/about" className={`font-mono text-base transition-all hover:underline ${
                            location.pathname === "/about" ? "font-bold text-red-500" : ""
                        }`}>
                            About
                        </NavLink>
                        <NavLink to="/signUp" className={`font-mono text-base transition-all hover:underline ${
                            location.pathname === "/signUp" ? "font-bold text-red-500" : ""
                        }`}>
                            SignUp
                        </NavLink>


                    </div>

                    {/* Search Bar and Icons */}
                    <div className="flex justify-between w-full md:w-auto items-center gap-4">
                        <div className="bg-gray-100 flex items-center px-3 py-2 rounded-md w-full md:w-auto">
                            <input
                                className="h-full w-full bg-transparent outline-none text-[12px]"
                                type="text"
                                placeholder="What are you looking for?"
                            />
                            <i className="fa-solid fa-magnifying-glass text-lg text-gray-600 cursor-pointer"></i>
                        </div>

                        <div className="flex items-center gap-4">
                            <NavLink to="/wishlist">
                                <i className="fa-regular fa-heart text-2xl text-gray-700 cursor-pointer hover:text-green-500 transition"></i>
                            </NavLink>
                            <NavLink to="/cart">
                                <i className="fa-solid fa-cart-shopping text-2xl text-gray-700 cursor-pointer hover:text-green-500 transition"></i>
                            </NavLink>
                            <Dropdown
                                menu={menuProps}
                                trigger={["hover", "click"]}
                                placement="bottomRight"
                            >
                                <div className="cursor-pointer flex items-center justify-center w-8 h-8 bg-red-500 rounded-full hover:bg-red-600 transition-all">
                                    <UserOutlined style={{ fontSize: "20px", color: "white" }} />
                                </div>
                            </Dropdown>

                            {/* Mobile Menu Icon */}
                            <i
                                className={`fa-solid ${
                                    menuOpen ? "fa-times" : "fa-bars"
                                } block lg:hidden text-xl text-gray-800 cursor-pointer`}
                                onClick={() => setMenuOpen(!menuOpen)}
                            ></i>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-30"
                    onClick={() => setMenuOpen(false)}
                >
                    <div
                        className="bg-white w-[75%] max-w-[300px] h-full p-6 flex flex-col gap-6 shadow-lg relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h3 className="text-xl font-bold text-gray-800">Menu</h3>
                        <NavLink to="/" className={`font-mono text-base transition-all hover:underline ${
                            location.pathname === "/" ? "font-bold text-red-500" : ""
                        }`}>
                            Home
                        </NavLink>
                        <NavLink to="/contact" className={`font-mono text-base transition-all hover:underline ${
                            location.pathname === "/contact" ? "font-bold text-red-500" : ""
                        }`}>
                            Contact
                        </NavLink>
                        <NavLink to="/about" className={`font-mono text-base transition-all hover:underline ${
                            location.pathname === "/about" ? "font-bold text-red-500" : ""
                        }`}>
                            About
                        </NavLink>
                        <NavLink to="/signUp" className={`font-mono text-base transition-all hover:underline ${
                            location.pathname === "/signUp" ? "font-bold text-red-500" : ""
                        }`}>
                            SignUp
                        </NavLink>


                    </div>
                </div>
            )}

            <hr className="mt-4" />
        </div>
    );
}

export default Navbar;
