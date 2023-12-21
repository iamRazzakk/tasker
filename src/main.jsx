import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import AuthProvider from './Components/Provider/AuthProvider';
import Singup from './Components/Singup/Singup';
import Dashboard from './Components/Dashboard/Dashboard';
import CreateTask from './Components/Dashboard/CreateTask';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <div className='flex justify-center items-center md:p-60 text-5xl font-bold'>Error</div>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/singup',
        element: <Singup></Singup>
      },

    ]
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    errorElement: <div className='flex justify-center items-center md:p-60 text-5xl font-bold'>Error</div>,
    children: [
      {
        path: 'createTask',
        element: <CreateTask></CreateTask>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
