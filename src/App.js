import Home from "./components/Home";
import Navbar from "./components/Navbar";
import './App.css'
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import DarkMode from "./components/Darkmode";

function App() {
  return (
    <div style={{overflowX: 'hidden'}}>
 <Navbar/>
 <DarkMode/>
 <Home/>
 <About/>
 <Projects/>
 <Contact/>
    </div>
  );
}

export default App;
