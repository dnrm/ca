import React from 'react';
import Layout from './Layout';

const Temas = () => {
    return (
        <Layout id="temas">
            <div className="text col-span-1 w-full">
                <h1 className={`font-bold text-4xl md:text-6xl text-black py-4 tracking-tighter`}>Temas</h1>
                <div className="list grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 m-0 md:mr-4">
                    <div className="electronics">
                        <h3 className="mt-2 text-xl font-semibold">Electrónica</h3>
                        <hr className="mb-2" />
                        <ul>
                            <li className="leading-tight">Protoboard</li>
                            <li className="leading-tight">Kano (Software)</li>
                            <li className="leading-tight">Snap Circuits</li>
                            <li className="leading-tight">Soldadura</li>
                            <li className="leading-tight">Circuitos Impresos</li>
                        </ul>
                    </div>
                    <div className="software">
                        <h3 className="mt-2 text-xl font-semibold">Software</h3>
                        <hr className="mb-2" />
                        <ul>
                            <li className="leading-tight">Arcade</li>
                            <li className="leading-tight">Terminal Two</li>
                            <li className="leading-tight">CoSpaces</li>
                            <li className="leading-tight">Kano</li>
                            <li className="leading-tight">Tynker</li>
                            <li className="leading-tight">CodeMonkey</li>
                            <li className="leading-tight">HTML</li>
                            <li className="leading-tight">JavaScript</li>
                            <li className="leading-tight">CSS</li>
                            <li className="leading-tight">Python</li>
                            <li className="leading-tight">C++</li>
                        </ul>
                    </div>
                    <div className="robotics">
                        <h3 className="mt-2 text-xl font-semibold">Robótica</h3>
                        <hr className="mb-2" />
                        <ul>
                            <li className="leading-tight">Edison</li>
                            <li className="leading-tight">Cosmo</li>
                            <li className="leading-tight">Vector</li>
                            <li className="leading-tight">Blockly</li>
                        </ul>
                    </div>
                    <div className="design">
                        <h3 className="mt-2 text-xl font-semibold">Diseño</h3>
                        <hr className="mb-2" />
                        <ul>
                            <li className="leading-tight">VR</li>
                            <li className="leading-tight">CoSpaces</li>
                            <li className="leading-tight">Diseño e Impresión 3D</li>
                            <li className="leading-tight">Pluma 3D</li>
                            <li className="leading-tight">Tynker</li>
                        </ul>
                    </div> 
                </div>
            </div>
            <div className="img col-span-2">
                <img src="/images/temas.jpg" alt="" className="w-full" />
            </div>
        </Layout>
    )
}

export default Temas;