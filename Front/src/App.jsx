import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Card,
  Maps,
  Landing,
  Weapons,
  Skins,
  LoginForm,
  Register,
  Home,
  CardAgent,
} from "./Components";
import { AboutMe } from "./Components/aboutMe/About";
import { Header, Footer } from "./layout";
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/mapas" element={<Maps />} />
        <Route exact path="/personajes" element={<Card />} />
        <Route exact path="/armas" element={<Weapons />} />
        <Route exact path="/:typeWeapon/skins" element={<Skins />} />
        <Route exact path="/sobreMi" element={<AboutMe />} />
        <Route exact path="/login" element={<LoginForm />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/personajes/:nombre" element={<CardAgent />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
