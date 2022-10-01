import React, { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Componants/navbar/Navbar";
import Footer from "./Componants/footer/Footer";
import Home from "./Pages/home/Home";
import About from "./Pages/about/About";
import Gallery from "./Pages/gallery/Gallery";
import Plans from "./Pages/plans/Plans";
import Trainers from "./Pages/trainers/Trainers";
import Contact from "./Pages/contact/Contact";
export const ThemeContext = createContext(null);
function App() {
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
    console.log(theme);
  };
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div className={`App ${theme}`}>
        <Navbar onChange={changeTheme} checked={theme === "light"} />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="plans" element={<Plans />} />
            <Route path="trainers" element={<Trainers />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
export default App;
