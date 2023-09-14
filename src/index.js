import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import MainPage from './pages/mainpage';
import Services from './pages/services';
import Portfolio from './pages/portfolio';
import Whyus from './pages/whyUs';
import Contact from './pages/contact';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
  },{
    path: "/services",
    element: <Services/>,
  },{
    path: "/portfolio",
    element: <Portfolio/>,
  },{
    path: "/whyUs",
    element: <Whyus/>,
  },{
    path: "/contact",
    element: <Contact/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HelmetProvider>
  <React.StrictMode>
<RouterProvider router={router} />
  </React.StrictMode>
   </HelmetProvider> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

serviceWorkerRegistration.register();