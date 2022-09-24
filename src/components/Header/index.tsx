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

export function Header() {
  const { cartQuantity } = useContext(CartContext)

  return (
    <HeaderContainer>
      <img src={logo} alt="logo Coffee Delivery" />

      <nav>
        <LocationContainer>
          <MapPin size={22} weight="fill" />
          Município, UF
        </LocationContainer>
        <CartContainer>
          <ShoppingCart size={22} weight="fill" />
          {cartQuantity >= 1 && (
            <CartNotification>{cartQuantity}</CartNotification>
          )}
        </CartContainer>
      </nav>
    </HeaderContainer>
  )
}
