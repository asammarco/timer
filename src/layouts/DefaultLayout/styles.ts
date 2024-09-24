import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;

  background: ${(props) => props.theme['gray-800']};

  border-radius: 8px;

  display: flex;
  flex-direction: column;
`

export const SelectLanguage = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: right;
  margin-top: calc(0px - 1rem);
  margin-bottom: 1rem;

  select {
    background: ${(props) => props.theme['gray-800']};
    height: 2rem;
    border: 0;
    border-bottom: 2px solid ${(props) => props.theme['gray-500']};
    font-weight: bold;
    font-size: 1.125rem;
    padding: 0 0.5rem;
    color: ${(props) => props.theme['gray-100']};
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;

    &:focus {
      box-shadow: none;
      border-color: ${(props) => props.theme['green-500']};
    }

    option {
      background-color: ${(props) => props.theme['gray-700']};
    }
  }
`
