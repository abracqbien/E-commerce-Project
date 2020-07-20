import React from "react"

// Images SVG
import { ReactComponent as ShoppindIcon } from "../../assets/shopping-bag.svg"

// Styles
import "./cart-icon.styles.scss"

const CartIcon = () => (
  <div className="cart-icon">
    <ShoppindIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
)

export default CartIcon
