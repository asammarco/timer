import { HeaderContainer } from './styles'
import { languageFormats, elementHtml, translator } from '../../languages/main'

import logoIgnite from '../../assets/Logo.svg'
import { Scroll, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

interface HeaderProps {
  language?: languageFormats
}

export function Header({ language }: HeaderProps) {
  return (
    <HeaderContainer language={language}>
      <img src={logoIgnite} alt="" />
      <nav>
        <NavLink
          to="/"
          title={translator(elementHtml.navLinkTitleTimer, language)}
        >
          <Timer size={24} />
        </NavLink>
        <NavLink
          to="history"
          title={translator(elementHtml.navLinkTitleHistory, language)}
        >
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
