import React from "react";

const Section = (props) => {
    if (props.pureText) {
        return (
            <section
                className="xl:px-32 md:px-20 px-8 py-16 flex justify-center items-center flex-col"
                style={{ backgroundColor: props.color }}
            >
                <h1 className={`font-black text-3xl text-${props.textColor} py-4`}>
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
                className="xl:px-32 md:px-20 px-10 py-16 grid md:grid-cols-3 grid-cols-1 gap-4"
                style={{ backgroundColor: props.color }}
            >
                <div className="text flex justify-center items-start flex-col ml-0 md:mr-4 col-span-2">
                    <h1 className={`font-bold text-3xl text-${props.textColor} py-4`}>
                        {props.heading}
                    </h1>
                    <p className={`text-${props.textColor}`}>
                        {props.children}
                    </p>
                </div>
                <div className="image flex justify-center items-center">
                    <img src={props.img} alt="" className="border-white border-4 border-white" />
                </div>
            </section>
        );
    }

    return (
        <section
            id="block-3"
            className="xl:px-32 md:px-20 px-10 py-16 grid md:grid-cols-2 grid-cols-1 gap-4"
            style={{ backgroundColor: props.color }}
        >
            <div className="image flex justify-center items-center">
                <img src={props.img} className="border-white border-4 border-white" alt="" />
            </div>
            <div className="text flex justify-center items-start flex-col ml-0 md:ml-8">
                <h1
                    className={`font-bold text-3xl py-4 text-${props.textColor}`}
                >
                    {props.heading}
                </h1>
                <p className={`text-${props.textColor}`}>{props.children}</p>
            </div>
        </section>
    );
};

export default Section;
