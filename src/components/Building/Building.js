import React from 'react';
import { listingOptionalShape } from '../../propz/listingProp';
import './Building.css';

import { formatPrice } from '../../helpers';
import BuildingTile from '../BuildingTile/BuildingTile';

class Building extends React.Component {
  static propTypes = {
    listing: listingOptionalShape,
  }

  render () {
    const { listing } = this.props;
    if (listing.nope) {
      return (
        <div className="Building">
          <h1 className="unknown-listing"><span className="glyphicon glyphicon-arrow-left"></span>Select a Listing</h1>
        </div>
      );
    }
    return (
      <div className="Building">
        <div className="row">
          <div className="col-xs-6">
            <img className="building-image" src={listing.imageUrl} alt="selected building" />
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
        <div className="row">
          <BuildingTile
            imageSrc = 'cal.png'
            altText = 'calendar'
            pTagText = {`Built: ${listing.yearBuilt}`}
          />
          <BuildingTile
            imageSrc = 'hill.png'
            altText = 'hill'
            pTagText = {`${listing.lotInAcres} acres`}
          />
          <BuildingTile
            imageSrc = 'flame.png'
            altText = 'flame'
            pTagText = {listing.heating}
          />
          <BuildingTile
            imageSrc = 'snow.png'
            altText = 'snowflake'
            pTagText = {listing.cooling}
          />
        </div>
      </div>
    );
  }
}

export default Building;
