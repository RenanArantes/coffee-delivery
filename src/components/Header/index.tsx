import { CartContainer, HeaderContainer, LocationContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logo from '../../assets/logo.svg'

export function Header() {
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
        </CartContainer>
      </nav>
    </HeaderContainer>
  )
}
