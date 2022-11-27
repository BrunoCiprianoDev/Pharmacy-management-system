import React, { useContext } from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'
import {OptionContext} from '../../context/OptionContext'

export const Navbar = () => {

  const {option, setOption} = useContext(OptionContext);

  return (
    <div className='MainContainerNavbar'>
      <div className='HeaderNavbar'></div>
      <div className='SideIcons'></div>
      <div className='ContainerNav'>
        <nav>
          <NavLink to="/funcionarios" onClick={()=>setOption('FUNCIONARIOS')} className='NavLink'>Funcionários</NavLink>
          <NavLink onClick={()=>setOption('CATEGORIAS')} className='NavLink' >Categorias</NavLink>
          <NavLink onClick={()=>setOption('MERCADORIAS')} className='NavLink'>Mercadorias</NavLink>
          <NavLink onClick={()=>setOption('FORNECEDORES')} className='NavLink'>Fornecedores</NavLink>
          <NavLink onClick={()=>setOption('COMPRAS')} className='NavLink'>Compras</NavLink>
          <NavLink onClick={()=>setOption('ESTOQUE')} className='NavLink'>Estoque</NavLink>
          <NavLink onClick={()=>setOption('CONSULTAR_PRECO')} className='NavLink'>Consultar preços</NavLink>
          <NavLink onClick={()=>setOption('VENDAS')} className='NavLink'>Vendas</NavLink>
          <NavLink onClick={()=>setOption('CLIENTES')} className='NavLink'>Clientes</NavLink>
          <NavLink onClick={()=>setOption('RELATORIOS')} className='NavLink'>Relatórios</NavLink>
          <NavLink onClick={()=>setOption('NOTIFICACOES')} className='NavLink'>Notificações</NavLink>
        </nav>
      </div>
    </div>
  )
}

export default Navbar