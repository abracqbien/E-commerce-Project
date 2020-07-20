import React from "react"
import { connect } from "react-redux"

// Actions
import { toggleCartHidden } from "../../redux/cart/cart.actions"

// Images SVG
import { ReactComponent as ShoppindIcon } from "../../assets/shopping-bag.svg"

// Styles
import "./cart-icon.styles.scss"

const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppindIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
)

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
})

export default connect(null, mapDispatchToProps)(CartIcon)
