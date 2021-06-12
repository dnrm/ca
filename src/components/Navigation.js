import React, { useState } from "react";

const Navigation = () => {
    const [status, setStatus] = useState(false);

    const toggleNav = () => {
        setStatus(!status);
        console.log(status);
    };

    return (
        <header className="fixed flex flex-wrap flex-row justify-between items-center lg:space-x-4 bg-white py-3 px-3 pr-6 w-full shadow-lg">
            <a href="/" className="block">
                <img
                    className="h-16"
                    src="https://codingacademy.mx/admin/images/coding_academy_bn.jpg"
                    alt="Themes.dev Logo"
                    title="Themes.dev Logo"
                />
            </a>
            <button
                className="inline-block lg:hidden w-8 h-8 bg-gray-200 text-gray-600 p-1"
                onClick={toggleNav}
            >
                <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    ></path>
                </svg>
            </button>
            <nav
                className={`flex items-start md:items-center mt-4 lg:mt-0 absolute lg:relative top-16 left-0 lg:top-0 z-20 lg:flex flex-col lg:flex-row lg:space-x-6 font-semibold w-full lg:w-auto bg-white shadow-md rounded-lg lg:rounded-none lg:shadow-none lg:bg-transparent p-6 pt-0 lg:p-0 ${
                    status === true ? "flex" : null
                } ${!status === true ? "hidden" : null}`}
            >
                <a
                    href="/"
                    className="block py-1 text-gray-600 hover:underline text-sm"
                >
                    Inicio
                </a>
                <a
                    href="#about-us"
                    className="block py-1 text-gray-600 hover:underline text-sm"
                >
                    Nosotros
                </a>
                <a
                    href="#services"
                    className="block py-1 text-gray-600 hover:underline text-sm"
                >
                    Reconocimientos
                </a>
                <a
                    href="#blog"
                    className="block py-1 text-gray-600 hover:underline text-sm"
                >
                    Temas
                </a>
                <a
                    href="#contact"
                    className="block py-1 text-gray-600 hover:underline text-sm"
                >
                    Beneficios
                </a>
                <a
                    href="#contact"
                    className="block py-1 text-gray-600 hover:underline text-sm"
                >
                    Contáctanos
                </a>
                <a className="bg-yellow-300 text-black font-semibold p-4 rounded-lg shadow-md text-sm" href="https://www.facebook.com/CodingAcademyMty/">
                    Agenda una clase prueba
                </a>
            </nav>
        </header>
    );
};

export default Navigation;
