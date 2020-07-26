import React from "react"

// Styled component
import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles"

const WithSpinner = WrappedComponent => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    )
  }

  return Spinner
}

export default WithSpinner