import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import FuncionariosList from './pages/funcionarios/listaFuncionarios/FuncionariosList';
import FuncionarioDetalhes from './pages/funcionarios/detalheFuncionario/FuncionarioDetalhes';
import FormFuncionarios from './pages/funcionarios/formFuncionarios/FormFuncionarios';
import FuncionarioSearch from './pages/funcionarios/searchFuncionario/FuncionarioSearch';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <div className="Header"><Header/></div>
        <div className="Sidebar"><Navbar/></div>
        <div className="Contend">
          <Routes>
            <Route path="/funcionarios" element={<FuncionariosList />} />
            <Route path="/funcionarios/:id" element={<FuncionarioDetalhes/>}/>
            <Route path="/funcionarios/form" element={<FormFuncionarios/>}/>
            <Route path="/funcionarios/search" element={<FuncionarioSearch/>}/>
          </Routes>
        </div>
        </BrowserRouter>

    </div>
  );
}

export default App;
