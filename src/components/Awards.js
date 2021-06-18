import React from 'react'

const Awards = (props) => {
    return (
        <section id="reconocimientos" className="flex flex-col justify-center items-center border-t-2">
            <div className="awards-section bg-topo">
                <div className="heading w-full">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center py-8 text-gray-800">Premios y Reconocimientos</h1>
                </div>
                <div className="award-cards grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:px-32 md:px-20 px-8 pb-12">
                    <div className="h-auto flex flex-col justify-start items-start card p-4 shadow-md hover:shadow-2xl bg-gray-700 rounded-xl transition-all duration-100">
                        <div className="image">
                            <img src={`https://source.unsplash.com/random?wallpaper&id=${Math.random()}`} alt="" className="rounded-lg object-cover w-full max-h-48" />
                        </div>
                        <div className="text p-4 bg-gray-600 rounded-lg h-full mt-4">
                            <h1 className="text-3xl font-semibold text-white">
                                Mejor Mentor
                            </h1>
                            <p className="text-white">
                                MakeX Global Championship 2018
                                Competencia de Automatización de Robots
                                <br />
                                CHINA
                            </p>
                        </div>
                    </div>
                    <div className="h-auto flex flex-col justify-start items-start card p-4 shadow-md hover:shadow-2xl bg-gray-700 rounded-xl transition-all duration-100">
                        <div className="image">
                            <img src={`https://source.unsplash.com/random?wallpaper&id=${Math.random()}`} alt="" className="rounded-lg object-cover w-full max-h-48" />
                        </div>
                        <div className="text p-4 bg-gray-600 rounded-lg h-full mt-4">
                            <h1 className="text-3xl font-semibold text-white">
                                2do Lugar Global (sin Asia)
                            </h1>
                            <p className="text-white">
                                MakeX Global Championship 2018
                                Primaria
                                Competencia de Automatización de Robots
                                <br />
                                CHINA
                            </p>
                        </div>
                    </div>
                    <div className="h-auto flex flex-col justify-start items-start card p-4 shadow-md hover:shadow-2xl bg-gray-700 rounded-xl transition-all duration-100">
                        <div className="image">
                            <img src={`https://source.unsplash.com/random?wallpaper&id=${Math.random()}`} alt="" className="rounded-lg object-cover w-full max-h-48" />
                        </div>
                        <div className="text p-4 bg-gray-600 rounded-lg h-full mt-4">
                            <h1 className="text-3xl font-semibold text-white">
                                3er Lugar Mundial
                            </h1>
                            <p className="text-white">
                                MakeX Global Championship 2019
                                Secundaria
                                <br />
                                CHINA
                            </p>
                        </div>
                    </div>
                    <div className="h-auto flex flex-col justify-start items-start card p-4 shadow-md hover:shadow-2xl bg-gray-700 rounded-xl transition-all duration-100">
                        <div className="image">
                            <img src={`https://source.unsplash.com/random?wallpaper&id=${Math.random()}`} alt="" className="rounded-lg object-cover w-full max-h-48" />
                        </div>
                        <div className="text p-4 bg-gray-600 rounded-lg h-full mt-4">
                            <h1 className="text-3xl font-semibold text-white">
                                Primer Lugar México
                            </h1>
                            <p className="text-white">
                                MakeX Nacional 2018 y 2019
                                Primaria y Secundaria
                                <br />
                                CDMX
                            </p>
                        </div>
                    </div>
                    <div className="h-auto flex flex-col justify-start items-start card p-4 shadow-md hover:shadow-2xl bg-gray-700 rounded-xl transition-all duration-100">
                        <div className="image">
                            <img src={`https://source.unsplash.com/random?wallpaper&id=${Math.random()}`} alt="" className="rounded-lg object-cover w-full max-h-48" />
                        </div>
                        <div className="text p-4 bg-gray-600 rounded-lg h-full mt-4">
                            <h1 className="text-3xl font-semibold text-white">
                                Primer Lugar Regional
                            </h1>
                            <p className="text-white">
                                TMR Regional Kids Challenge 2018 Primaria
                                <br />
                                Monterrey, N.L., México
                            </p>
                        </div>
                    </div>
                    <div className="h-auto flex flex-col justify-start items-start card p-4 shadow-md hover:shadow-2xl bg-gray-700 rounded-xl transition-all duration-100">
                        <div className="image">
                            <img src={`https://source.unsplash.com/random?wallpaper&id=${Math.random()}`} alt="" className="rounded-lg object-cover w-full max-h-48" />
                        </div>
                        <div className="text p-4 bg-gray-600 rounded-lg h-full mt-4">
                            <h1 className="text-3xl font-semibold text-white">
                                Nacional Coding Academy 2020
                            </h1>
                            <p className="text-white">
                                Competencia Nacional de Videojuegos
                                Primaria y Secundaria
                                <br />
                                México
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Awards
