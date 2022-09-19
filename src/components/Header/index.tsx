import {
  CartContainer,
  CartNotification,
  HeaderContainer,
  LocationContainer,
} from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logo from '../../assets/logo.svg'
import { useState } from 'react'

export function Header() {
  const [notifications, setNotifications] = useState(15)

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
          {notifications >= 1 && (
            <CartNotification>{notifications}</CartNotification>
          )}
        </CartContainer>
      </nav>
    </HeaderContainer>
  )
}
