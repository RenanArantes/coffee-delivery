import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 40px;
`
export const Title = styled.h1`
  font-size: 18px;
  font-weight: 700;
  font-family: 'Baloo 2', cursive;
  line-height: 23.4px;

  margin-bottom: 15px;
`
export const SubTitle = styled.text`
  font-size: 16px;
  line-height: 130%;

  color: ${(props) => props.theme['base-subtitle']};
`

const ContainerBase = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;

  padding: 40px;
`
export const AddressContainer = styled(ContainerBase)`
  height: 591px;
`

export const PaymentContainer = styled(ContainerBase)`
  margin-top: 12px;
`

export const TotalCoffeeContainer = styled(ContainerBase)`
  height: 498px;

  border-radius: 6px 36px;
  margin-left: 32px;
`
