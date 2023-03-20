import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Card, Maps, LandingPage, Weapons } from "./components";
import { Header, Footer } from "./layout";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/mapas" element={<Maps />} />
        <Route exact path="/personajes" element={<Card />} />
        <Route exact path="/armas" element={<Weapons />} />
        {/* <Route exact path="/leaderBoard" element={<LeaderBoard/>} />*/}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
