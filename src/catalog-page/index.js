import React, { Component } from 'react';

import Catalog from './catalog';
import { Products } from './constants/products';

class CatalogPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Catalog products={Products}></Catalog>
      </div>
    )
  }
}

export default CatalogPage;
