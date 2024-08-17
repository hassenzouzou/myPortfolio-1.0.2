import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import ProjectsCard from "./Components/ProjectsCard";
import Contact from "./Components/Contact";


import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App overflow-hidden">
      <Header />
      <Hero />
      <Skills />
      <ProjectsCard />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
