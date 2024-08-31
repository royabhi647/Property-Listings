import React from "react";
import style from "./styles.module.css";

function Gallery({ image, title }) {
  return (
    <figure>
      <img src={image} alt={title} />
      <figcaption className={style.title}>{title}</figcaption>
    </figure>
  );
}

export default Gallery;
