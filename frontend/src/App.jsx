
import { Certifications } from "./Certifications";
import ProjectsSection from "./ProjectsSection";
import Skills from "./Skills";
import Home from "./Home";

function App() {
  return (
      <main>
        <header className="navbar">
        <h4 className="headername">Roduf Eleu Bulaquena</h4>
        <nav>
          <a href="#home">Home</a>
          <a href="#project">Projects</a>
          <a href="#skill">Skills</a>

        </nav>
      </header>

        <section id="home">
          <Home/>
        </section>
        
        <div className="app">
          <section className="project" id="project">
            <ProjectsSection />
          </section>

          <section id="skill">
            <Skills />
          </section>
        </div>
      </main>
      
  );
}

export default App;
