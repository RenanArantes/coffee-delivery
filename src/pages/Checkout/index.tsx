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
import coffee from '../../assets/coffee.png'
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
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
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
          <div>
            <span>
              <CreditCard /> CARTÃO DE CRÉDITO
            </span>
            <span>
              <Bank /> CARTÃO DE DÉBITO
            </span>
            <span>
              <Money /> DINHEIRO
            </span>
          </div>
        </PaymentContainer>
      </div>

      <div>
        <Title>Cafés selecionados</Title>
        <TotalCoffeeContainer>
          <img src={coffee} alt="coffee_name" />
          <div>
            <span>Expresso Tradicional</span>
            <span>
              <Minus />
              1
              <Plus />
            </span>
            <span>
              <Trash /> Remover
            </span>
          </div>
          <div>
            <span>
              <span>Total de itens</span>
              <span>R$ 9,90</span>
            </span>
            <span>
              <span>Entrega</span>
              <span>R$ 2,00</span>
            </span>
            <span>
              <strong>
                <span>Total</span>
                <span>R$ 11,90</span>
              </strong>
            </span>
            <div>
              <button type="submit">Confirmar Pedido</button>
            </div>
          </div>
        </TotalCoffeeContainer>
      </div>
    </CheckoutContainer>
  )
}
