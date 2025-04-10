import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Header from './Components/Header/Header.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Users from './Components/Users/Users.jsx';
import UserDetails from './Components/UserDetails/UserDetails.jsx';
import Posts from './Components/Posts/Posts.jsx';
import PostDetails from './Components/PostDetails/PostDetails.jsx';
import Error from './Components/Error/Error.jsx';
import Albums from './Components/Albums/Albums.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/users',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },{
        path: '/user/:userId',
        loader: ({params})=>  fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>
      },{
        path: '/posts',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },{
        path: '/post/:id',
        loader: ({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
        element:<PostDetails></PostDetails>
      },
      {
        path: '/albums',
        loader:()=> fetch('https://jsonplaceholder.typicode.com/albums'),
        element:<Albums></Albums>
      }
    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
