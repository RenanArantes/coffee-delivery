import { Header } from '../../components/Header'
import {
  HomeContainer,
  Title,
  Subtitle,
  ItensContainer,
  Item,
  IconContainer,
} from './styles'
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

import background from '../../assets/background.png'
import coffeeDelivery from '../../assets/coffee_delivery.png'

export function Home() {
  return (
    <HomeContainer>
      <div>
        <img
          src={background}
          style={{
            width: '100%',
            height: '544px',
            position: 'absolute',
          }}
        />

        <div>
          <span>
            <Title>Encontre o café perfeito</Title>
            <Title>para qualquer hora do dia</Title>
            <Subtitle>
              Com o Coffee Delivery você recebe seu café onde estiver, a quaquer
              hora
            </Subtitle>
          </span>
          <ItensContainer>
            <Item>
              <IconContainer typeof="cart">
                <ShoppingCart size={16} weight="fill" />
              </IconContainer>
              <p>Compra simples e segura</p>
            </Item>
            <Item>
              <IconContainer typeof="timer">
                <Timer size={16} weight="fill" />
              </IconContainer>
              <p>Compra simples e segura</p>
            </Item>
            <Item>
              <IconContainer typeof="box">
                <Package size={16} weight="fill" />
              </IconContainer>
              <p>Compra simples e segura</p>
            </Item>
            <Item>
              <IconContainer typeof="coffee">
                <Coffee size={16} weight="fill" />
              </IconContainer>
              <p>Compra simples e segura</p>
            </Item>
          </ItensContainer>
        </div>
        <img src={coffeeDelivery} alt="Coffee image" />
      </div>
    </HomeContainer>
  )
}
