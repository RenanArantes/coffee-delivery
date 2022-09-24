import {
  CartContainer,
  CartNotification,
  HeaderContainer,
  LocationContainer,
} from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logo from '../../assets/logo.svg'
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/Cart'
import { Link } from 'react-router-dom'

export function Header() {
  const { cartQuantity } = useContext(CartContext)

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logo} alt="logo Coffee Delivery" />
      </Link>

      <nav>
        <LocationContainer>
          <MapPin size={22} weight="fill" />
          Município, UF
        </LocationContainer>
        <Link to="checkout">
          <CartContainer>
            <ShoppingCart size={22} weight="fill" />
            {cartQuantity >= 1 && (
              <CartNotification>{cartQuantity}</CartNotification>
            )}
          </CartContainer>
        </Link>
      </nav>
    </HeaderContainer>
  )
}
