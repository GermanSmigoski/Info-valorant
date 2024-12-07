import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutMe } from "./components/aboutMe/About";
import { Header, Footer } from "./layout";
import { Home } from "./components/home/home";
import { Maps } from "./components/maps/Maps";
import { Agents } from "./components/agents";
import { Weapons } from "./components/weapons";
import { Skins } from "./components/skins/skins";
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/mapas" element={<Maps />} />
        <Route exact path="/personajes" element={<Agents />} />
        <Route exact path="/armas" element={<Weapons />} />
        <Route exact path="/:typeWeapon/skins" element={<Skins />} />
        <Route exact path="/sobreMi" element={<AboutMe />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
