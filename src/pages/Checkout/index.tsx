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
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { CartContext } from '../../contexts/Cart'
import formatCurrency from '../../utils/formatCurrency'
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

const ufs = [
  'RS',
  'SC',
  'PR',
  'SP',
  'RJ',
  'ES',
  'MG',
  'GO',
  'MT',
  'MS',
  'PA',
  'AM',
  'AP',
  'AC',
  'RR',
  'RO',
  'TO',
  'MA',
  'PI',
  'CE',
  'BA',
  'RN',
  'PB',
  'PE',
  'AL',
  'SE',
  'DF',
]

const newOrderValidationSchema = zod.object({
  code: zod
    .string()
    .min(8, 'Consulte o CEP da sua região.')
    .max(8, 'Consulte o CEP da sua região.'),
  street: zod.string(),
  complement: zod.string(),
  city: zod.string(),
  house_number: zod.string().refine((val) => !Number.isNaN(parseInt(val)), {
    message: 'Expected a number, recived a string',
  }),
  state: zod
    .string()
    .max(2, 'Consulte o código da sua UF.')
    .min(2, 'Consulte o código da sua UF.'),
  // payment_type: zod.string({
  //   description: 'Expected credit_card or debit_card or specie',
  // }),
})

export function Checkout() {
  const [paymentType, setPaymentType] = useState('')
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(newOrderValidationSchema),
  })

  const deliveryValue = 10

  const {
    coffeesOnCart,
    cart,
    totalValue,
    removeCoffeeFromCart,
    increaseCoffeeOnCartQuantity,
    decreaseCoffeeOnCartQuantity,
  } = useContext(CartContext)

  function handleCreateNewOrder(data: any) {
    console.log('asdasdas')
    if (data) {
      if (paymentType !== '') {
        data.payment_type = paymentType
      } else {
        alert('Você deve selecionar o tipo de pagamento.')
      }
    }
    console.log(data)
  }

  function handleSelected(e: ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value)

    setPaymentType(() => {
      return e.target.value
    })
  }

  console.log(`total value: ${totalValue}`)
  console.log(formState.errors)

  return (
    <CheckoutContainer>
      <div>
        <Title>Complete seu pedido</Title>
        <form
          id="adress-form"
          onSubmit={handleSubmit(handleCreateNewOrder)}
          action=""
          autoComplete="off"
        >
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
              <input
                id="code"
                type="number"
                maxLength={5}
                placeholder="CEP"
                {...register('code')}
              />
            </MediumInput>

            <LargeInput style={{ marginBottom: '16px' }}>
              <input id="street" placeholder="Rua" {...register('street')} />
            </LargeInput>

            <div style={{ display: 'flex', marginBottom: '16px' }}>
              <MediumInput style={{ marginRight: '12px' }}>
                <input
                  id="house_number"
                  type="number"
                  placeholder="Número"
                  {...register('house_number')}
                />
              </MediumInput>
              <LargeInput>
                <OptionalPlaceholderContainer data-required="Opcional">
                  <input
                    id="complement"
                    placeholder="Complemento"
                    {...register('complement')}
                  />
                </OptionalPlaceholderContainer>
              </LargeInput>
            </div>
            <div style={{ display: 'flex' }}>
              <MediumInput style={{ marginRight: '12px' }}>
                <input
                  id="district"
                  placeholder="Bairro"
                  {...register('district')}
                />
              </MediumInput>
              <LargeInput style={{ marginRight: '12px' }} isOptional>
                <input id="city" placeholder="Cidade" {...register('city')} />
              </LargeInput>
              <SmallInput>
                <input
                  id="state"
                  placeholder="UF"
                  list="uf-sugestions"
                  maxLength={2}
                  {...register('state')}
                />
                <datalist id="uf-sugestions">
                  {ufs.map((uf) => (
                    <option key={uf} value={uf} />
                  ))}
                </datalist>
              </SmallInput>
            </div>
          </AddressContainer>
          <PaymentContainer>
            <InfoPaymentType>
              <CurrencyDollar />
              <span>
                <SubTitle>Pagamento</SubTitle>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
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
        </form>
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
              <span>R$ {formatCurrency(totalValue)}</span>
            </ValueSpan>
            <ValueSpan>
              <span>Entrega</span>
              <span>R$ {formatCurrency(deliveryValue)}</span>
            </ValueSpan>
            <ValueSpanTotal>
              <span>Total</span>
              <span>
                R${' '}
                {totalValue > 0
                  ? formatCurrency(totalValue + deliveryValue)
                  : 0}
              </span>
            </ValueSpanTotal>
            <ButtonTotal type="submit" form="adress-form">
              <span>CONFIRMAR PEDIDO</span>
            </ButtonTotal>
          </PricesContainer>
        </TotalCoffeeContainer>
      </div>
    </CheckoutContainer>
  )
}
