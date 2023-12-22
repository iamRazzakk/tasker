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
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import MyTask from './Components/MyTask/MyTask';
import PreviousTask from './Components/Dashboard/PreviousTask';
import Profile from './Components/Dashboard/Profile';
import CompleteTask from './Components/CompleteTask/CompleteTask';
import TaskManagement from './Components/Dashboard/TaskManagement';
import UpdateTask from './Components/Dashboard/UpdateTask';
import Blog from './Components/Blog/Blog';
import PrivateRoute from './PrivateRoute';
import { HelmetProvider } from 'react-helmet-async';

// Create a client
const queryClient = new QueryClient()
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
        path: 'myTask',
        element: <PrivateRoute><MyTask></MyTask></PrivateRoute>,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/singup',
        element: <Singup></Singup>
      },
      {
        path: '/complete',
        element: <PrivateRoute><CompleteTask></CompleteTask></PrivateRoute>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }


    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    errorElement: <div className='flex justify-center items-center md:p-60 text-5xl font-bold'>Error</div>,
    children: [
      {
        path: 'createTask',
        element: <PrivateRoute><CreateTask></CreateTask></PrivateRoute>
      },
      {
        path: 'previous',
        element: <PrivateRoute><PreviousTask></PreviousTask></PrivateRoute>
      },
      {
        path: 'profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: 'taskManagement',
        element: <PrivateRoute><TaskManagement></TaskManagement></PrivateRoute>
      },
      {
        path: "updateData/:id",
        element: <UpdateTask></UpdateTask>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className=''>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </div>
  </React.StrictMode>,
)
