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
  SubTitle,
  Title,
  TotalCoffeeContainer,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <Title>Complete seu pedido</Title>
        <AddressContainer>
          <form>
            <span>
              <MapPinLine />
              <SubTitle>Endereço da Entrega</SubTitle>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </span>
            <span>
              <input placeholder="CEP" />
            </span>

            <div>
              <span>
                <input placeholder="Rua" />
              </span>
            </div>
            <div>
              <span>
                <input placeholder="Número" />
              </span>
              <span>
                <input placeholder="Complemento" />
              </span>
            </div>
            <div>
              <span>
                <input placeholder="Bairro" />
              </span>
              <span>
                <input placeholder="Cidade" />
              </span>
              <span>
                <input placeholder="UF" />
              </span>
            </div>
          </form>
        </AddressContainer>
        <PaymentContainer>
          <div>
            <span>
              <CurrencyDollar />
              <SubTitle>Pagamento</SubTitle>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </span>
          </div>
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
