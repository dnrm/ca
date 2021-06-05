import "./App.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Section from "./components/Section";

function App() {
    return (
        <div className="app">
            <Navigation />
            <Hero text="Bienvenido" />
            <main className="flex justify-center items-center flex-col">
                <Section heading="¿Qué nos hace diferentes?" pureText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum auctor velit sit amet egestas maximus. Curabitur
                    vel blandit dui. Integer vestibulum diam in arcu placerat,
                    eget faucibus orci egestas. Curabitur aliquam diam sed
                    sodales feugiat. Integer viverra vel ligula sed mollis.
                    Aliquam pellentesque tincidunt orci, ornare elementum felis
                    suscipit ut. Praesent sed nibh mollis metus tincidunt
                    gravida. Nullam lectus arcu, consectetur ut felis vitae,
                    sollicitudin fringilla arcu. Nullam ac faucibus magna. Fusce
                    a scelerisque diam. Fusce in interdum est. Mauris hendrerit,
                    nisi nec bibendum mattis, ligula tellus fermentum lectus, a
                    luctus eros leo et orci. Vestibulum efficitur laoreet
                    lectus, a convallis sapien malesuada nec. Aenean eu tellus
                    ac felis lobortis venenatis. Mauris cursus ornare lacus a
                    elementum.
                </Section>
                <Section heading="Subheading" img="../images/teacher.svg" color="#f5cb5c">
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
        </div>
    );
}

export default App;
