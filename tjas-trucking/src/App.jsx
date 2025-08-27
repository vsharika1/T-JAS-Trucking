import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Fleet from "./components/Fleet";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Fleet />
      <Contact />
      <Footer />
    </>
  );
}

export default App;