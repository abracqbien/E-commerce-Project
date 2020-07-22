import React from "react"
import StripeCheckout from "react-stripe-checkout"

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publicshablekey =
    "pk_test_51H7maiJY0X8gG6pqvUCWh7USuGdaf3uC03jNlCAx3btfxNMItFzesGWU9a0g1GWZFyORU9asBMg8bX9gYExeLzG400TIFsbY0E"

  const onToken = token => {
    console.log("token", token)
    alert("Payment Successful")
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      currency="EUR"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ${price} €`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publicshablekey}
    />
  )
}

export default StripeCheckoutButton
