import React from "react";

const Footer = () => {
    return (
        <footer className="p-6 bg-gray-600 border-t-2 border-gray-700">
            <h2 className="text-lg text-gray-100 font-semibold">
                Coding Academy
            </h2>
            <h3 className="text-sm text-gray-300">© 2021</h3>
            <div className="icons text-white text-2xl mt-4">
                <a
                    href="https://www.instagram.com/codingacademymonterrey/"
                    rel="noreferrer"
                    target="_blank"
                    className="pr-4"
                >
                    <i className="fab fa-instagram"></i>
                </a>
                <a
                    href="https://www.facebook.com/CodingAcademyMty/"
                    rel="noreferrer"
                    target="_blank"
                    className="pr-4"
                >
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a
                    href="mailto:info@codingacademy.mx"
                    rel="noreferrer"
                    target="_blank"
                    className="pr-4"
                >
                    <i class="far fa-envelope"></i>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
