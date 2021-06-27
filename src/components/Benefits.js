import React from 'react'
import Layout from './Layout';
import Benefit from './Benefit';

const Benefits = () => {
    return (
        <Layout id="beneficios">
            <div className="w-full text flex justify-center items-start flex-col ml-0 col-span-3">
                <h1 className={`font-bold text-4xl md:text-6xl text-black py-4 tracking-tighter`}>
                    Beneficios
                </h1>
                <div className="benefits-grid grid gap-2 grid-cols-2 sm:grid-cols-5 md:grid-cols-7 mt-8 w-full">
                    <Benefit img="/images/digital-innovation.gif">
                        Inovación digital
                    </Benefit>
                    <Benefit img="/images/brain.gif">
                        Pensamiento Crítico
                    </Benefit>
                    <Benefit img="/images/search.gif">
                        Solución de Problemas y Creatividad
                    </Benefit>
                    <Benefit img="/images/globe.gif">
                        Lenguaje Universal
                    </Benefit>
                    <Benefit img="/images/compass.gif">
                        Guía en su selección de profesión
                    </Benefit>
                    <Benefit img="/images/checked.gif">
                        Toma de decisiones
                    </Benefit>
                    <Benefit img="/images/star.png">
                        Perseverancia
                    </Benefit>
                </div>
            </div>
            {/* <div className="flex justify-center items-center flex-col col-span-1">
                <img src={`https://cdn.medina.dev/photo4.jpg`} alt="" className=" border-4 border-white" />
                <p className="text-center pt-4"><span className="font-semibold tracking-tighter text-2xl ">"PROGRAMAR ENSEÑA A PENSAR"</span> <br /> Steve jobs</p>
            </div> */}
        </Layout>
    )
}

export default Benefits
