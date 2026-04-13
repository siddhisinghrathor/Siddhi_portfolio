import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import GridBackground from "./components/ui/GridBackground";
import CustomCursor from "./components/ui/CustomCursor";
import Loader from "./components/ui/Loader";

function App() {
  return (
    <>
      <Loader />
      <CustomCursor />
      <GridBackground />
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
