import React, { useState } from 'react'
import './Header.css'
import imageIcon from '../../assets/lupaIcon.png'
import {useOptionContext} from '../../hook/useOptionContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  
  const navigate = useNavigate();
  const {option} = useOptionContext();
  const [query, setQuery] = useState();

  const formSelector = () => {
    if(option === 'FUNCIONARIOS'){
      navigate("/funcionarios/form");
    }else if(option === "CATEGORIAS"){
      navigate("/categorias/form")
    }else if(option === "FORNECEDORES"){
      navigate("/fornecedores/form")
    }

  }

  const searchSelector = (e) => {
    e.preventDefault();
    if(option === 'FUNCIONARIOS'){
      navigate("/funcionarios/search?q="+query);
      setQuery('');
    }else  if(option === 'CATEGORIAS'){
      navigate("/categorias/search?q="+query);
      setQuery('');
    }else  if(option === 'FORNECEDORES'){
      navigate("/fornecedores/search?q="+query);
      setQuery('');
    }
  }

  return (
    <div className='ContainerHeader'>
        <button className='ButtonAdd' onClick={()=>formSelector()}>+</button>
        <form onSubmit={searchSelector} className='HeaderForm'>
            <input type="text" onChange={(e)=>setQuery(e.target.value)} value={query} className='HeaderInput' placeholder={'PESQUISAR POR '+option}/>
            <button type="submit" className='ButtonHeaderInput'><img src={imageIcon} alt="" className='ImageIconSearch' /></button>
        </form>
    </div>
  )
}

export default Header