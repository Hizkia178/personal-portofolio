import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Project from "./components/Project";
import ScrollToTop from "./components/ScrollToTopButton";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
      <ScrollToTop />
      <Footer />
    </>
  )
}

export default App
