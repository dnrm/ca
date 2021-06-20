import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Awards from './components/Awards';
import ContactButton from './components/ContactButton';
import Benefits from './components/Benefits';
import Temas from "./components/Temas";

function App() {
    return (
        <div className="app">
            <Navigation />
            <div className="pt-20">
                <Hero />
            </div>
            <main className="flex justify-center items-center flex-col">
                <Section
                    heading="Preparamos a los chicos para tener las herramientas para innovar en tecnología y tener una educación de nivel mundial."
                    img="../images/s.jpg"
                    right
                    color="white"
                    id="nosotros"
                >
                    <details className="bg-yellow-100 w-full p-4 mb-12 md:mb-0 mt-4">
                        <summary className="cursor-pointer">Ver más</summary>
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
                <Awards />
                <Temas />
                <Benefits />
            </main>
            <Footer />
            <ContactButton />
        </div>
    );
}

export default App;
