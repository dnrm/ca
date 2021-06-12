import React from "react";

const Hero = (props) => {
    return (
        <section
            id="hero"
            className="py-32 h-auto flex justify-center px-12 md:pl-24 bg-cover bg-center bg-blend-darken flex-col text-left"
        >
            <h3 className="text-lg sm:text-2xl md:text-2xl lg:text-2xl text-white font-semibold">
                El mundo está cambiando, ahora todo es digital, es necesario
                tener herramientas para estar al día.
            </h3>
            <h1 className="font-black text-4xl sm:text-6xl md:text-6xl lg:text-8xl text-white">Aprende a Programar</h1>
            <h2 className="text-2xl md:text-4xl lg:text-6xl text-white font-bold mt-2">en Coding Academy</h2>
        </section>
    );
};

export default Hero;
