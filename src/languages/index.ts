export type LanguageFormats = 'pt' | 'en'

export interface ElementTranslator {
  language: LanguageFormats
  value: string
}

export const translator = (
  element: ReadonlyArray<ElementTranslator>,
  language: string,
) => {
  return element.find((e) => e.language == language)?.value
}
