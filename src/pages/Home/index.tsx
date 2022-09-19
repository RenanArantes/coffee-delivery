import {
  HomeContainer,
  IntroContainer,
  ItensContainer,
  Title,
  Subtitle,
  IconsContainer,
  Item,
  IconContainer,
  CoffeeList,
  CoffeeListContainer,
  CoffeeItem,
  CoffeeCategory,
  CoffeeTitle,
  CoffeeItemTitle,
  CoffeeImage,
  CoffeeItemSubtitle,
  ValueContainer,
  Price,
  CoffeeQuantityContainer,
  IncreaseButton,
  DecreaseButton,
} from './styles'
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

import coffeeDelivery from '../../assets/coffee_delivery.png'
import coffee from '../../assets/coffee.png'

export function Home() {
  return (
    <HomeContainer>
      <IntroContainer>
        <ItensContainer>
          <span>
            <Title>Encontre o café perfeito</Title>
            <Title>para qualquer hora do dia</Title>
            <Subtitle>
              Com o Coffee Delivery você recebe seu café onde estiver, a quaquer
              hora
            </Subtitle>
          </span>
          <IconsContainer>
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
          </IconsContainer>
        </ItensContainer>
        <img
          src={coffeeDelivery}
          alt="Coffee image"
          style={{ float: 'right', marginLeft: 'auto' }}
        />
      </IntroContainer>
      <CoffeeTitle>Nossos cafés</CoffeeTitle>
      <CoffeeListContainer>
        <CoffeeList>
          <CoffeeItem>
            <CoffeeImage src={coffee} />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <CoffeeCategory>TRADICIONAL</CoffeeCategory>
              <CoffeeCategory>ESPECIAL</CoffeeCategory>
              <CoffeeCategory>TRADICIONAL</CoffeeCategory>
            </div>
            <CoffeeItemTitle>Expresso Tradicional</CoffeeItemTitle>
            <CoffeeItemSubtitle>
              O tradicional café feito com água quente e gráos moídos
            </CoffeeItemSubtitle>
            <ValueContainer>
              <div>
                <span>R$ </span>
                <Price>9,90</Price>
              </div>
              <CoffeeQuantityContainer>
                <DecreaseButton type="button">-</DecreaseButton> 1{' '}
                <IncreaseButton type="button">+</IncreaseButton>
              </CoffeeQuantityContainer>
              <ShoppingCart size={16} weight="fill" />
            </ValueContainer>
          </CoffeeItem>
        </CoffeeList>
      </CoffeeListContainer>
    </HomeContainer>
  )
}
