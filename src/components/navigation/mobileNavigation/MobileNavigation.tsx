import './MobileNavigation.css'
import '../../../shared/global/css/Global.css'
import { useState } from "react"
import { MenuItems } from "../MenuItems"

export const MobileNavigation = () => {

  const [burgerIcon, setBurgerIcon] = useState<string>('burger')
  const [menuTrans, setMenuTrans] = useState<any>('-20vw')

  const burgerAnimation = (input: string) => {
    return `${burgerIcon}-icon-${input}`
  }

  const menuSlideIn = () => {
    return burgerIcon === 'burger' ? { right: '-100vw' } : { right: '0' }
  }


  const displayBurgerIcon = () => {
    burgerIcon === 'burger' ? setBurgerIcon('times') : setBurgerIcon('burger')
  }


  return (
    <div>
      <div className='navbar-mobile-wrapper bg-color-green'>
        <div className='navbar-mobile-wrapper-inner font-white'>
          <div className='navbar-mobile-logo'>MemoryGame</div>
          <div className={burgerAnimation('wrapper')} onClick={() => displayBurgerIcon()}>
            <div className={burgerAnimation('line-1')}></div>
            <div className={burgerAnimation('line-2')}></div>
            <div className={burgerAnimation('line-3')}></div>
          </div>
          <div className='navbar-mobile-menu-wrapper bg-color-green' style={menuSlideIn()}>
            {MenuItems()}
          </div>
        </div>
      </div>
    </div>
  )
}
