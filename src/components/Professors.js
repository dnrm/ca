import React from 'react'
import Layout from './Layout';

const Professors = () => {
    return (
        <Layout>
            <div className="text col-span-3 flex flex-col justify-center items-center mx-0 md:mx-32">
                <img src="/images/trophy.gif" alt="Trophy gif" />
                <h1 className="text-4xl font-bold text-center tracking-tighter">Profesores certificados con más de 20 años de experiencia profesional e internacional.</h1>
            </div>
        </Layout>
    )
}

export default Professors
