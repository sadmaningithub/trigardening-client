import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './layouts/Root';
import Home from './pages/Home';
import Products from './pages/Products';
import Blog from './pages/Blog';
import PlantClinic from './pages/PlantClinic';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        index: true,
        path: '/' ,
        element: <Home/>
      },
      {
        path: 'products',
        element: <Products/>
      },
      {
        path: '/blog',
        element: <Blog/>
      },
      {
        path: 'plant-clinic',
        element: <PlantClinic/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
