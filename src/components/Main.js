import React from 'react'
import Section from './Section';

const Main = () => {
    return (
        <Section
            heading="El mundo hoy es 100% digital. Cambió la manera en la que trabajamos, compramos, nos divertimos e interactuamos. El mundo necesita innovadores tecnológicos. En Coding Academy desarrollamos a los jóvenes para tener las herramientas necesarias para innovar en tecnología y tener habilidades de clase mundial."
            img="../images/s.jpg"
            right
            color="white"
            id="nosotros"
        >
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
        </Section>
    )
}

export default Main
