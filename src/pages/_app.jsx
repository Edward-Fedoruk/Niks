/* eslint-disable react/jsx-props-no-spreading */
import '../sass/reset.scss';
import '../sass/fonts.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../components/Nav/Nav';
import Logo from '../components/Logo/Logo';

const App = ({ Component, pageProps }) => (
  <>
    <Logo />
    <Nav />
    <Component {...pageProps} />
  </>
);

App.propTypes = {
  Component: PropTypes.node.isRequired,
  pageProps: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default App;
