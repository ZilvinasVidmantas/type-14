import React from 'react'

export type NavbarLinkProps = {
  href: string,
  children: React.ReactNode,
  isDropdown?: boolean
}

const NavbarLink: React.FC<NavbarLinkProps> = ({
  href,
  children,
  isDropdown = false
}) => {
  return (
    <a href={href} className={`navbar-link ${isDropdown ? 'is-dropdown' : ''}`}>
      {children}
    </a>
  )
}

export default NavbarLink