// import { HomeViewDesktop } from "./homeViewDesktop/HomeViewDesktop"
import { MemoryViewMobile } from "./memoryViewMobile/MemoryViewMobile"

import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import DesktopMobileBreakpoint from "../../data/DesktopMobileBreakpoint"


export const MemoryView = () => {
  const { width } = useWindowDimensions()

  const toggleDesktopOrMobileViewForNavbar = () => {
    return width <= DesktopMobileBreakpoint ? <MemoryViewMobile /> : <MemoryViewMobile />
  }

  return <div>{toggleDesktopOrMobileViewForNavbar()}</div>
}
