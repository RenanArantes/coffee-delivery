import styled from 'styled-components'

export const HomeContainer = styled.main``

export const Title = styled.h1`
  color: ${(props) => props.theme['base-title']};
  font-weight: 800;
  font-size: 48px;
  line-height: 130%;

  font-family: 'Baloo 2', cursive;
`

export const Subtitle = styled.p`
  color: ${(props) => props.theme['base-subtitle']};
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  font-stretch: 100;

  margin-top: 16px;
`

export const ItensContainer = styled.div`
  //position: absolute;
  width: 567px;
  height: 84px;
  column-count: 2;
  column-gap: 50px;

  margin-top: 66px;
`
export const Item = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 20px;

  p {
    margin-left: 12px;
  }
`

export const IconContainer = styled.span`
  width: 32px;
  height: 32px;
  line-height: 38px;
  border-radius: 50%;
  text-align: center;

  color: ${(props) => props.theme.white};

  background: ${(props) =>
    (props.typeof === 'timer' && props.theme.yellow) ||
    (props.typeof === 'box' && props.theme['base-text']) ||
    (props.typeof === 'coffee' && props.theme.purple) ||
    (props.typeof === 'cart' && props.theme['yellow-dark'])};
`
