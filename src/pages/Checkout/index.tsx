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
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <h1>Complete seu pedido</h1>
        <div>
          <form>
            <span>
              <MapPinLine />
              <h2>Endereço da Entrega</h2>
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
        </div>
        <div>
          <span>
            <CurrencyDollar />
            <h1>Pagamento</h1>
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
      </div>

      <div>
        <h1>Cafés selecionados</h1>
        <div>
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
        </div>
      </div>
    </CheckoutContainer>
  )
}
