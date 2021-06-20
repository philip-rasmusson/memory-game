// import { HomeViewDesktop } from "./homeViewDesktop/HomeViewDesktop"
import { HomeViewMobile } from "./homeViewMobile/HomeViewMobile"

import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import DesktopMobileBreakpoint from "../../data/DesktopMobileBreakpoint"


export const HomeView = () => {
  const { width } = useWindowDimensions()

  const toggleDesktopOrMobileViewForNavbar = () => {
    return width <= DesktopMobileBreakpoint ? <HomeViewMobile /> : <HomeViewMobile />
  }

  return <div>{toggleDesktopOrMobileViewForNavbar()}</div>
}
