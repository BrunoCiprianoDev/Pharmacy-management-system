import React from 'react'
import './Header.css'
import imageIcon from '../../assets/lupaIcon.png'
const Header = () => {
  return (
    <div className='ContainerHeader'>
        <button className='ButtonAdd'>+</button>
        <form className='HeaderForm'>
            <input type="text" className='HeaderInput' placeholder='Pesquisar...'/>
            <button type="submit" className='ButtonHeaderInput'><img src={imageIcon} alt="" className='ImageIconSearch' /></button>
        </form>
    </div>
  )
}

export default Header