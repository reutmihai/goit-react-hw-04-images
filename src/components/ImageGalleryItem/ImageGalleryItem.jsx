import React from 'react';
import PropTypes from "prop-types";
import { Modal } from '../Modal/Modal';
import { useState } from 'react';
import styles from '../ImageGalleryItem/ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ id, url, tags, largeImageURL }) => {
 const [showModal, setShowModal] = useState(false);

 const openModal = () => setShowModal(true);
 const closeModal = () => setShowModal(false);

  return (
    <div>
      <li key={id} className={styles.item}>
        <img alt={tags} src={url} onClick={openModal}/>
      </li>
      {showModal && (
        <Modal largeImageURL={largeImageURL} tags={tags} onClose={closeModal} />
      )}
    </div>
  );
};

ImageGalleryItem.propTypes = {
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    tags: PropTypes.string,
    largeImageURL: PropTypes.string.isRequired,
};
