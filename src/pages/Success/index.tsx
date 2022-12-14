import {
  AddressInfo,
  ConfirmationTitleContainer,
  DeliveryConfirmationContainer,
  InfoConfirmationContainer,
  PaymentInfo,
  SubTitle,
  SuccessContainer,
  TimerInfo,
  Title,
} from './styles'
import deliver from '../../assets/delivery_in_bike.png'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import { OrderContext } from '../../contexts/Order'

export function Success() {
  const { totalPrice, paymentType, address } = useContext(OrderContext)

  return (
    <SuccessContainer>
      <ConfirmationTitleContainer>
        <Title>Uhu! Pedido confirmado</Title>
        <SubTitle>
          Agora é só aguardar que logo o café chegará até você
        </SubTitle>
      </ConfirmationTitleContainer>
      <DeliveryConfirmationContainer>
        <InfoConfirmationContainer>
          <div>
            <AddressInfo>
              <span>
                <MapPin size={15} weight="fill" />
              </span>
              {address && (
                <span>
                  <p>
                    Entrega em{' '}
                    <strong>
                      {address.street}, {address.house_number}
                    </strong>
                  </p>
                  <p>
                    {address.district} - {address.city}, {address.state}
                  </p>
                </span>
              )}
            </AddressInfo>
            <TimerInfo>
              <span>
                <Timer weight="fill" />
              </span>
              <span>
                <p>Previsão de entrega</p>
                <p>
                  <strong>20 min - 30 min</strong>
                </p>
              </span>
            </TimerInfo>
            <PaymentInfo>
              <span>
                <CurrencyDollar weight="fill" />
              </span>
              <span>
                <p>Pagamento na entrega</p>
                <p>
                  <strong>{paymentType}</strong>
                </p>
              </span>
            </PaymentInfo>
          </div>
        </InfoConfirmationContainer>
        <img src={deliver} alt="Delivery" />
      </DeliveryConfirmationContainer>
    </SuccessContainer>
  )
}
