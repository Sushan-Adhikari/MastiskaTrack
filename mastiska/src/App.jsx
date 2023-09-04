import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import AboutUs from "./components/Aboout";
import HelpLine from "./components/HelpLine";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/help" element={<HelpLine />}></Route>
      </Routes>
    </>
  );
}

export default App;
