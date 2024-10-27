import React from 'react';
import { SyncLoader } from 'react-spinners';
import PropTypes from "prop-types";

export const Loader = ({ isLoading }) => {
  return <div><SyncLoader color='white' loading={isLoading} /></div>;
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};