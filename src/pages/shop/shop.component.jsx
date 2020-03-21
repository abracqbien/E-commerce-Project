import React, { Component } from "react";

// Components
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

// Fakes Data
import SHOP_DATA from "./shop.data";

class ShopPage extends Component {
  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
