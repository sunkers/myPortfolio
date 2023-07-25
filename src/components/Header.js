import React from 'react'
import { header, name, menu } from './Header.module.scss'

const Header = () => {
  return (
    <header className={header}>
      <div className={name}>MOUGIN Loïc</div>
      <div className={menu}>Menu</div>
    </header>
  )
}

export default Header
