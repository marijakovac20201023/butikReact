import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
       <BrowserRouter className="App">
          <NavBar></NavBar>
            <Footer> </Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
