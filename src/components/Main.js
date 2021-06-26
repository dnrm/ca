import React from 'react'

const Main = () => {
    return (
        <section
            id={`nosotros`}
            className="xl:px-32 md:px-20 px-4 py-16 grid md:grid-cols-3 grid-cols-1 gap-4"
            style={{ backgroundColor: 'white' }}

        >
            <div className="text flex justify-center items-start flex-col ml-0 md:mr-4 col-span-2">
                <h1 className={`font-bold text-3xl text-black py-4`}>
                    El mundo hoy es 100% digital. Cambió la manera en la que trabajamos, compramos, nos divertimos e interactuamos. El mundo necesita innovadores tecnológicos. 
                    <br /><br />
                    En Coding Academy desarrollamos a los jóvenes para tener las herramientas necesarias para innovar en tecnología y tener habilidades de clase mundial.
                </h1>
                <p className={`text-black`}>
                    <details className="bg-yellow-100 w-full p-4 mb-12 md:mb-0 mt-4">
                        <summary className="cursor-pointer">Ver más</summary>
                        <p>
                            En nuestra academia nuestros alumnos aprenden lógica de programación, a través de proyectos de diseño de videojuegos, animaciones, apps móviles, diseño 3D, electrónica, etc. Utilizamos muchas plataformas usadas a nivel mundial para desarrollar sus habilidades.
                        </p>
                        <br />
                        <p>
                            Nuestra filosofía consiste en moldear a los futuros profesionistas con pasión en las ciencias de la computación, innovación y transformación digital. Para que logren pensar de manera crítica, sean hábiles digitalmente, con autoestima, incluyentes, colaboradores, innovadores y sobre todo expertos en crear y solucionar.
                        </p>
                    </details>
                </p>
            </div>
            <div className="image flex justify-center items-start">
                <img src="../images/s.jpg" alt="" className=" border-4 border-white" />
            </div>
        </section>
    )
}

export default Main
