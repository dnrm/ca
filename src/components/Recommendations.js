import React from 'react'
import Layout from '../components/Layout';
import Recommendation from './Recommendation';

const Recommendations = () => {
    return (
        <Layout>
            <div className="w-full text flex justify-center items-start flex-col ml-0 col-span-3">
                <h1 className={`font-bold text-4xl md:text-6xl text-black py-4 tracking-tighter`}>
                    Recomendaciones de los padres de familia
                </h1>
                <div className="grid gap-4 grid-cols-1 md:grid-cols-4 mt-4 w-full">
                    <Recommendation name="Sandra" score={5}>
                        Los niños aprenden mientras se divierten.
                        Súper Recomendable!!
                    </Recommendation>
                    <Recommendation name="Rob" score={5}>
                        Un concepto muy innovador, preparando a los pequeños a que estén mejor preparados para el futuro. Excelentes!!
                    </Recommendation>
                    <Recommendation name="Gaby" score={5}>
                        La verdad quiero felicitarlos, excelente la forma de enseñar y sobre todo el formato de la clase. Super recomendado!
                    </Recommendation>
                    <Recommendation name="Mari" score={5}>
                        Excelente escuela! Mi hijo disfruta cada reto y no se quiere ir!! ...muchas gracias
                    </Recommendation>
                </div>
            </div>
        </Layout>
    )
}

export default Recommendations
