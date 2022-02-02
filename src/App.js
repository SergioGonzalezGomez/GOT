import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Home} from './pages/Home/Home';
import {Houses} from './pages/Houses/Houses';
import { HousesDetail } from './pages/Houses/HousesDetail/HousesDetail';
import { Characters } from './pages/Characters/Characters';
import { CharactersDetail } from './pages/Characters/CharactersDetail/CharactersDetail';
import { Chronology } from './pages/Chronology/Chronology';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/houses" element={<Houses/>}/>
          <Route path="/houses/:name" element={<HousesDetail/>}/>
          <Route path="/characters" element={<Characters/>}/>
          <Route path="/characters/:name" element={<CharactersDetail/>}/>
          <Route path="/chronology" element={<Chronology/>}/>

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
