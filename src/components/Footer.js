import React from "react";

const Footer = () => {
    return (
        <footer className="p-6 bg-gray-600 border-t-2 border-gray-700 grid grid-cols-1 md:grid-cols-8 place-items-start" id="contacto">
            <div className="information col-span-2 lg:col-span-1">
                <h1 className="text-xl text-gray-100 font-semibold leading-tight pb-2">
                    CODING ACADEMY
                </h1>
                <h2 className="text-gray-100 font-normal text-md leading-tight">
                    Carr Nacional #4800
                    <br />
                    Col. Valle Alto
                    <br />
                    Monterrey, México
                    <h3 className="text-sm text-gray-100">
                        <a href="tel:+52-(811)-075-9016" className="text-blue-300">+52 (811) 075-9016</a>
                    </h3>
                </h2>
                <h3 className="text-sm text-gray-100">
                    <a href="mailto:info@codingacademy.mx" className="text-blue-300"> info@codingacademy.mx</a></h3>
                <hr className="my-2" />
                <details className="text-white">
                    <summary>Íconos</summary>
                    <p className="text-gray-100 text-sm">
                        <a rel="noreferrer" className="text-blue-300" target="_blank" href="https://icons8.com/icon/mJAzocdevEhF/trophy">Trophy</a> icon by <a className="text-blue-300" rel="noreferrer" target="_blank" href="https://icons8.com">Icons8</a>
                    </p>
                    <p className="text-gray-100 text-sm">
                        <a rel="noreferrer" className="text-blue-300" target="_blank" href="https://icons8.com/icon/ZnW8tegdQkcB/mind-map">Mind Map</a> icon by <a rel="noreferrer" className="text-blue-300" target="_blank" href="https://icons8.com">Icons8</a>
                    </p>
                    <p className="text-gray-100 text-sm">
                        <a rel="noreferrer" className="text-blue-300" target="_blank" href="https://icons8.com/icon/Tx8OlastJ13o/light">Light</a> icon by <a rel="noreferrer" className="text-blue-300" target="_blank" href="https://icons8.com">Icons8</a>
                    </p>
                    <p className="text-gray-100 text-sm">
                        <a rel="noreferrer" className="text-blue-300" target="_blank" href="https://icons8.com/icon/XIaXF0ldSOxD/globe">Globe</a> icon by <a rel="noreferrer" className="text-blue-300" target="_blank" href="https://icons8.com">Icons8</a>
                    </p>
                    <p className="text-gray-100 text-sm">
                        <a rel="noreferrer" className="text-blue-300" target="_blank" href="https://icons8.com/icon/Lcoa9tnTFcSd/compass">Compass</a> icon by <a rel="noreferrer" className="text-blue-300" target="_blank" href="https://icons8.com">Icons8</a>
                    </p>
                    <p className="text-gray-100 text-sm">
                        <a rel="noreferrer" className="text-blue-300" target="_blank" href="https://icons8.com/icon/YDB2BiId0wKq/army-star">Army Star</a> icon by <a rel="noreferrer" className="text-blue-300" target="_blank" href="https://icons8.com">Icons8</a>
                    </p>
                    <p className="text-gray-100 text-sm">
                        <a rel="noreferrer" className="text-blue-300" target="_blank" href="https://icons8.com/icon/42855/star">Star</a> icon by <a rel="noreferrer" className="text-blue-300" target="_blank" href="https://icons8.com">Icons8</a>
                    </p>
                </details>
                <details className="text-white">
                    <summary>Avíso de Privacidad</summary>
                    <p>
                        cookies de chocolate y datos del usuario sabor mango (placeholder)
                    </p>
                </details>
            </div>
            <div className="icons text-white text-2xl flex-col col-span-6">
                <h1 className="text-left font-semibold">Contáctanos</h1>
                <div className="grid gap-0 grid-rows-2 col-span-2 h-full">
                    <div className="row-1">
                        <a
                            href="mailto:info@codingacademy.mx"
                            rel="noreferrer"
                            target="_blank"
                            className="pr-4"
                        >
                            <i className="far fa-envelope text-4xl"></i>
                        </a>
                        <a
                            href="https://www.facebook.com/CodingAcademyMty/"
                            rel="noreferrer"
                            target="_blank"
                            className="pr-4"
                        >
                            <i className="fab fa-facebook-f text-4xl"></i>
                        </a>
                        <a
                            href="https://api.whatsapp.com/send?phone=528121285867&text="
                            rel="noreferrer"
                            target="_blank"
                            className="pr-4"
                        >
                            <i className="fab fa-whatsapp text-4xl"></i>
                        </a>
                    </div>
                    <div className="row-2">
                        <a
                            href="https://www.instagram.com/codingacademymonterrey/"
                            rel="noreferrer"
                            target="_blank"
                            className="pr-4"
                        >
                            <i className="fab fa-instagram text-4xl"></i>
                        </a>
                        <a
                            href="https://twitter.com/CodingMonterrey"
                            rel="noreferrer"
                            target="_blank"
                            className="pr-4"
                        >
                            <i className="fab fa-twitter text-4xl"></i>
                        </a>
                        <a
                            href="https://www.tiktok.com/@codingacademymty"
                            rel="noreferrer"
                            target="_blank"
                            className="pr-4"
                        >
                            <i className="fab fa-tiktok text-4xl"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
