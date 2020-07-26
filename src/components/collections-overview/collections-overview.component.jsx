import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

// Styles
import "./collections-overview.styles.scss"

// Components
import CollectionPreview from "../../components/collection-preview/collection-preview.component"

// Selectors
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors"

const CollectionsOverview = ({ collections }) => (
  <div className="colletions-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
})

export default connect(mapStateToProps)(CollectionsOverview)
