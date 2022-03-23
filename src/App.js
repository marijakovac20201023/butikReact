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
            naziv: "komplet",
            velicina: "S",
            opis:"Lorem dsadsa dsa das das d as d asd a d asd as d a das sd  ads",
            cena: 100,
        },
        {
          id:2,
          slika: "https://www.fashionandfriends.com/pub/media/catalog/product/cache/67eb99f26f3721ba9aa4712a229cdf1d/L/V/LV18882-0276-1.jpg",
          prodavnica: "Bershka",
          naziv: "farmerke",
          velicina: "34",
          opis:"Lorem dsadsa dsa das das d as d asd a d asd as d a das sd  ads",
          cena: 200,
        },
        {
          id:3,
          slika: "https://static.vesti.rs/slike-3/Internet-prodaja-odece-prevara-ili-ne.jpg",
          prodavnica: "NY",
          naziv: "haljina",
          velicina: "S",
          opis:"Lorem dsadsa dsa das das d as d asd a d asd as d a das sd  ads",
          cena: 600,
       },
       {
        id:4,
        slika: "https://static.vesti.rs/slike-3/Internet-prodaja-odece-prevara-ili-ne.jpg",
        prodavnica: "ZARA",
        naziv: "komplet",
        velicina: "S",
        opis:"Lorem dsadsa dsa das das d as d asd a d asd as d a das sd  ads",
        cena: 160,
    },
    {
      id:5,
      slika: "https://www.fashionandfriends.com/pub/media/catalog/product/cache/67eb99f26f3721ba9aa4712a229cdf1d/L/V/LV18882-0276-1.jpg",
      prodavnica: "Bershka",
      naziv: "farmerke",
      velicina: "34",
      opis:"Lorem dsadsa dsa das das d as d asd a d asd as d a das sd  ads",
      cena: 260,
    },
    {
      id:6,
      slika: "https://static.vesti.rs/slike-3/Internet-prodaja-odece-prevara-ili-ne.jpg",
      prodavnica: "NY",
      naziv: "haljina",
      velicina: "S",
      opis:"Lorem dsadsa dsa das das d as d asd a d asd as d a das sd  ads",
      cena: 170,
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
