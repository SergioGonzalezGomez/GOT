import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Houses } from "./pages/Houses/Houses";
import { HousesDetail } from "./pages/Houses/HousesDetail/HousesDetail";
import { Characters } from "./pages/Characters/Characters";
import { CharactersDetail } from "./pages/Characters/CharactersDetail/CharactersDetail";
import { Chronology } from "./pages/Chronology/Chronology";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

export const Context = React.createContext({});

function App() {
  const [page, setPage] = React.useState("");

  return (
    <div className="App">
      <Context.Provider value={{ page, setPage }}>
        <Router>
          <Header />
          <div className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/houses" element={<Houses />} />
              <Route path="/houses/:name" element={<HousesDetail />} />
              <Route path="/characters" element={<Characters />} />
              <Route path="/characters/:name" element={<CharactersDetail />} />
              <Route path="/chronology" element={<Chronology />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </Context.Provider>
    </div>
  );
}

export default App;
