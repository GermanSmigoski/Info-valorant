import { useSelector } from "react-redux";
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
} from "./Components";
import { AboutMe } from "./Components/aboutMe/About";
import { Header, Footer } from "./layout";

function App() {
  const user = useSelector((state) => state.user);

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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
