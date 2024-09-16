# Translator

The styled-components package was used as a entry point for **automatically translate** the lable of components.

To do this, a file was implemented with the main functions for translation:

### ./src/languages/main.ts

As example we style a component Button:

### ./src/components/Button.styles.ts

Note that was imported both, 'css' (as it is a styling file) and 'styled'.
The most important thing in this file is the definition of the button properties interface and not css:

```
interface ButtonContainerProps {
  language?: string
}
```

We will use it as a generic type in the Button definition in the same file:

```
export const ButtonContainer = styled.button<ButtonContainerProps>
```

**Note: Right after there are some stylizations in css for example purposes, but this is not so important here.**

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

The component button is ready to be used. As an example, was inserted it into the App component:

### ./App.tsx

```
  const language = 'en'

  ...

  <Button language={language} />  //with 'en' definition language above
  <Button />                      //With the default language setup in ./src/languages/main.ts
```

**Note: All possibles languages ​​are defined as a type in:**

 ### ./src/languages/main.ts

```
  export type languageFormats = 'pt' | 'en'

```

**And the translation made in the same file as defined by user:**

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
````