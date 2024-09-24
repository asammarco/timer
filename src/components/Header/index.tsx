import { HeaderContainer } from './styles'
import { translator } from '../../languages/'
import { HTMLElement } from './language'

import logoIgnite from '../../assets/Logo.svg'
import { Scroll, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { LanguageContext } from '../../context/Language'

export function Header() {
  const { language } = useContext(LanguageContext)

  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />
      <nav>
        <NavLink
          to="/"
          title={translator(HTMLElement.navLinkTitleTimer, language)}
        >
          <Timer size={24} />
        </NavLink>
        <NavLink
          to="history"
          title={translator(HTMLElement.navLinkTitleHistory, language)}
        >
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
