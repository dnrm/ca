import React from "react";

const Section = (props) => {
    if (props.pureText) {
        return (
            <section
                class="xl:px-72 md:px-20 px-10 py-16 flex justify-center items-center flex-col"
                style={{ backgroundColor: props.color }}
            >
                <h1 class="font-black text-3xl text-black py-4">
                    {props.heading}
                </h1>
                <p>{props.children}</p>
            </section>
        );
    }

    return (
        <section
            id="block-3"
            class="xl:px-72 md:px-20 px-10 py-16 grid md:grid-cols-2 grid-cols-1"
            style={{ backgroundColor: props.color }}
        >
            <div class="image flex justify-center items-center">
                <img src={props.img} alt="" />
            </div>
            <div class="text flex justify-center items-start flex-col ml-4">
                <h1 class="font-black text-3xl text-black py-4">
                    {props.heading}
                </h1>
                <p class="text-black">{props.children}</p>
            </div>
        </section>
    );
};

export default Section;
