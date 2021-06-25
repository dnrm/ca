import React from 'react'

const Benefit = (props) => {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <img className="w-20 h-20" src={props.img} alt="" />
            <h1 className="text-xl font-semibold tracking-tighter pt-4 text-center">{props.children}</h1>
        </div>
    )
}

export default Benefit
