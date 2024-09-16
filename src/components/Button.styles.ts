import styled, { css } from 'styled-components'

interface ButtonContainerProps {
  language?: string
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;

  ${() => {
    return css`
      background-color: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};
    `
  }}
`
