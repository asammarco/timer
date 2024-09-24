import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer, SelectLanguage } from './styles'
import { ChangeEvent, useContext } from 'react'
import { LanguageContext } from '../../context/Language'
import { LanguageFormats } from '../../languages'

interface LanguageEventTarget extends HTMLSelectElement {
  value: LanguageFormats
}

export function DefaultLayout() {
  const { language, changeLanguage } = useContext(LanguageContext)

  function handleOnChangeLanguage(event: ChangeEvent<LanguageEventTarget>) {
    changeLanguage(event.target.value)
  }

  return (
    <LayoutContainer>
      <SelectLanguage>
        <select
          onChange={handleOnChangeLanguage}
          id="language"
          defaultValue={language}
        >
          <option value="pt">Português</option>
          <option value="en">English</option>
        </select>
      </SelectLanguage>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}

// Outled - espaço em que a aplicação irá inserir os outros conteúdos
