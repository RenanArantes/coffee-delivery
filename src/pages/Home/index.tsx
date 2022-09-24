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

import background from '../../assets/background.png'
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/Cart'
import { Link } from 'react-router-dom'

export function Home() {
  const [quantity, setQuantity] = useState(0)

  const { coffees, increaseCoffeeQuantity, decreaseCoffeeQuantity } =
    useContext(CartContext)

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
          {coffees &&
            coffees.map((coffee) => {
              return (
                <CoffeeItem key={coffee.name}>
                  <CoffeeImage src={coffee.url} />
                  <CoffeeCategoryContainer>
                    {coffee.types.map((type) => {
                      return <CoffeeCategory key={type}>{type}</CoffeeCategory>
                    })}
                  </CoffeeCategoryContainer>
                  <CoffeeItemTitle>{coffee.name}</CoffeeItemTitle>
                  <CoffeeItemSubtitle>{coffee.description}</CoffeeItemSubtitle>
                  <ValueContainer>
                    <div>
                      <span>R$ </span>
                      <Price>{coffee.price}0</Price>
                    </div>
                    <CoffeeQuantityContainer>
                      <DecreaseButton
                        type="button"
                        onClick={() => decreaseCoffeeQuantity(coffee.name)}
                      >
                        <Minus size={14} weight="bold" />
                      </DecreaseButton>
                      {coffee.quantity}
                      <IncreaseButton
                        type="button"
                        onClick={() => increaseCoffeeQuantity(coffee.name)}
                      >
                        <Plus size={14} weight="bold" />
                      </IncreaseButton>
                    </CoffeeQuantityContainer>

                    <Link to="/checkout">
                      <ShoppingCartSimple size={22} weight="fill" />
                    </Link>
                  </ValueContainer>
                </CoffeeItem>
              )
            })}
        </CoffeeList>
      </CoffeListContainer>
    </HomeContainer>
  )
}
