import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function Listing({ listing }) {
  if (!listing) {
    return null;
  }

  const { id, image, title, address, description, price } = listing;

  return (
    <div className={styles.listingContainer}>
      <div className={styles.imageContainer}>
        <img src={image} alt={address} />
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.title}>{title}</div>
        <div className={styles.price}>&pound; {price}</div>
        <div className={styles.address}>{address}</div>
        <div className={styles.description}>{description}</div>
        <div className={styles.linkContainer}>
          <Link to={`/details/${id}`}>Go to property</Link>
        </div>
      </div>
    </div>
  );
}

export default Listing;
