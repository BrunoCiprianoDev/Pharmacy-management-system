import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='ContainerHeader'>
        <button className='ButtonAdd'>+</button>
        <form className='HeaderForm'>
            <input type="text" className='HeaderInput' placeholder='Pesquisar...'/>
            <input type="submit" className='ButtonHeaderInput' />
        </form>
    </div>
  )
}

export default Header