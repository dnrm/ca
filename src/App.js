import "./App.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="app">
            <Navigation />
            <div className="pt-16">
                <Hero />
            </div>
            <main className="flex justify-center items-center flex-col">
                <Section
                    heading="Preparamos a los chicos para tener las herramientas para innovar en tecnología y tener una educación de nivel mundial."
                    img="../images/s.jpg"
                    right
                    color="white"
                >
                    <details className="bg-yellow-100 w-full p-4 mb-12 md:mb-0 mt-4">
                        <summary>Ver más</summary>
                        <p>
                            Aprenden desde las bases para dominar la lógica de
                            programación, a través de proyectos de diseño de
                            videojuegos, apps, 3D, electrónica, etc. obteniendo
                            un lenguaje universal por medio de una gran variedad
                            de plataformas.
                        </p>
                        <br />
                        <p>
                            Debemos moldear a los futuros profesionistas con
                            pasión en las ciencias de la computación de
                            innovación y transformación digital. Para que logren
                            pensar de manera crítica, sean hábiles, con
                            autoestima, incluyentes, colaboradores, innovadores
                            y sobre todo expertos en crear y solucionar.
                        </p>
                    </details>
                </Section>
                <Section
                    heading="Nuestra Filosofía"
                    img="../images/ca1.jpg"
                    color="#fce69d"
                    textColor="gray-800"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum auctor velit sit amet egestas maximus. Curabitur
                    vel blandit dui. Integer vestibulum diam in arcu placerat,
                    eget faucibus orci egestas. Curabitur aliquam diam sed
                    sodales feugiat. Integer viverra vel ligula sed mollis.
                    Aliquam pellentesque tincidunt orci, ornare elementum felis
                    suscipit ut. Praesent sed nibh mollis metus tincidunt
                    gravida.
                </Section>
                <Section
                    heading="Temas con los que trabajamos"
                    img="../images/ca2.jpg"
                    color="white"
                    right
                    textColor="#303030"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum auctor velit sit amet egestas maximus. Curabitur
                    vel blandit dui. Integer vestibulum diam in arcu placerat,
                    eget faucibus orci egestas. Curabitur aliquam diam sed
                    sodales feugiat. Integer viverra vel ligula sed mollis.
                    Aliquam pellentesque tincidunt orci, ornare elementum felis
                    suscipit ut. Praesent sed nibh mollis metus tincidunt
                    gravida.
                </Section>
                <Section
                    heading="Logros"
                    img="../images/ca4.jpg"
                    color="#fad075"
                    textColor="gray-800"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum auctor velit sit amet egestas maximus. Curabitur
                    vel blandit dui. Integer vestibulum diam in arcu placerat,
                    eget faucibus orci egestas. Curabitur aliquam diam sed
                    sodales feugiat. Integer viverra vel ligula sed mollis.
                    Aliquam pellentesque tincidunt orci, ornare elementum felis
                    suscipit ut. Praesent sed nibh mollis metus tincidunt
                    gravida.
                </Section>
            </main>
            <Footer />
        </div>
    );
}

export default App;
