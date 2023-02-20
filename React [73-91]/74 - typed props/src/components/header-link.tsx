import React from 'react'

export type HeaderLinkProps = {
  href: string,
  icon: string,
  children: React.ReactNode,
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ href, icon, children }) => {
  return (
    <a className="header__link" href={href}>
      <span>{children}</span>
    </a>
  )
}

export default HeaderLink;