import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <div className="Header"><Header/></div>
        <div className="Sidebar"><Navbar/></div>
        <div className="Contend"></div>
        </BrowserRouter>

    </div>
  );
}

export default App;
