import React from 'react'
import Cart from './Cart'



function Header(props) {

  const {quantity, orderItem, isBasket} = props
  return (
    <nav className='green darken-1 header-menu'>
      <div className='nav-wrapper'>
        <a href="index.html">React-shop</a>
       <Cart quantity={quantity} orderItem={orderItem} isBasket={isBasket}/>
      </div>
    </nav>
  )
}

export default Header