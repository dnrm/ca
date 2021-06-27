import React from 'react';
import AwardCard from './AwardCard';

const Awards = () => {
    return (
        <div id="reconocimientos" className="flex flex-col justify-center items-center border-t-2 border-b-2">
            <div className="awards-section bg-topo">
                <div className="heading w-full">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center py-8 md:py-12 px-4 text-gray-800 tracking-tighter">La mejor manera de aprender incluye competencias nacionales y mundiales. Algunos de nuestros logros:</h1>
                </div>
                <div className="award-cards grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:px-32 md:px-20 px-8 pb-12">
                    <AwardCard title="3er Lugar Mundial 2019" img={`/images/tercer-lugar.jpg`}>
                        MakeX Global Championship 2019
                        Secundaria
                        <br />
                        CHINA
                        <details className="pt-2">
                            <summary>Ver más</summary>
                            <p>
                                Este premio es entregado a los competidores cuyo proyecto, desempeño y colaboración en equipo, en conjunto con el equipo de Ukrania, a ganar en una competencia contra los mejores equipos del mundo.
                                <br />
                                +  60 países <br />
                                + 150 ciudades <br />
                                +  10,000 equipos <br />
                                + 45,000 participantes <br />
                            </p>
                            <img src="/images/equipo-completo.jpg" className="mt-2 rounded-lg" alt="" />
                        </details>
                    </AwardCard>
                    <AwardCard title="2do Lugar Mundial 2018" img={`/images/primaria-2018.jpg`}>
                        MakeX Global Championship 2018
                        <br />
                        Primaria
                        <br />
                        Competencia de Automatización de Robots
                        <br />
                        CHINA
                        <details className="pt-2">
                            <summary>Ver más</summary>
                            <p>
                                Este premio es entregado a los competidores cuyo proyecto, desempeño y colaboración en equipo les llevó a completar la mayor cantidad de puntos quedando en el ranking mundial, en 2do lugar, sin cotemplar a la liga China. En una competencia con los mejores países del mundo con más de 2,000 competidores.
                            </p>
                            <img src="/images/arena-2018.jpeg" className="mt-2 rounded-lg" alt="" />
                        </details>
                    </AwardCard>
                    <AwardCard title="Mejor Mentor 2018" img={`/images/mejor-mentor.jpg`}>
                        MakeX Global Championship 2018
                        <br />
                        Competencia de Automatización de Robots
                        <br />
                        CHINA
                        <details className="pt-2">
                            <summary>Ver más</summary>
                            <p>
                                Este premio es entregado a los profesores que demostraron liderazgo, innovación y superioridad técnica, que llevó al equipo a formar parte de la final en el mundial de robótica en China.
                            </p>
                            <img src="/images/equipo-2018.jpeg" className="mt-2 rounded-lg" alt="" />
                        </details>
                    </AwardCard>
                    <AwardCard title="Primer Lugar Nacional 2018 y 2019" img={`/images/primer-lugar-2019.jpg`}>
                        MakeX Nacional 2018 y 2019
                        Primaria y Secundaria
                        <br />
                        CDMX
                        <details className="pt-2">
                            <summary className="cursor-pointer">Ver más</summary>
                            <p>
                                <img src="/images/primer-lugar-2018.jpg" className="my-2 rounded-xl" alt="" />
                                2018
                                Los alumnos de Coding Academy participaron en la competencia automatización de robots nacional MakeX Robotics Competition, en la categoría de primaria y secundaria donde se ganó el primer lugar respectivamente. Tomando el pase a representar e México en la competencia global en China en 2018.
                                <br /><br />
                                2019
                                Se vuelve a participar con más de 300 competidores de toda la República, pasando todos los equipos  a la final en su categría de Primaria y Secundaria, respectivamente.
                                Tomando el pase a representar e México en la competencia global en China en 2019.
                            </p>
                        </details>
                    </AwardCard>
                    <AwardCard title="Primer Lugar Regional 2018" img={`/images/tmr.jpeg`}>
                        TMR Regional Kids Challenge 2018 Primaria
                        <br />
                        Monterrey, N.L., México
                        <details className="pt-2">
                            <summary>Ver más</summary>
                            <p>
                                Competencia con chicos de entre 8 y 13 años, dónde se debía recoger piezas con temporizador, programando un control remoto para operar con un brazo mecánico en el menor tiempo posible.
                            </p>
                            <img src="/images/tmr-mesa.jpeg" className="mt-2 rounded-xl" alt="" />
                        </details>
                    </AwardCard>
                    <AwardCard title="Nacional Coding Academy 2020" img={`https://source.unsplash.com/random?abstract,texture&id=${Math.random()}`}>
                        Competencia Nacional de Videojuegos
                        Primaria y Secundaria
                        <br />
                        México
                        <details className="pt-2">
                            <summary>Ver más</summary>
                            <p>
                                Competencia Virtual organizada entre alumnos de la Academia, con más de 60 participantes, donde se entregaron premios a los primeros 3 lugares y reconocimientos especiales a los proyectos más prometedores. Inspirando a los chicos a desarrollar material propio en su tiempo libre.
                            </p>
                        </details>
                    </AwardCard>
                </div>
            </div>
        </div>
    )
}

export default Awards
