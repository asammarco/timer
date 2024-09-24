import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './components/Router'
import { BrowserRouter } from 'react-router-dom'
import { LanguageProvider } from './context/Language'
import { CyclesContextProvider } from './context/CyclesContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <LanguageProvider>
        <BrowserRouter>
          <CyclesContextProvider>
            <Router />
          </CyclesContextProvider>
        </BrowserRouter>
      </LanguageProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
