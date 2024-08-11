import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";
import Skills from "./Components/Skill";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [skill, setSkill] = useState(0);
  const [project, setProject] = useState(0);
  const [contact, setContact] = useState(0);
  const [home, setHome] = useState(0);

  const onContact = (a) => {
    setContact(a);
    console.log("This will return some value");
  };
  const onSkill = (a) => {
    setSkill(a);
    console.log("This will return some value");
  };
  const onProject = (a) => {
    setProject(a);
    console.log("This will return some value");
  };
  const onHome = (a) => {
    setHome(a);
    console.log("This will return some value");
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          onContact={onContact}
          onSkill={onSkill}
          onProject={onProject}
          onHome={onHome}
        />
        <Routes>
          <Route path="/skill" element={<Skills />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/home" element={<Homepage />} /> */}
        </Routes>

        {home === 0 && <Homepage />}
        {skill === 0 && <Skills />}
        {project === 0 && <Projects />}
        {contact === 0 && <Contact />}
      </BrowserRouter>
    </>
  );
}

export default App;
