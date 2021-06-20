// import { DesktopNavbar } from "./desktopNavigation/DesktopNavbar"
import { MobileNavigation } from "./mobileNavigation/MobileNavigation"

import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import DesktopMobileBreakpoint from '../../data/DesktopMobileBreakpoint'


export const Navbar = () => {
  const { width } = useWindowDimensions()

  const toggleDesktopOrMobileViewForNavbar = () => {
    return width <= DesktopMobileBreakpoint ? <MobileNavigation /> : <MobileNavigation />
  }

  return <div>{toggleDesktopOrMobileViewForNavbar()}</div>
}
