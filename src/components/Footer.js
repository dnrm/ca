import React from "react";

const Footer = () => {
    return (
        <footer
            className="p-6 bg-gray-600 border-t-2 border-gray-700"
            id="contacto"
        >
            <div
                className="bg-gray-600 grid grid-cols-1 md:grid-cols-8 place-items-start"
                id="contacto"
            >
                <div className="information col-span-2 lg:col-span-1">
                    <h1 className="text-xl text-gray-100 font-semibold leading-tight pb-2">
                        CODING ACADEMY
                    </h1>
                    <h2 className="text-gray-100 font-normal text-md leading-tight">
                        Carr Nacional #4800
                        <br />
                        Col. Valle Alto
                        <br />
                        Monterrey, México
                        <h3 className="text-sm text-gray-100">
                            <a
                                href="tel:+52-(811)-075-9016"
                                className="text-blue-300"
                            >
                                +52 (811) 075-9016
                            </a>
                        </h3>
                    </h2>
                    <h3 className="text-sm text-gray-100">
                        <a
                            href="mailto:info@codingacademy.mx"
                            className="text-blue-300"
                        >
                            {" "}
                            info@codingacademy.mx
                        </a>
                    </h3>
                    <hr className="my-2" />
                    <details className="text-white">
                        <summary>Íconos</summary>
                        <p className="text-gray-100 text-sm">
                            <a
                                rel="noreferrer"
                                className="text-blue-300"
                                target="_blank"
                                href="https://icons8.com/icon/mJAzocdevEhF/trophy"
                            >
                                Trophy
                            </a>{" "}
                            icon by{" "}
                            <a
                                className="text-blue-300"
                                rel="noreferrer"
                                target="_blank"
                                href="https://icons8.com"
                            >
                                Icons8
                            </a>
                        </p>
                        <p className="text-gray-100 text-sm">
                            <a
                                rel="noreferrer"
                                className="text-blue-300"
                                target="_blank"
                                href="https://icons8.com/icon/ZnW8tegdQkcB/mind-map"
                            >
                                Mind Map
                            </a>{" "}
                            icon by{" "}
                            <a
                                rel="noreferrer"
                                className="text-blue-300"
                                target="_blank"
                                href="https://icons8.com"
                            >
                                Icons8
                            </a>
                        </p>
                        <p className="text-gray-100 text-sm">
                            <a
                                rel="noreferrer"
                                className="text-blue-300"
                                target="_blank"
                                href="https://icons8.com/icon/Tx8OlastJ13o/light"
                            >
                                Light
                            </a>{" "}
                            icon by{" "}
                            <a
                                rel="noreferrer"
                                className="text-blue-300"
                                target="_blank"
                                href="https://icons8.com"
                            >
                                Icons8
                            </a>
                        </p>
                        <p className="text-gray-100 text-sm">
                            <a
                                rel="noreferrer"
                                className="text-blue-300"
                                target="_blank"
                                href="https://icons8.com/icon/XIaXF0ldSOxD/globe"
                            >
                                Globe
                            </a>{" "}
                            icon by{" "}
                            <a
                                rel="noreferrer"
                                className="text-blue-300"
                                target="_blank"
                                href="https://icons8.com"
                            >
                                Icons8
                            </a>
                        </p>
                        <p className="text-gray-100 text-sm">
                            <a
                                rel="noreferrer"
                                className="text-blue-300"
                                target="_blank"
                                href="https://icons8.com/icon/Lcoa9tnTFcSd/compass"
                            >
                                Compass
                            </a>{" "}
                            icon by{" "}
                            <a
                                rel="noreferrer"
                                className="text-blue-300"
                                target="_blank"
                                href="https://icons8.com"
                            >
                                Icons8
                            </a>
                        </p>
                        <p className="text-gray-100 text-sm">
                            <a
                                rel="noreferrer"
                                className="text-blue-300"
                                target="_blank"
                                href="https://icons8.com/icon/YDB2BiId0wKq/army-star"
                            >
                                Army Star
                            </a>{" "}
                            icon by{" "}
                            <a
                                rel="noreferrer"
                                className="text-blue-300"
                                target="_blank"
                                href="https://icons8.com"
                            >
                                Icons8
                            </a>
                        </p>
                        <p className="text-gray-100 text-sm">
                            <a
                                rel="noreferrer"
                                className="text-blue-300"
                                target="_blank"
                                href="https://icons8.com/icon/42855/star"
                            >
                                Star
                            </a>{" "}
                            icon by{" "}
                            <a
                                rel="noreferrer"
                                className="text-blue-300"
                                target="_blank"
                                href="https://icons8.com"
                            >
                                Icons8
                            </a>
                        </p>
                    </details>
                </div>
                <div className="icons text-white text-2xl flex-col col-span-6">
                    <h1 className="text-left font-semibold">Contáctanos</h1>
                    <div className="grid gap-0 grid-rows-2 col-span-2 h-full">
                        <div className="row-1">
                            <a
                                href="mailto:info@codingacademy.mx"
                                rel="noreferrer"
                                target="_blank"
                                className="pr-4"
                            >
                                <i className="far fa-envelope text-4xl"></i>
                            </a>
                            <a
                                href="https://www.facebook.com/CodingAcademyMty/"
                                rel="noreferrer"
                                target="_blank"
                                className="pr-4"
                            >
                                <i className="fab fa-facebook-f text-4xl"></i>
                            </a>
                            <a
                                href="https://api.whatsapp.com/send?phone=528121285867&text="
                                rel="noreferrer"
                                target="_blank"
                                className="pr-4"
                            >
                                <i className="fab fa-whatsapp text-4xl"></i>
                            </a>
                        </div>
                        <div className="row-2">
                            <a
                                href="https://www.instagram.com/codingacademymonterrey/"
                                rel="noreferrer"
                                target="_blank"
                                className="pr-4"
                            >
                                <i className="fab fa-instagram text-4xl"></i>
                            </a>
                            <a
                                href="https://twitter.com/CodingMonterrey"
                                rel="noreferrer"
                                target="_blank"
                                className="pr-4"
                            >
                                <i className="fab fa-twitter text-4xl"></i>
                            </a>
                            <a
                                href="https://www.tiktok.com/@codingacademymty"
                                rel="noreferrer"
                                target="_blank"
                                className="pr-4"
                            >
                                <i className="fab fa-tiktok text-4xl"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <details className="text-white w-full md:w-1/2">
                <summary>Avíso de Privacidad</summary>
                <br />
                <p>
                    IDENTIDAD Y DOMICILIO DEL RESPONSABLE
                    <br />
                    <br />
                    Coding Academy Mty con domicilio en Carr. Nacional #4800,
                    Col. Valle Alto, Monterrey, Nuevo León y dirección
                    electrónica www.codingacademy.mx consciente de la
                    importancia de la confidencialidad y seguridad en el
                    tratamiento de los datos personales que los Padres de
                    Familia nos proporcionan libre y voluntariamente durante el
                    Proceso de Admisión de sus hijos, establece el compromiso de
                    proteger su privacidad y cumplir con la Ley Federal de
                    Protección de Datos Personales en Posesión de los
                    Particulares.
                    <br />
                    <br />
                    DESCRIPCIÓN DEL AVISO
                    <br />
                    <br />
                    Los términos que se utilicen en el presente aviso de
                    privacidad (en lo sucesivo referido como “Aviso”) tendrán la
                    definición que a los mismos le asigna la Ley Federal de
                    Protección de Datos Personales en Posesión de Particulares,
                    publicada en el Diario Oficial de la Federación el 5 de
                    julio de 2010 (en lo sucesivo referida como la “Ley”), con
                    excepción expresa de aquellos que aquí se definen. Este
                    Aviso especifica el tipo de datos que el Coding Academy Mty
                    recolecta, los fines para los cuales lleva a cabo el
                    tratamiento de los mismos, así como los derechos con que
                    cuenta el titular al respecto.
                    <br /><br />
                    DATOS PERSONALES
                    <br /><br />
                    Para las
                    finalidades del presente aviso de privacidad, podemos
                    recabar sus datos personales de distintas formas: cuando
                    usted nos los proporciona directamente a través de la Forma
                    de Registro, cuando visita nuestro sitio de internet, y
                    cuando obtenemos información a través de otras fuentes que
                    están permitidas por la ley. Podremos recabar uno, alguno o
                    todos de los siguientes datos personales: nombre completo,
                    dirección, teléfono, datos de los familiares o contactos.
                    Para más detalle, favor de consultar la Solicitud de
                    Admisión ubicada en la siguiente liga
                    https://forms.gle/9mQywmEL1QJ537YJ9
                    <br />
                    <br />
                    TRATAMIENTO DE LA INFORMACIÓN
                    <br />
                    <br />
                    Los datos personales podrán ser tratados y utilizados por el
                    Coding Academy Mty para llevar a cabo algunas o todas las
                    actividades relacionadas con el cumplimiento de las
                    obligaciones que deriven de la relación contractual y/o
                    comercial que se originen y/o deriven de la prestación de
                    los servicios. Los datos personales serán utilizados para
                    las siguientes finalidades: Proveer educación a los alumnos,
                    realizar actividades para el desarrollo del alumno y proveer
                    de diversos servicios al alumno, tales como: participación
                    con otras instituciones educativas, competencias regionales
                    e internacionales. Igualmente le informamos que para cumplir
                    con las finalidades previstas en este aviso, serán recabados
                    y tratados datos personales sensibles. Nos comprometemos a
                    que los mismos serán tratados bajo estrictas medidas de
                    seguridad que garanticen su confidencialidad.
                    <br />
                    <br />
                    TRANSFERENCIA DE LA INFORMACIÓN A TERCEROS
                    <br />
                    <br />
                    El Coding Academy Mty podrá transferir los datos personales
                    que haya recibido, recolectado, llegue a recibir y/o
                    recolectar. La transferencia de los datos se encuentra
                    limitada a aquellos actos, hechos y procedimientos que el
                    Coding Academy Mty requiera implementar a efecto de estar en
                    posibilidad de cumplir con sus obligaciones legales,
                    contractuales, regulatorias y comerciales en el curso
                    ordinario de sus operaciones. Por lo tanto, la información
                    puede ser compartida bajo previa autorización de los padres,
                    y solo en caso de competencias, premiaciones y
                    reconocimientos.
                    <br />
                    <br />
                    ACCESO, RECTIFICACIÓN, CANCELACIÓN U OPOSICIÓN DE LA
                    INFORMACIÓN
                    <br />
                    <br />
                    (Derecho ARCO) Al otorgar el consentimiento en relación a
                    los datos proporcionados, mismos que formarán parte de un
                    archivo, el usuario se compromete a mantener actualizados
                    sus datos personales, a fin de que el Coding Academy Mty
                    esté en condiciones de brindarle un servicio eficiente y
                    eficaz. Usted tiene el derecho de acceder a sus datos
                    personales que poseemos y a los detalles del tratamiento de
                    los mismos, así como a rectificarlos en caso de ser
                    inexactos o instruirnos cancelarlos u oponerse al
                    tratamiento de los mismos para fines específicos. Para mayor
                    información, favor de comunicarse a Dirección a través del
                    correo electrónico: info@codingacademy.mx o al teléfono 52
                    (81) 2128-5867.
                    <br />
                    <br />
                    MODIFICACIONES AL AVISO DE PRIVACIDAD
                    <br />
                    <br />
                    El Coding Academy Mty se reserva el derecho de revisar y
                    actualizar el presente Aviso de Privacidad en cualquier
                    momento, si la normatividad así lo requiere. En caso de
                    existir algún cambio en este Aviso, lo comunicará enviando
                    un mensaje de correo electrónico y publicando una nota en
                    nuestra dirección electrónica, www.codingacademy.mx. Por su
                    parte el usuario es responsable de la lectura periódica de
                    este documento para vigilar su adecuado cumplimiento
                    conforme se actualiza la normatividad.
                    <br /><br />
                    AUTORIZACIÓN DE TRATAMIENTO DE INFORMACIÓN
                    <br /><br />
                    De conformidad con lo que
                    establecen los artículos 8 y 9 de la Ley Federal de
                    Protección de Datos Personales en Posesión de Particulares,
                    requerimos de su consentimiento expreso para el tratamiento
                    de sus datos personales sensibles y financieros, por lo que
                    le solicitamos indique si acepta o no el tratamiento.
                    Consiento que mis datos personales sensibles sean tratados
                    conforme a los términos y condiciones del presente Aviso de
                    Privacidad.
                </p>
            </details>
        </footer>
    );
};

export default Footer;
