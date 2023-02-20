import React from 'react'

export type HeaderLinkProps = {
  href: string,
  icon: string,
  children: React.ReactNode,
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ href, icon, children }) => {
  return (
    <a className="header__link" href={href}>
      <span className="header__icon"><i className={`bi bi-${icon}`}></i></span>
      <span>{children}</span>
    </a>
  )
}

export default HeaderLink