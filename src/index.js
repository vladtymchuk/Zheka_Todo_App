import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Done} from './pages/Done/Done';
import {NotDone} from './pages/NotDone/NotDone';
import {Main} from './pages/Main/Main';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
    },
    {
        path: "/done",
        element: <Done/>,
    },
    {
        path: "/notDone",
        element: <NotDone/>,
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    // <Main />  
     <RouterProvider router={router} /> 

);
reportWebVitals();
