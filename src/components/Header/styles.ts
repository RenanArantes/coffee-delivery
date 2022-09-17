import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 2rem 10rem;
  height: 6.5rem;

  @media (max-width: 75.75rem) {
    margin: 2rem 4rem;
  }
`

export const LocationContainer = styled.span`
  border-radius: 0.375rem;
  padding: 8px;

  color: ${(props) => props.theme.purple};
  background: ${(props) => props.theme['purple-light']};

  //align itens svg and text on center
  svg {
    text-align: center;
    vertical-align: middle;
  }
`
export const CartContainer = styled.span`
  border-radius: 0.375rem;
  margin-left: 0.75rem;
  padding: 8px;

  color: ${(props) => props.theme.yellow};
  background: ${(props) => props.theme['yellow-light']};

  //align itens svg and text on center
  svg {
    text-align: center;
    vertical-align: middle;
  }
`
