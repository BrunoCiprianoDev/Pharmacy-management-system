import React, { useContext } from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'
import {OptionContext} from '../../context/OptionContext'

export const Navbar = () => {

  const {option, setOption} = useContext(OptionContext);

  return (
    <div className='MainContainerNavbar'>
      <div className='HeaderNavbar'></div>
      <div className='SideIcons'>
      </div>
      <div className='ContainerNav'>
        <nav>
          <NavLink to="/funcionarios" onClick={()=>setOption('FUNCIONARIOS')} className={option === 'FUNCIONARIOS' ?  'NavLinkActive': 'NavLink'}>Funcionários</NavLink>
          <NavLink onClick={()=>setOption('CATEGORIAS')} className={option === 'CATEGORIAS' ? 'NavLinkActive' : 'NavLink'} >Categorias</NavLink>
          <NavLink onClick={()=>setOption('MERCADORIAS')} className={option === 'MERCADORIAS' ? 'NavLinkActive' : 'NavLink'}>Mercadorias</NavLink>
          <NavLink onClick={()=>setOption('FORNECEDORES')} className={option === 'FORNECEDORES' ? 'NavLinkActive' : 'NavLink'}>Fornecedores</NavLink>
          <NavLink onClick={()=>setOption('COMPRAS')} className={option === 'COMPRAS' ? 'NavLinkActive' : 'NavLink'}>Compras</NavLink>
          <NavLink onClick={()=>setOption('ESTOQUE')} className={option === 'ESTOQUE' ? 'NavLinkActive' : 'NavLink'}>Estoque</NavLink>
          <NavLink onClick={()=>setOption('CONSULTAR_PRECO')} className={option === 'CONSULTAR_PRECO' ? 'NavLinkActive' : 'NavLink'}>Consultar preços</NavLink>
          <NavLink onClick={()=>setOption('VENDAS')} className={option === 'VENDAS' ? 'NavLinkActive' : 'NavLink'}>Vendas</NavLink>
          <NavLink onClick={()=>setOption('CLIENTES')} className={option === 'CLIENTES' ? 'NavLinkActive' : 'NavLink'}>Clientes</NavLink>
          <NavLink onClick={()=>setOption('RELATORIOS')} className={option === 'RELATORIOS' ? 'NavLinkActive' : 'NavLink'}>Relatórios</NavLink>
          <NavLink onClick={()=>setOption('NOTIFICACOES')} className={option === 'NOTIFICACOES' ?  'NavLinkActive': 'NavLink'}>Notificações</NavLink>
        </nav>
      </div>
    </div>
  )
}

export default Navbar