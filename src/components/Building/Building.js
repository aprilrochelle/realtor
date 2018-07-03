import React from 'react';
import { listingShape } from '../../propz/listingProp';
import './Building.css';

import {formatPrice} from '../../helpers';

class Building extends React.Component {
  static propTypes = {
    listing: listingShape,
  }

  render () {
    const { listing } = this.props;
    if (!listing) {
      return (
        <h1>Oh No!</h1>
      );
    }
    return (
      <div className="Building">
        <div className="row">
          <div className="col-xs-6">
            <img className="building-image" src={listing.imageUrl} alt="selected building"/>
          </div>
          <div className="col-xs-6">
            <h3>{formatPrice(listing.price)}</h3>
            <p>{formatPrice(listing.estimatedMonthlyMorgage)}</p>
            <h4>{listing.address} {listing.city}, {listing.state} {listing.zip}</h4>
            <h5>{listing.numBeds} Bed/{listing.numBaths} Bath</h5>
            <h5>{listing.squareFootage} ft<sup>2</sup></h5>
            <p>{listing.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Building;
