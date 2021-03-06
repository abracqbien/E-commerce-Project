import React from "react"
import { Route } from "react-router-dom"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

// Components
import CollectionOverview from "../../components/collections-overview/collections-overview.component"

// Pages
import CollectionPage from "../collection/collection.component"

// Selectors
import { selectCollections } from "../../redux/shop/shop.selectors"

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
})

export default connect(mapStateToProps)(ShopPage)
