import React, { Component } from "react"
import { Route } from "react-router-dom"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

// Components
import CollectionOverview from "../../components/collections-overview/collections-overview.component"
import WithSpinner from "../../components/with-spinner/with-spinner.component"

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

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends Component {
  state = {
    loading: true,
  }

  unsubscribeFromSnapshot = null

  componentDidMount() {
    const { updateCollections } = this.props
    const collectionRef = firestore.collection("collections")

    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionsMap)

      this.setState({
        loading: false,
      })
    })
  }

  render() {
    const { match } = this.props
    const { loading } = this.state

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
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
