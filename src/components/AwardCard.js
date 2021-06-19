import React from 'react'

const AwardCard = (props) => {
    return (
        <div className="h-auto flex flex-col justify-start items-start card p-4 shadow-md hover:shadow-2xl bg-gray-800 rounded-xl transition-all duration-100">
            <div className="image">
                <img src={props.img} alt="" className="rounded-lg object-cover w-full max-h-48" />
            </div>
            <div className="text p-4 bg-gray-700 rounded-lg h-full mt-4 w-full">
                <h1 className="text-3xl font-semibold text-white">
                    { props.title }
                </h1>
                <p className="text-white text-md">
                    { props.children }
                </p>
            </div>
        </div>
    )
}

export default AwardCard
