import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from 'phosphor-react'
import { ChangeEvent, useState, MouseEvent, useContext } from 'react'
import { Link } from 'react-router-dom'
import expressoTradicional from '../../assets/expresso_tradicional.png'
import { CartContext } from '../../contexts/Cart'
import {
  AddressContainer,
  CheckoutContainer,
  PaymentContainer,
  TotalCoffeeContainer,
  Title,
  InfoAddress,
  SubTitle,
  InfoText,
  InfoPaymentType,
  MediumInput,
  LargeInput,
  SmallInput,
  OptionalPlaceholderContainer,
  SelectPaymentLabel,
  CoffeeItem,
  CoffeeListContainer,
  CoffeeInfo,
  CoffeeInfoButtonsContainer,
  ButtonSpanQuantity,
  ButtonSpanRemove,
  Button,
  Divisor,
  PricesContainer,
  ValueSpan,
  ValueSpanTotal,
  ButtonTotal,
  PaymentInput,
} from './styles'

export function Checkout() {
  const [paymentType, setPaymentType] = useState('')

  const {
    coffeesOnCart,
    cart,
    removeCoffeeFromCart,
    increaseCoffeeOnCartQuantity,
    decreaseCoffeeOnCartQuantity,
  } = useContext(CartContext)

  function handleSelected(e: ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value)

    setPaymentType(() => {
      return e.target.value
    })
  }

  return (
    <CheckoutContainer>
      <div>
        <Title>{String(paymentType)}</Title>
        <Title>Complete seu pedido</Title>
        <AddressContainer>
          <InfoAddress>
            <MapPinLine size={22} />
            <span>
              <SubTitle>Endereço da Entrega</SubTitle>
              <InfoText>
                Informe o endereço onde deseja receber seu pedido
              </InfoText>
            </span>
          </InfoAddress>
          <MediumInput style={{ marginBottom: '16px' }}>
            <input placeholder="CEP" />
          </MediumInput>

          <LargeInput style={{ marginBottom: '16px' }}>
            <input placeholder="Rua" />
          </LargeInput>

          <div style={{ display: 'flex', marginBottom: '16px' }}>
            <MediumInput style={{ marginRight: '12px' }}>
              <input placeholder="Número" />
            </MediumInput>
            <LargeInput>
              <OptionalPlaceholderContainer data-required="Opcional">
                <input placeholder="Complemento" />
              </OptionalPlaceholderContainer>
            </LargeInput>
          </div>
          <div style={{ display: 'flex' }}>
            <MediumInput style={{ marginRight: '12px' }}>
              <input placeholder="Bairro" />
            </MediumInput>
            <LargeInput style={{ marginRight: '12px' }} isOptional>
              <input placeholder="Cidade" />
            </LargeInput>
            <SmallInput>
              <input placeholder="UF" />
            </SmallInput>
          </div>
        </AddressContainer>
        <PaymentContainer>
          <InfoPaymentType>
            <CurrencyDollar />
            <span>
              <SubTitle>Pagamento</SubTitle>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </span>
          </InfoPaymentType>
          <div style={{ display: 'flex' }}>
            <PaymentInput
              type="radio"
              id="credit_card"
              name="payment_type"
              value="credit_card"
              onChange={handleSelected}
            />
            <SelectPaymentLabel htmlFor="credit_card">
              <CreditCard size={16} />
              CARTÃO DE CRÉDITO
            </SelectPaymentLabel>

            <PaymentInput
              type="radio"
              id="debit_card"
              name="payment_type"
              value="debit_card"
              onChange={handleSelected}
            />
            <SelectPaymentLabel htmlFor="debit_card">
              <Bank size={16} />
              CARTÃO DE DÉBITO
            </SelectPaymentLabel>

            <PaymentInput
              type="radio"
              id="specie"
              name="payment_type"
              value="specie"
              onChange={handleSelected}
            />
            <SelectPaymentLabel htmlFor="specie">
              <Money size={16} />
              DINHEIRO
            </SelectPaymentLabel>
          </div>
        </PaymentContainer>
      </div>

      <div>
        <Title>Cafés selecionados</Title>
        <TotalCoffeeContainer>
          {coffeesOnCart &&
            coffeesOnCart.map((coffee) => {
              return (
                <div key={coffee.name}>
                  <CoffeeItem>
                    <CoffeeListContainer>
                      <img src={coffee.url} alt={coffee.name} />
                      <CoffeeInfo>
                        <p>{coffee.name}</p>
                        <CoffeeInfoButtonsContainer>
                          <ButtonSpanQuantity>
                            <Button
                              type="button"
                              onClick={() =>
                                decreaseCoffeeOnCartQuantity(coffee.name)
                              }
                            >
                              <Minus size={14} />
                            </Button>
                            <span style={{ margin: '0px 9px' }}>
                              {coffee.quantity}
                            </span>
                            <Button
                              type="button"
                              onClick={() =>
                                increaseCoffeeOnCartQuantity(coffee.name)
                              }
                            >
                              <Plus size={14} />
                            </Button>
                          </ButtonSpanQuantity>
                          <ButtonSpanRemove>
                            <Button
                              type="button"
                              onClick={() => removeCoffeeFromCart(coffee.name)}
                            >
                              <Trash size={14} color={'#8047F8'} /> Remover
                            </Button>
                          </ButtonSpanRemove>
                        </CoffeeInfoButtonsContainer>
                      </CoffeeInfo>
                    </CoffeeListContainer>
                    <div>
                      <h3 style={{ fontSize: '16px', fontWeight: '700' }}>
                        R$ {coffee.price}0
                      </h3>
                    </div>
                  </CoffeeItem>
                  <Divisor />
                </div>
              )
            })}
          <PricesContainer>
            <ValueSpan>
              <span>Total de itens</span>
              <span>R$ 9,90</span>
            </ValueSpan>
            <ValueSpan>
              <span>Entrega</span>
              <span>R$ 2,00</span>
            </ValueSpan>
            <ValueSpanTotal>
              <span>Total</span>
              <span>R$ 11,90</span>
            </ValueSpanTotal>
            <Link to="/success">
              <ButtonTotal type="submit">
                <span>CONFIRMAR PEDIDO</span>
              </ButtonTotal>
            </Link>
          </PricesContainer>
        </TotalCoffeeContainer>
      </div>
    </CheckoutContainer>
  )
}
