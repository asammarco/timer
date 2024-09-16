export type languageFormats = 'pt' | 'en'

const defaultLanguage = 'pt'

interface ElementTranslator {
  language: string
  label: string
}

export const translator = (
  element: Array<ElementTranslator>,
  language: languageFormats = defaultLanguage,
) => {
  return element.filter((props) => props.language == language)[0].label
}

export const elementHtml = {
  btnEnviar: [
    {
      language: 'pt',
      label: 'Enviar',
    },
    {
      language: 'en',
      label: 'Send',
    },
  ],
}
