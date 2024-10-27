import React from 'react';
import PropTypes from 'prop-types';
import styles from '../LoadMore/LoadMore.module.css';

export const LoadMore = ({ onClick, visible}) => {
  return (
    <button className={styles.loadMore} onClick={onClick}>Load More</button>
  )
}

LoadMore.propTypes = {
    onClick: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired,
};
