import styled, { css } from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 40px;
`

const ContainerBase = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;

  padding: 40px;
`
export const AddressContainer = styled(ContainerBase)`
  max-width: 640px;
  margin-right: 32px;
  height: 372px;
`

export const PaymentContainer = styled(ContainerBase)`
  margin-top: 12px;
  margin-right: 32px;
`

export const TotalCoffeeContainer = styled(ContainerBase)`
  max-width: 448px;
  min-height: 498px;

  border-radius: 6px 36px;
`

const InfoContainerBase = styled.span`
  display: flex;
  gap: 8px;
  margin-bottom: 32px;
`

export const InfoAddress = styled(InfoContainerBase)`
  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`
export const InfoPaymentType = styled(InfoContainerBase)`
  svg {
    color: ${(props) => props.theme.purple};
  }
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
export const InfoText = styled.p`
  font-size: 14px;
  line-height: 130%;
`
interface LargeInputProps {
  isOptional?: boolean
}

export const BaseInputLabel = styled.span<LargeInputProps>`
  display: inline-block; //faz o span aceitar as dimensoes de tamanho

  padding: 12px;
  height: 42px;

  background: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;

  input {
    border: none;
    background: transparent;

    outline-style: hidden;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }

  input:focus {
    outline: none;
  }
`
export const SmallInput = styled(BaseInputLabel)`
  max-width: 60px;

  input {
    max-width: 100%;
  }
`

export const MediumInput = styled(BaseInputLabel)`
  max-width: 200px;
`

export const LargeInput = styled(BaseInputLabel)`
  width: 100%;
  min-width: 30%;

  input {
    width: 100%;
  }
`
export const OptionalPlaceholderContainer = styled.div`
  position: relative;

  &::after {
    content: attr(data-required);
    position: absolute;
    right: 8px;
    top: 50%;
    font-style: italic;
    font-size: 12px;
    transform: translateY(-50%);
    color: #ccc;
  }
`
export const PaymentInput = styled.input`
  display: none;

  :checked + label {
    border: solid 2px ${(props) => props.theme.purple};
    background: ${(props) => props.theme['purple-light']};
  }
`

export const SelectPaymentLabel = styled.label`
  display: flex;

  width: 179px;
  height: 51px;
  padding: 16px;
  margin-right: 12px;

  align-items: center;
  align-content: center;

  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};
  border: solid 1px ${(props) => props.theme['base-button']};

  font-size: 12px;

  &:last-child {
    margin-right: 0;
  }

  svg {
    margin-right: 12px;

    color: ${(props) => props.theme.purple};
  }

  transition: 0.3s;

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
`

export const CoffeeItem = styled.div`
  display: flex;
  justify-content: space-between;

  min-width: 368px;
  height: 80px;
`

export const CoffeeListContainer = styled.div`
  display: flex;

  img {
    width: 64px;
    height: 64px;

    margin-right: 20px;
  }

  p {
    font-size: 16px;
  }
`
export const CoffeeInfo = styled.div`
  height: 61px;
  display: flex;
  flex-direction: column;
`
export const CoffeeInfoButtonsContainer = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: flex-start;
`
const ButtonSpanBase = styled.span`
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};
  padding: 9px;
`
export const ButtonSpanQuantity = styled(ButtonSpanBase)``

export const ButtonSpanRemove = styled(ButtonSpanBase)`
  margin-left: 8px;
`

export const Button = styled.button`
  border: none;
  outline: none;
  background: transparent;
`
export const Divisor = styled.hr`
  margin: 24px 0;
  border: solid 1px ${(props) => props.theme['base-button']};
`
export const PricesContainer = styled.div`
  display: grid;
`
export const ValueSpan = styled.span`
  display: flex;
  justify-content: space-between;

  font-size: 14px;

  span:last-child {
    font-size: 1rem;
  }

  margin-bottom: 12px;
`

export const ValueSpanTotal = styled(ValueSpan)`
  font-weight: 700;

  font-size: 20px;

  span:last-child {
    font-size: 26px;
  }
`
export const ButtonTotal = styled.button`
  border-radius: 6px;
  height: 46px;

  border: solid 1px ${(props) => props.theme.yellow};
  background: ${(props) => props.theme.yellow};

  transition: 0.3s;

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }

  span {
    font-size: 14px;
    font-weight: 700;
    line-height: 160%;

    color: ${(props) => props.theme.white};
  }
`
