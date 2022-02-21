import React from 'react';
import ReactDOM from 'react-dom';
import './styles/template.dark.bundle.css'    // './styles/template.bundle.css' for light mode
import App from './app/App';
import * as serviceWorkerRegistration from './utils/serviceWorkerRegistration';
import reportWebVitals from './utils/reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
reportWebVitals();
