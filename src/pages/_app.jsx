/* eslint-disable react/jsx-props-no-spreading */
import '../sass/reset.scss';
import '../sass/fonts.scss';
import React from 'react';
import PropTypes from 'prop-types';

const App = ({ Component, pageProps }) => <Component {...pageProps} />;

App.propTypes = {
  Component: PropTypes.node.isRequired,
  pageProps: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default App;
