import React from 'react';
import ReactDOM from 'react-dom';
import './styles/template.dark.bundle.css'    // './styles/template.bundle.css' for light mode
import "video-react/dist/video-react.css"
import App from './App';
import * as serviceWorkerRegistration from './utils/serviceWorkerRegistration';
import reportWebVitals from './utils/reportWebVitals';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorkerRegistration.register();
reportWebVitals();
