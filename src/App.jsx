import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card from "./components/cards/Card";
import Maps from "./components/maps/Maps";
import LandingPage from "./components/ladingPage/LandingPage";
import { Header } from "./layout";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/mapas" element={<Maps />} />
        <Route exact path="/personajes" element={<Card />} />
        {/* <Route exact path="/armas" component={ArmasPage} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
