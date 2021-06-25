import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Awards from './components/Awards';
import ContactButton from './components/ContactButton';
import Benefits from './components/Benefits';
import Temas from "./components/Temas";
import Professors from "./components/Professors";
import Main from './components/Main';

function App() {
    return (
        <div className="app">
            <Navigation />
            <div className="pt-20">
                <Hero />
            </div>
            <main className="flex justify-center items-center flex-col">
                <Main />
                <Awards />
                <Professors />
                <Temas />
                <Benefits />
            </main>
            <Footer />
            <ContactButton />
        </div>
    );
}

export default App;
