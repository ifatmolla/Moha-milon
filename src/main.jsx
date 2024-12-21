import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './Register'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root';
import Home from './Components/Home';
import Login from './Layout/Login';
import Register from './Register';
import Authprovider from './provider/Authprovider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'register',
        element: <Register></Register>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Authprovider>
   <RouterProvider router={router} />
   </Authprovider>
  </StrictMode>,
)
