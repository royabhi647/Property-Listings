import React from "react";
import Listing from "../../components/listing";
import {
  PropertyListingsProvider,
  PropertyListingsConsumer,
} from "../../context/PropertyListingsProvider";

import Filter from "../../components/filter";
import BaseLayout from "../../components/baseLayout";
import styles from "./styles.module.css";

function Home() {
  return (
    <BaseLayout>
      <div className={styles.container}>
        <PropertyListingsProvider>
          <PropertyListingsConsumer>
            {({ propertyListings, allListings, updateFilter }) => (
              <>
                <Filter
                  updateFilter={updateFilter}
                  count={propertyListings.length}
                  postcodes={allListings
                    ?.map((listing) => listing.postcode.split(" ")[0])
                    ?.filter((item, i, arr) => arr.indexOf(item) === i)}
                />
                <div className={styles.listContainer}>
                  {propertyListings?.map((listing, idx) => (
                    <Listing listing={listing} key={idx} />
                  ))}
                </div>
              </>
            )}
          </PropertyListingsConsumer>
        </PropertyListingsProvider>
      </div>
    </BaseLayout>
  );
}

export default Home;
