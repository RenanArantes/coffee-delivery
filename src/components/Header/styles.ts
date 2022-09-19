import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 6.5rem;
`

export const LocationContainer = styled.span`
  border-radius: 0.375rem;
  padding: 8px;

  color: ${(props) => props.theme['purple-dark']};
  background: ${(props) => props.theme['purple-light']};

  //align itens svg and text on center
  svg {
    margin-right: 4px;
    text-align: center;
    font-size: 14px;
    color: ${(props) => props.theme.purple};
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
export const CartNotification = styled.span`
  position: absolute;
  z-index: 1;
  top: 60px;
  right: auto;
  width: 20px;
  height: 20px;
  line-height: 22px;
  font-size: 14px;
  border-radius: 50%;
  text-align: center;
  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
`
