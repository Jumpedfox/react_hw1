import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { App2 } from 'components/App';
import { App3 } from 'components/App';
import { App4 } from 'components/App';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <App2 />
    <App3 />
    <App4 />
  </React.StrictMode>
);

