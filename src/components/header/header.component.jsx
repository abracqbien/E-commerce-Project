import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

// Firebase
import { auth } from "../../firebase/firebase.utils"

// Images
import { ReactComponent as Logo } from "../../assets/crown.svg"

// Styles
import "./header.styles.scss"

// Components
import CartDropdown from "../cart-dropdown/cart-dropdown.component"
import CartIcon from "../cart-icon/cart-icon.component"

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {!hidden && <CartDropdown />}
  </div>
)

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
})

export default connect(mapStateToProps)(Header)
