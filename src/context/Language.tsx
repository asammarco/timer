import { createContext, useState, ReactNode } from 'react'
import { LanguageFormats } from '../languages'

const defaultLanguage = 'en'

interface LanguageContextProps {
  language: LanguageFormats
  changeLanguage: (language: LanguageFormats) => void
}

export const LanguageContext = createContext<LanguageContextProps>({
  language: defaultLanguage,
  changeLanguage() {},
})

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<LanguageFormats>(defaultLanguage)

  function changeLanguage(language: LanguageFormats = defaultLanguage) {
    setLanguage(language)
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
