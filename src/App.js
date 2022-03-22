import logo from './logo.svg';
import './App.css';
 
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Pocetna from './components/Pocetna';
import Kontakt from './components/Kontakt';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

function App() {
  const [proizvodi]= useState([
        {
            id:1,
            slika: "https://static.vesti.rs/slike-3/Internet-prodaja-odece-prevara-ili-ne.jpg",
            prodavnica: "ZARA",
            naziv: "aaaa",
            velicina: "S",
            opis:"Lorem dsadsa dsa das das d as d asd a d asd as d a das sd  ads",
            cena: 100,
        },
        {
          id:2,
          slika: "https://static.vesti.rs/slike-3/Internet-prodaja-odece-prevara-ili-ne.jpg",
          prodavnica: "AAAAA",
          naziv: "aaaa",
          velicina: "S",
          opis:"Lorem dsadsa dsa das das d as d asd a d asd as d a das sd  ads",
          cena: 100,
      },
      {
        id:3,
        slika: "https://static.vesti.rs/slike-3/Internet-prodaja-odece-prevara-ili-ne.jpg",
        prodavnica: "BBBBBB",
        naziv: "aaaa",
        velicina: "S",
        opis:"Lorem dsadsa dsa das das d as d asd a d asd as d a das sd  ads",
        cena: 100,
    },

  ]);

  return (
    <div className="App">
       <BrowserRouter className="App">
          <NavBar></NavBar>

        <Routes>
            <Route path="/" element={<Pocetna proizvodi={proizvodi}></Pocetna>}></Route>
            <Route path="/kontakt" element={<Kontakt></Kontakt>}></Route>
        </Routes>
          <Footer> </Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
