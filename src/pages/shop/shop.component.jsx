import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

// Components
import CollectionOverview from "../../components/collections-overview/collections-overview.component"

// Selectors
import { selectCollections } from "../../redux/shop/shop.selectors"

const ShopPage = ({ collections }) => {
  return (
    <div className="shop-page">
      <CollectionOverview />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
})

export default connect(mapStateToProps)(ShopPage)
