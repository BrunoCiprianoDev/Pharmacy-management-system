import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import FuncionariosList from './pages/funcionarios/listaFuncionarios/FuncionariosList';
import FuncionarioDetalhes from './pages/funcionarios/detalheFuncionario/FuncionarioDetalhes';
import FormFuncionarios from './pages/funcionarios/formFuncionarios/FormFuncionarios';
import FuncionarioSearch from './pages/funcionarios/searchFuncionario/FuncionarioSearch';
import CategoriasList from './pages/categorias/listaCategorias/CategoriasList';
import CategoriaDetalhes from './pages/categorias/detalheCategoria/CategoriaDetalhes';
import FormCategorias from './pages/categorias/formCategorias/FormCategorias';
import CategoriaSearch from './pages/categorias/searchCategoria/CategoriaSearch';
import FornecedoresList from './pages/fornecedores/listaFornecedores/FornecedoresList';
import FornecedorDetalhes from './pages/fornecedores/detalheFornecedores/FornecedorDetalhes';
import FormFornecedores from './pages/fornecedores/formFornecedores/FormFornecedores';
import SearchFornecedores from './pages/fornecedores/searchFornecedores/SearchFornecedoresList';

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

            <Route path="/categorias/" element={<CategoriasList/>}/>
            <Route path="/categorias/:id" element={<CategoriaDetalhes/>}/>
            <Route path="/categorias/form" element={<FormCategorias/>}/>
            <Route path="/categorias/search" element={<CategoriaSearch/>}/>

            <Route path="/fornecedores/" element={<FornecedoresList/>}/>
            <Route path="/fornecedores/:id" element={<FornecedorDetalhes/>}/>
            <Route path="/fornecedores/form" element={<FormFornecedores/>}/>
            <Route path="/fornecedores/search" element={<SearchFornecedores/>}/>
          </Routes>
        </div>
        </BrowserRouter>

    </div>
  );
}

export default App;
