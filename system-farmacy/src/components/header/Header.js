import React from 'react'
import './Header.css'
import imageIcon from '../../assets/lupaIcon.png'
import {useOptionContext} from '../../hook/useOptionContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  
  const navigate = useNavigate();
  const {option} = useOptionContext();

  const formSelector = () => {
    if(option === 'FUNCIONARIOS'){
      navigate("/funcionarios/form");
    }
  }

  return (
    <div className='ContainerHeader'>
        <button className='ButtonAdd' onClick={()=>formSelector()}>+</button>
        <form className='HeaderForm'>
            <input type="text" className='HeaderInput' placeholder={'PESQUISAR POR '+option}/>
            <button type="submit" className='ButtonHeaderInput'><img src={imageIcon} alt="" className='ImageIconSearch' /></button>
        </form>
    </div>
  )
}

export default Header