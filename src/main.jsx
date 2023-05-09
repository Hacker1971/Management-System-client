import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Adduser from './components/Adduser';
import Home from './components/Home';
import EditPage from './components/EditPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home/>,
        loader: () => fetch("http://localhost:3000/users/")
      },
      {
        path: "/adduser",
        element: <Adduser/>
      },
      {
        path: "/edit/:id",
        element: <EditPage/>,
        loader: ({params}) => fetch(`http://localhost:3000/users/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
