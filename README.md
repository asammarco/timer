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