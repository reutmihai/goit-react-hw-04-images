import React from "react";
import PropTypes from "prop-types";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import styles from "../ImageGallery/ImageGallery.module.css";

export const ImageGallery = ({ images }) => {
  return (
    <div className={styles.galleryContainer}>
      <ul className={styles.galleryList}>
        {images.map(({ id, webformatURL, tags, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            url={webformatURL}
            tags={tags}
            largeImageURL={largeImageURL}
          />
        ))}
      </ul>
    </div>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
};
