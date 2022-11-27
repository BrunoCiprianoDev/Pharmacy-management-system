import React from 'react'
import './Header.css'
import imageIcon from '../../assets/lupaIcon.png'
import {useOptionContext} from '../../hook/useOptionContext';

const Header = () => {

  const {option} = useOptionContext();

  return (
    <div className='ContainerHeader'>
        <button className='ButtonAdd'>+</button>
        <form className='HeaderForm'>
            <input type="text" className='HeaderInput' placeholder={'PESQUISAR POR '+option}/>
            <button type="submit" className='ButtonHeaderInput'><img src={imageIcon} alt="" className='ImageIconSearch' /></button>
        </form>
    </div>
  )
}

export default Header