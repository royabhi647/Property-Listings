import React, { createContext, useState, useEffect } from "react";
import { allData } from "../data/data";

const DefaultState = {
  propertyListings: [],
  filter: {},
};

const PropertyListingsContext = createContext(DefaultState);

export const PropertyListingsConsumer = PropertyListingsContext.Consumer;

export const PropertyListingsProvider = ({ children }) => {
  const [propertyListings, setPropertyListings] = useState([]);
  const [filter, setFilter] = useState({});

  useEffect(() => {
    if (allData.length > 0) {
      setPropertyListings(allData);
    }
  }, []);

  const applyFilter = (listings, filter) => {
    const { priceFrom, postcode, sortOrder } = filter;
    let result = listings;
    if (priceFrom) {
      const from = priceFrom;
      result = result.filter((item) => item.price >= from);
    }
    if (postcode) {
      result = result.filter((item) =>
        item.postcode.toLowerCase().startsWith(postcode)
      );
    }
    if (sortOrder) {
      if (sortOrder === "highestfirst") {
        result = result.sort((a, b) => b.price - a.price);
      }
      if (sortOrder === "lowestfirst") {
        result = result.sort((a, b) => a.price - b.price);
      }
    }
    return result;
  };

  const getListingByPropertyId = (propertyId) => {
    return propertyListings.find(
      (listing) => listing.id === Number(propertyId)
    );
  };

  const updateFilter = (filter) => {
    setFilter(filter);
  };

  const filteredListings = applyFilter(propertyListings, filter);

  return (
    <PropertyListingsContext.Provider
      value={{
        allListings: propertyListings,
        propertyListings: filteredListings,
        updateFilter,
        getListingByPropertyId,
      }}
    >
      {children}
    </PropertyListingsContext.Provider>
  );
};
