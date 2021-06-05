import React, { useState } from "react";

const Navigation = () => {
    const [status, setStatus] = useState(false);

    const toggleNav = () => {
        setStatus(!status);
        console.log(status);
    };

    return (
        <header className="flex flex-wrap flex-row justify-between items-center md:space-x-4 bg-white py-3 px-3 relative">
            <a href="/" className="block">
                <img
                    className="h-16"
                    src="https://codingacademy.mx/admin/images/coding_academy_bn.jpg"
                    alt="Themes.dev Logo"
                    title="Themes.dev Logo"
                />
            </a>
            <button
                className="inline-block md:hidden w-8 h-8 bg-gray-200 text-gray-600 p-1"
                onClick={toggleNav}
            >
                <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
            </button>
            <nav
                className={`mt-4 md:mt-0 absolute md:relative top-16 left-0 md:top-0 z-20 md:flex flex-col md:flex-row md:space-x-6 font-semibold w-full md:w-auto bg-white shadow-md rounded-lg md:rounded-none md:shadow-none md:bg-transparent p-6 pt-0 md:p-0 ${
                    status === true ? "flex" : null
                } ${!status === true ? "hidden" : null}`}
            >
                <a
                    href="#"
                    className="block py-1 text-gray-600 hover:underline"
                >
                    {status ? "true" : "false"}
                </a>
                <a
                    href="#"
                    className="block py-1 text-gray-600 hover:underline"
                >
                    About us
                </a>
                <a
                    href="#"
                    className="block py-1 text-gray-600 hover:underline"
                >
                    Services
                </a>
                <a
                    href="#"
                    className="block py-1 text-gray-600 hover:underline"
                >
                    Blog
                </a>
                <a
                    href="#"
                    className="block py-1 text-gray-600 hover:underline"
                >
                    Contact
                </a>
            </nav>
        </header>
    );
};

export default Navigation;
