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
        element: <MyTask></MyTask>,
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
        element: <CompleteTask></CompleteTask>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }


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
      },
      {
        path: 'previous',
        element: <PreviousTask></PreviousTask>
      },
      {
        path: 'profile',
        element: <Profile></Profile>
      },
      {
        path: 'taskManagement',
        element: <TaskManagement></TaskManagement>
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
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
