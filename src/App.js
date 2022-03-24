import logo from './logo.svg';
import './App.css';
 
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Pocetna from './components/Pocetna';
import Kontakt from './components/Kontakt';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Korpa from './components/Korpa';

function App() {

  //niz proizvoda koji su u korpi
  const [uKorpi,setUKorpi] = useState([]);
  const [ukupnaCena,setUkupnaCena] = useState(0);
  const [brProzivoda,setBrProizvoda] = useState(0);
  function osvezi(){
    
    let nizProizvodaUKorpi = proizvodi.filter((p) =>p.kolicina>0);
    setUKorpi(nizProizvodaUKorpi);
    izracunajUkupnuCenu();
  }
  function dodajUKorpu(id){
        setBrProizvoda(brProzivoda+1);

        proizvodi.forEach((p)=>{
           
          if(p.id===id){
              p.kolicina++;
              p.ukupno=p.cena*p.kolicina
              osvezi();
          }
        })
     
    

  }
  function izbaciIzKorpe(id){
    setBrProizvoda(brProzivoda-1);

    proizvodi.forEach((p)=>{
       
      if(p.id===id){
          p.kolicina--;
          p.ukupno=p.cena*p.kolicina
          osvezi();
      }
    })



}
  function izracunajUkupnuCenu(){
   
   
    proizvodi.forEach((p)=>{
            
           if(p.kolicina>0){
             
                setUkupnaCena(ukupnaCena+p.ukupno)
           }
          
    })
  }
  const [proizvodi]= useState([ //niz proizvoda u ponudi
        {
            id:1,
            slika: "https://static.vesti.rs/slike-3/Internet-prodaja-odece-prevara-ili-ne.jpg",
            prodavnica: "ZARA",
            naziv: "komplet S",
            velicina: "S",
            opis:"Lorem dsadsa dsa das das d as d asd a d asd as d a das sd  ads",
            cena: 100,
            kolicina:0, 
            ukupno:0
        },
        {
          id:2,
          slika: "https://www.fashionandfriends.com/pub/media/catalog/product/cache/67eb99f26f3721ba9aa4712a229cdf1d/L/V/LV18882-0276-1.jpg",
          prodavnica: "Bershka",
          naziv: "farmerke",
          velicina: "34",
          opis:"Lorem dsadsa dsa das das d as d asd a d asd as d a das sd  ads",
          cena: 200,
          kolicina:0,
          ukupno:0
        },
        {
          id:3,
          slika: "https://static.vesti.rs/slike-3/Internet-prodaja-odece-prevara-ili-ne.jpg",
          prodavnica: "NY",
          naziv: "haljina",
          velicina: "S",
          opis:"Lorem dsadsa dsa das das d as d asd a d asd as d a das sd  ads",
          cena: 600,
          kolicina:0,
          ukupno:0
       },
       {
        id:4,
        slika: "https://static.vesti.rs/slike-3/Internet-prodaja-odece-prevara-ili-ne.jpg",
        prodavnica: "ZARA",
        naziv: "komplet M",
        velicina: "M",
        opis:"Lorem dsadsa dsa das das d as d asd a d asd as d a das sd  ads",
        cena: 160,
        kolicina:0,
        ukupno:0
    },
    {
      id:5,
      slika: "https://www.fashionandfriends.com/pub/media/catalog/product/cache/67eb99f26f3721ba9aa4712a229cdf1d/L/V/LV18882-0276-1.jpg",
      prodavnica: "Bershka",
      naziv: "farmerke",
      velicina: "34",
      opis:"Lorem dsadsa dsa das das d as d asd a d asd as d a das sd  ads",
      cena: 260,
      kolicina:0,
      ukupno:0
    },
    {
      id:6,
      slika: "https://static.vesti.rs/slike-3/Internet-prodaja-odece-prevara-ili-ne.jpg",
      prodavnica: "NY",
      naziv: "haljina",
      velicina: "S",
      opis:"Lorem dsadsa dsa das das d as d asd a d asd as d a das sd  ads",
      cena: 170,
      kolicina:0,
      ukupno:0
   },

  ]);

  return (
    <div className="App">
       <BrowserRouter className="App">
          <NavBar></NavBar>

        <Routes>
            <Route path="/" element={<Pocetna proizvodi={proizvodi} dodajUKorpu={dodajUKorpu}></Pocetna>}></Route>
            <Route path="/kontakt" element={<Kontakt></Kontakt>}></Route>
            <Route path="/korpa" element={ <Korpa uKorpi={uKorpi} ukupnaCena={ukupnaCena} dodajUKorpu={dodajUKorpu} izbaciIzKorpe={izbaciIzKorpe}></Korpa>}></Route>
        </Routes>
          <Footer> </Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
