import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

import { LayoutContainer } from './styles'

const defaultLanguage = 'en'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header language={defaultLanguage} />
      <Outlet />
    </LayoutContainer>
  )
}

// Outled - espaço em que a aplicação irá inserir os outros conteúdos
