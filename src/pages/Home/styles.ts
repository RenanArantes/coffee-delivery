import styled from 'styled-components'

export const HomeContainer = styled.main`
  padding: 0 20px;
`

export const IntroContainer = styled.div`
  display: flex;
  margin-top: 6.5rem;
  //columns: 2;
`
export const ItensContainer = styled.div`
  float: 'left';
`

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

export const IconsContainer = styled.div`
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

export const CoffeeListContainer = styled.div`
  width: 256px;
  height: 310px;
  border-radius: 6px 36px;

  background: ${(props) => props.theme['base-card']};
`
export const CoffeeTitle = styled.h1`
  font-size: 32px;
  font-family: 'Baloo 2', cursive;
  line-height: 130%;

  margin-bottom: 54px;
  color: ${(props) => props.theme['base-subtitle']};
`

export const CoffeeList = styled.ul`
  list-style: none;
  display: absolute;
`

export const CoffeeImage = styled.img`
  height: 120px;
  width: 120px;
  margin-left: 68px;
  margin-top: -20px;
`

export const CoffeeItem = styled.li`
  position: absolute;

  width: 256px;
  height: 310px;
`
export const CoffeeCategoryContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const CoffeeCategory = styled.span`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};

  display: flex;
  float: inline-end;
  padding: 4px 8px;
  margin: 0px 4px;

  height: 21px;

  font-size: 10px;
  line-height: 130%;
  font-weight: 700;

  border-radius: 100px;
`
export const CoffeeItemTitle = styled.h1`
  font-size: 20px;
  font-family: 'Baloo 2', cursive;
  margin: 8px 20px;
  text-align: center;

  color: ${(props) => props.theme['base-subtitle']};
`
export const CoffeeItemSubtitle = styled.p`
  font-size: 14px;
  line-height: 18.2px;
  margin: 0 20px;
  text-align: center;

  color: ${(props) => props.theme['base-label']};
`

export const ValueContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 38px;

  margin: 40px 20px 24px 24px;

  span {
    font-size: 14px;
  }
`
export const Price = styled.label`
  font-size: 24px;
  font-family: 'Baloo 2', cursive;
`
export const CoffeeQuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  gap: 4px;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  width: 72px;
  height: 38px;
  top: 50%;
  margin: auto;
`
const BaseQuantityButton = styled.button`
  color: ${(props) => props.theme.purple};
  border: 0;
  background: transparent;
`
export const DecreaseButton = styled(BaseQuantityButton)``
export const IncreaseButton = styled(BaseQuantityButton)`
  font-size: 14px;
`
export const ShoppingCartSimpleContainer = styled.span`
  background: ${(props) => props.theme['purple-dark']};
  border-radius: 6px;
  padding: 8px;
  width: 38px;
  height: 38px;

  svg {
    color: ${(props) => props.theme['base-button']};
  }
`
