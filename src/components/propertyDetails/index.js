import React from "react";

import KeyFeatures from "../keyFeatures";
import Gallery from "../gallery";
import Map from "../map";

import { asCurrency } from "../../utils/number";
import styles from "./styles.module.css";

function PropertyDetails({ listing }) {
  if (!listing) {
    return null;
  }

  const { image, title, address, description, price, features, details } =
    listing;

  return (
    <div className={styles.propertyContainer}>
      <div className={styles.header}>
        <div className={styles.titleContainer}>
          <h2>{title}</h2>
          <h3>{description}</h3>
        </div>
        <div className={styles.priceContainer}>
          <h5>
            <small>Priced from</small>
            <br />
            &pound;
            {asCurrency(price)}
          </h5>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.galleryContainer}>
          <Gallery image={image} title={title} />
        </div>
        <div className={styles.featuresContainer}>
          <KeyFeatures features={features} />
        </div>
      </div>
      <p style={{ fontWeight: 700, marginTop: "24px" }}>Full Details</p>
      {details.map((detail) => (
        <p
          key={detail}
          style={{
            color: "#3b4351",
            fontSize: "12px",
            fontFamily: "sans-serif",
          }}
        >
          {detail}
        </p>
      ))}
      <p style={{ fontWeight: 700, marginTop: "24px" }}>Map</p>
      <Map address={address} />
    </div>
  );
}

export default PropertyDetails;
