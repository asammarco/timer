# Translator

We are using styled-components package as a entry point for component translator.

To do this, we implement a file with the main functions for translation:

### ./src/languages/main.ts

As example we style a component Button:

### ./src/components/Button.styles.ts

Note that we import both 'css' (as it is a styling file) and 'styled'.
The most important thing here is the definition of the button properties interface:

```
interface ButtonContainerProps {
  language?: string
}
```

We will use it as a generic type in the Button definition:

```
export const ButtonContainer = styled.button<ButtonContainerProps>
```

** Note: Right after there are some stylizations in css for example purposes, but this is not so important here. **

Finally, let's analyze what the code for the button component in question looks like:

### ./src/components/Button.ts

```
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
```

The component button is ready to be used. As an example, we insert it into the App component:

### ./App.tsx

```
  const language = 'en'

  ...

  <Button language={language} />  //with 'en' definition language
  <Button />                      //With the default language set to ./src/languages/main.ts
```

** All possibles languages ​​are defined in ./src/languages/main.ts **

```
  export type languageFormats = 'pt' | 'en'

```

And the translation made in the same file in

````
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
```