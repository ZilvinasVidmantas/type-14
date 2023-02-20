import React from 'react'
import HeaderLink from './header-link'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing.</span>
          <span className="header__divider"></span>
          <HeaderLink href="mailto:banys@katorga.lt" icon="envelope">banys@katorga.lt</HeaderLink>
          <span className="header__divider"></span>
          <HeaderLink href="tel:+370 57481265" icon="telephone-fill">+370 57481265</HeaderLink>
        </div>
      </div>
    </header>
  )
}

export default Header