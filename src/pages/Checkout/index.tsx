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
          <div style={{ display: 'flex' }}>
            <SelectPaymentLabel>
              <CreditCard size={16} /> CARTÃO DE CRÉDITO
            </SelectPaymentLabel>
            <SelectPaymentLabel>
              <Bank size={16} /> CARTÃO DE DÉBITO
            </SelectPaymentLabel>
            <SelectPaymentLabel>
              <Money size={16} /> DINHEIRO
            </SelectPaymentLabel>
          </div>
        </PaymentContainer>
      </div>

      <div>
        <Title>Cafés selecionados</Title>
        <TotalCoffeeContainer>
          <CoffeeItem>
            <CoffeeListContainer>
              <img src={coffee} alt="coffee_name" />
              <CoffeeInfo>
                <p>Expresso Tradicional</p>
                <CoffeeInfoButtonsContainer>
                  <ButtonSpanQuantity>
                    <Button type="button">
                      <Minus size={14} color={'#8047F8'} />
                    </Button>
                    <span style={{ margin: '0px 9px' }}>1</span>
                    <Button type="button">
                      <Plus size={14} color={'#8047F8'} />
                    </Button>
                  </ButtonSpanQuantity>
                  <ButtonSpanRemove>
                    <Button type="button">
                      <Trash size={14} color={'#8047F8'} /> Remover
                    </Button>
                  </ButtonSpanRemove>
                </CoffeeInfoButtonsContainer>
              </CoffeeInfo>
            </CoffeeListContainer>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '700' }}>R$ 9,90</h3>
            </div>
          </CoffeeItem>
          <Divisor />
          <CoffeeItem>
            <CoffeeListContainer>
              <img src={coffee} alt="coffee_name" />
              <CoffeeInfo>
                <p>Expresso Tradicional</p>
                <CoffeeInfoButtonsContainer>
                  <ButtonSpanQuantity>
                    <Button type="button">
                      <Minus size={14} color={'#8047F8'} />
                    </Button>
                    <span style={{ margin: '0px 9px' }}>1</span>
                    <Button type="button">
                      <Plus size={14} color={'#8047F8'} />
                    </Button>
                  </ButtonSpanQuantity>
                  <ButtonSpanRemove>
                    <Button type="button">
                      <Trash size={14} color={'#8047F8'} /> Remover
                    </Button>
                  </ButtonSpanRemove>
                </CoffeeInfoButtonsContainer>
              </CoffeeInfo>
            </CoffeeListContainer>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '700' }}>R$ 9,90</h3>
            </div>
          </CoffeeItem>
          <Divisor />
          <CoffeeItem>
            <CoffeeListContainer>
              <img src={coffee} alt="coffee_name" />
              <CoffeeInfo>
                <p>Expresso Tradicional</p>
                <CoffeeInfoButtonsContainer>
                  <ButtonSpanQuantity>
                    <Button type="button">
                      <Minus size={14} color={'#8047F8'} />
                    </Button>
                    <span style={{ margin: '0px 9px' }}>1</span>
                    <Button type="button">
                      <Plus size={14} color={'#8047F8'} />
                    </Button>
                  </ButtonSpanQuantity>
                  <ButtonSpanRemove>
                    <Button type="button">
                      <Trash size={14} color={'#8047F8'} /> Remover
                    </Button>
                  </ButtonSpanRemove>
                </CoffeeInfoButtonsContainer>
              </CoffeeInfo>
            </CoffeeListContainer>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '700' }}>R$ 9,90</h3>
            </div>
          </CoffeeItem>
          <Divisor />
          <CoffeeItem>
            <CoffeeListContainer>
              <img src={coffee} alt="coffee_name" />
              <CoffeeInfo>
                <p>Expresso Tradicional</p>
                <CoffeeInfoButtonsContainer>
                  <ButtonSpanQuantity>
                    <Button type="button">
                      <Minus size={14} color={'#8047F8'} />
                    </Button>
                    <span style={{ margin: '0px 9px' }}>1</span>
                    <Button type="button">
                      <Plus size={14} color={'#8047F8'} />
                    </Button>
                  </ButtonSpanQuantity>
                  <ButtonSpanRemove>
                    <Button type="button">
                      <Trash size={14} color={'#8047F8'} /> Remover
                    </Button>
                  </ButtonSpanRemove>
                </CoffeeInfoButtonsContainer>
              </CoffeeInfo>
            </CoffeeListContainer>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '700' }}>R$ 9,90</h3>
            </div>
          </CoffeeItem>
          <Divisor />
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
            <ButtonTotal>
              <Button type="submit">CONFIRMAR PEDIDO</Button>
            </ButtonTotal>
          </PricesContainer>
        </TotalCoffeeContainer>
      </div>
    </CheckoutContainer>
  )
}
