import { ButtonContainer } from './Button.styles'
import { languageFormats, elementHtml, translator } from '../languages/main'

interface ButtonProps {
  language?: languageFormats
}

export function Button({ language }: ButtonProps) {
  return (
    <ButtonContainer language={language}>
      {translator(elementHtml.btnEnviar, language)}
    </ButtonContainer>
  )
}
