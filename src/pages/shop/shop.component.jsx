import React, { Component } from "react"
import { Route } from "react-router-dom"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

// Components
import CollectionOverview from "../../components/collections-overview/collections-overview.component"

// Pages
import CollectionPage from "../collection/collection.component"

// Actions
import { updateCollections } from "../../redux/shop/shop.actions.js"

// Selectors
import { selectCollections } from "../../redux/shop/shop.selectors"

// FireBase
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils"

class ShopPage extends Component {
  unsubscribeFromSnapshot = null

  componentDidMount() {
    const { updateCollections } = this.props
    const collectionRef = firestore.collection("collections")

    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionsMap)
    })
  }

  render() {
    const { match } = this.props

    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap)),
})

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)
