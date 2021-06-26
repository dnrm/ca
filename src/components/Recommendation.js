import React from 'react'

const Recommendation = ({ name, children, score }) => {
    return (
        <div className="w-full bg-gray-100 p-4 rounded-lg">
            <div className="heading flex justify-start items-center">
                <h1 className="text-2xl font-semibold mr-4">{name}</h1>
                <div className="flex justify-start items-center">
                    {Array.from({ length: score }, (_, i) => {
                        return <img src="/images/review-star.png" className="w-6 h-6 mr-1" alt="" />
                    })}
                </div>
            </div>
            <p>
                {children}
            </p>
        </div>
    )
}

export default Recommendation
