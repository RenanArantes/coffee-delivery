import {
  HomeContainer,
  IntroContainer,
  ItensContainer,
  CoffeeIntroImg,
  BackgroundImg,
  Title,
  Subtitle,
  IconsContainer,
  Item,
  IconContainer,
  CoffeListContainer,
  CoffeeList,
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
  CoffeeCategoryContainer,
  ShoppingCartSimpleContainer,
} from './styles'
import {
  ShoppingCart,
  ShoppingCartSimple,
  Timer,
  Package,
  Coffee,
  Minus,
  Plus,
} from 'phosphor-react'

import coffeeDelivery from '../../assets/coffee_delivery.png'
import coffee from '../../assets/coffee.png'
import background from '../../assets/background.png'
import { useState } from 'react'

export function Home() {
  const [quantityCounter, setQuantityCounter] = useState(0)

  function increaseQuantity() {
    setQuantityCounter(quantityCounter + 1)
  }

  function decreaseQuantity() {
    if (quantityCounter >= 1) {
      setQuantityCounter(quantityCounter - 1)
    } else {
      alert(
        'Você não pode diminuir a quantidade de um produto para menos que zero.',
      )
    }
  }

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
        <CoffeeIntroImg src={coffeeDelivery} alt="Coffee image" />

        <BackgroundImg src={background} />
      </IntroContainer>
      <CoffeListContainer>
        <CoffeeTitle>Nossos cafés</CoffeeTitle>
        <CoffeeList>
          <CoffeeItem>
            <CoffeeImage src={coffee} />
            <CoffeeCategoryContainer>
              <CoffeeCategory>TRADICIONAL</CoffeeCategory>
              <CoffeeCategory>ESPECIAL</CoffeeCategory>
              <CoffeeCategory>ESPECIAL</CoffeeCategory>
            </CoffeeCategoryContainer>
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
                <DecreaseButton type="button" onClick={decreaseQuantity}>
                  <Minus size={14} weight="bold" />
                </DecreaseButton>
                {quantityCounter}
                <IncreaseButton type="button" onClick={increaseQuantity}>
                  <Plus size={14} weight="bold" />
                </IncreaseButton>
              </CoffeeQuantityContainer>
              <ShoppingCartSimpleContainer>
                <ShoppingCartSimple size={22} weight="fill" />
              </ShoppingCartSimpleContainer>
            </ValueContainer>
          </CoffeeItem>
        </CoffeeList>
      </CoffeListContainer>
    </HomeContainer>
  )
}
