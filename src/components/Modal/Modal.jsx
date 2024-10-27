import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import styles from '../Modal/Modal.module.css'

export const Modal = ({ largeImageURL, tags, onClose }) => {

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <img src={largeImageURL} alt={tags} />
        <button onClick={onClose}>Închide</button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};
