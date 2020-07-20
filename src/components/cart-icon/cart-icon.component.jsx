import React from "react"
import { connect } from "react-redux"

// Actions
import { toggleCartHidden } from "../../redux/cart/cart.actions"

// Selectors
import { selectCartItemsCount } from "../../redux/cart/cart.selectors"

// Images SVG
import { ReactComponent as ShoppindIcon } from "../../assets/shopping-bag.svg"

// Styles
import "./cart-icon.styles.scss"

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppindIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
)

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
})

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
