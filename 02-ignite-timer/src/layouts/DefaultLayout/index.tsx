import { Outlet } from 'react-router-dom'

import { LayoutContainer } from './styles'
import { Header } from '../../components/Header/Index'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
