import React from 'react';
import AwardCard from './AwardCard';

const Awards = (props) => {
    return (
        <section id="reconocimientos" className="flex flex-col justify-center items-center border-t-2 border-b-2">
            <div className="awards-section bg-topo">
                <div className="heading w-full">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center py-8 md:py-12 px-4 text-gray-800 tracking-tighter">Competencias nacionales y mundiales</h1>
                </div>
                <div className="award-cards grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:px-32 md:px-20 px-8 pb-12">
                    <AwardCard title="Mejor Mentor" img={`https://source.unsplash.com/random?abstract,texture&id=${Math.random()}`}>
                        MakeX Global Championship 2018
                        Competencia de Automatización de Robots
                        <br />
                        CHINA
                    </AwardCard>
                    <AwardCard title="2do Lugar Global (sin Asia)" img={`https://source.unsplash.com/random?abstract,texture&id=${Math.random()}`}>
                        MakeX Global Championship 2018
                        Primaria
                        Competencia de Automatización de Robots
                        <br />
                        CHINA
                    </AwardCard>
                    <AwardCard title="3er Lugar Mundial" img={`https://source.unsplash.com/random?abstract,texture&id=${Math.random()}`}>
                        MakeX Global Championship 2019
                        Secundaria
                        <br />
                        CHINA
                    </AwardCard>
                    <AwardCard title="Primer Lugar México" img={`https://source.unsplash.com/random?abstract,texture&id=${Math.random()}`}>
                        MakeX Nacional 2018 y 2019
                        Primaria y Secundaria
                        <br />
                        CDMX
                    </AwardCard>
                    <AwardCard title="Primer Lugar Regional" img={`https://source.unsplash.com/random?abstract,texture&id=${Math.random()}`}>
                        TMR Regional Kids Challenge 2018 Primaria
                        <br />
                        Monterrey, N.L., México
                    </AwardCard>
                    <AwardCard title="Nacional Coding Academy 2020" img={`https://source.unsplash.com/random?abstract,texture&id=${Math.random()}`}>
                        Competencia Nacional de Videojuegos
                        Primaria y Secundaria
                        <br />
                        México
                    </AwardCard>
                </div>
            </div>
        </section>
    )
}

export default Awards
