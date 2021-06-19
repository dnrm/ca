import React from 'react'
import Layout from './Layout';

const Benefits = () => {
    return (
        <Layout>
            <div className="text flex justify-center items-start flex-col ml-0 md:mr-4 col-span-2" id="beneficios">
                <h1 className={`font-bold text-4xl md:text-6xl text-black py-4 tracking-tighter`}>
                    Beneficios
                </h1>
                <p className={`text-black`}>
                    <ul>
                        <li className="text-xl"><span className="text-green-500">+</span> Inovación digital</li>
                        <li className="text-xl"><span className="text-green-500">+</span> Lenguaje universal</li>
                        <li className="text-xl"><span className="text-green-500">+</span> Solución a problemas</li>
                        <li className="text-xl"><span className="text-green-500">+</span> Probabilidades de profesión</li>
                        <li className="text-xl"><span className="text-green-500">+</span> Creatividad y pensamiento crítico</li>
                        <li className="text-xl"><span className="text-green-500">+</span> Planeación y toma de decisiones</li>
                        <li className="text-xl"><span className="text-green-500">+</span> Aumenta la tolerancia a la frustración y a la perseverancia</li>
                    </ul>
                </p>
            </div>
            <div className="flex justify-center items-center flex-col col-span-1">
                <img src={`https://cdn.medina.dev/photo4.jpg`} alt="" className=" border-4 border-white" />
                <p className="text-center pt-4"><span className="font-semibold tracking-tighter text-2xl ">"PROGRAMAR ENSEÑA A PENSAR"</span> <br /> Steve jobs</p>
            </div>
        </Layout>
    )
}

export default Benefits
