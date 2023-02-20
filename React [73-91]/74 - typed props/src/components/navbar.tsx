import React from 'react'
import NavbarLink from './navbar-link'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-links">
          <NavbarLink href="/">Home</NavbarLink>
          <NavbarLink href="/" isDropdown>Pages</NavbarLink>
          <NavbarLink href="/">Services</NavbarLink>
          <NavbarLink href="/">Contacts</NavbarLink>
          <NavbarLink href="/">About us</NavbarLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar