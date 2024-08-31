import React from "react";
import { useParams } from "react-router-dom";

import {
  PropertyListingsProvider,
  PropertyListingsConsumer,
} from "../../context/PropertyListingsProvider";

import PropertyDetails from "../../components/propertyDetails";
import Hero from "../../components/hero";

function Details() {
  const { propertyId } = useParams();
  return (
    <React.Fragment>
      <Hero minihero />
      <div>
        <PropertyListingsProvider>
          <PropertyListingsConsumer>
            {({ getListingByPropertyId }) => (
              <PropertyDetails listing={getListingByPropertyId(propertyId)} />
            )}
          </PropertyListingsConsumer>
        </PropertyListingsProvider>
      </div>
    </React.Fragment>
  );
}

export default Details;
