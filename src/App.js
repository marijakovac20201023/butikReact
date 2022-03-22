import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Pocetna from './components/Pocetna';
import Kontakt from './components/Kontakt';

function App() {
  return (
    <div className="App">
       <BrowserRouter className="App">
          <NavBar></NavBar>

        <Routes>
            <Route path="/" element={<Pocetna></Pocetna>}></Route>
            <Route path="/kontakt" element={<Kontakt></Kontakt>}></Route>
        </Routes>
          <Footer> </Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
