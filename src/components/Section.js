import React from "react";

const Section = (props) => {
    if (props.pureText) {
        return (
            <section
                className="xl:px-72 md:px-20 px-10 py-16 flex justify-center items-center flex-col"
                style={{ backgroundColor: props.color }}
            >
                <h1 className="font-black text-3xl text-black py-4">
                    {props.heading}
                </h1>
                <p>{props.children}</p>
            </section>
        );
    }

    if (props.right) {
        return (
            <section
                id="block-2"
                class="xl:px-72 md:px-20 px-10 py-16 grid md:grid-cols-2 grid-cols-1"
                style={{ backgroundColor: props.color }}
            >
                <div class="text flex justify-center items-start flex-col ml-4">
                    <h1 class={`font-black text-3xl text-${props.textColor} py-4`}>
                        {props.heading}
                    </h1>
                    <p class={`text-${props.textColor} mr-16`}>
                        {props.children}
                    </p>
                </div>
                <div class="image flex justify-center items-center mt-4">
                    <img src={props.img} alt="Teacher illustration" />
                </div>
            </section>
        );
    }

    return (
        <section
            id="block-3"
            className="xl:px-72 md:px-20 px-10 py-16 grid md:grid-cols-2 grid-cols-1"
            style={{ backgroundColor: props.color }}
        >
            <div className="image flex justify-center items-center">
                <img src={props.img} alt="" />
            </div>
            <div className="text flex justify-center items-start flex-col ml-4">
                <h1
                    className={`font-black text-3xl py-4 text-${props.textColor}`}
                >
                    {props.heading}
                </h1>
                <p className={`text-${props.textColor}`}>{props.children}</p>
            </div>
        </section>
    );
};

export default Section;
