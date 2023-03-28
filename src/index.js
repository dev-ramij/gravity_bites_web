import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import RouterComponet from './Router/router';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <RouterComponet />
    </React.StrictMode>
);

reportWebVitals();
