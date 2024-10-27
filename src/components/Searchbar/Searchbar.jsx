import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../Searchbar/Searchbar.module.css';

export const Searchbar = ({ onFormSubmit }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target;
        setSearchQuery(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(searchQuery.trim() === '') {
            alert('Please enter a valid string.');
            return;
        }

        onFormSubmit(searchQuery);
        setSearchQuery('');
    };

  return (
    <header>
      <form className={styles.SearchForm} onSubmit={handleSubmit}>
        <input
          className={styles["SearchForm-input"]}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={handleChange}
        />
        <button type="submit" className={styles["SearchForm-button"]}>
          <span className={styles["SearchForm-button-label"]}>Search</span>
        </button>
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};

