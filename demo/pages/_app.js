import React from 'react';
import '@moxy/react-carousel/dist/styles.css';

// eslint-disable-next-line react/prop-types
const App = ({ Component, pageProps }) => (
    <Component { ...pageProps } />
);

export default App;
