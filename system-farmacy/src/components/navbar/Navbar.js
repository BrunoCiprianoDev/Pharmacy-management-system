import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='MainContainerNavbar'>
      <div className='HeaderNavbar'></div>
      <div className='SideIcons'></div>
      <div className='ContainerNav'>
        <nav>
          <NavLink to="/funcionarios" className='NavLink'>Funcionários</NavLink>
          <NavLink className='NavLink'>Categorias</NavLink>
          <NavLink className='NavLink'>Mercadorias</NavLink>
          <NavLink className='NavLink'>Fornecedores</NavLink>
          <NavLink className='NavLink'>Compras</NavLink>
          <NavLink className='NavLink'>Estoque</NavLink>
          <NavLink className='NavLink'>Consultar preços</NavLink>
          <NavLink className='NavLink'>Vendas</NavLink>
          <NavLink className='NavLink'>Clientes</NavLink>
          <NavLink className='NavLink'>Relatórios</NavLink>
          <NavLink className='NavLink'>Notificações</NavLink>
        </nav>
      </div>
    </div>
  )
}

export default Navbar