import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import background from '../../assets/background.png'
import { LayoutContainer, BackgroundImg } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <BackgroundImg src={background} />
      <Outlet />
    </LayoutContainer>
  )
}
