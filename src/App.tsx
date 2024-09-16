import { ThemeProvider } from 'styled-components'
import { Button } from './components/Button'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  const language = 'en'

  return (
    <ThemeProvider theme={defaultTheme}>
      <Button language={language} />
      <Button />
      <Button language={language} />
      <Button />
      <Button language={language} />

      <GlobalStyle />
    </ThemeProvider>
  )
}
