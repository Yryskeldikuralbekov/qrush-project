import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { Routing } from './app/routes/Routing';
import './i18n';
import './app/styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Suspense fallback='loading...'>
      <Routing />
    </Suspense>
  </BrowserRouter>
);
