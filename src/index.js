import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


import("./static/wasm.js")
  .catch(console.error)
  .then(() => {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );
  });

