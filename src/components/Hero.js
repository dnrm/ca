import React from "react";

const Hero = (props) => {
    return (
        <section
            id="hero"
            className="h-96 flex justify-center items-center bg-cover bg-center"
        >
            <h1 className="font-black text-7xl text-white">{props.text}</h1>
        </section>
    );
};

export default Hero;
