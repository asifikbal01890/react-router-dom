import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './componets/Home/Home.jsx'
import ErrorPage from './componets/ErrorPage/ErrorPage.jsx'
import Users from './componets/users/Users.jsx'
import UserDetails from './componets/users/UserDetails.jsx'
import Posts from './componets/Post/Posts.jsx'
import PostDetails from './componets/Post/PostDetails.jsx'

// const route = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>This is home</div>
//   },
//   {
//     path: "/about",
//     element: <div>this is about</div>
//   },
//   {
//     path: "/contact",
//     element: <div>this is Contact</div>
//   }
// ])

const route = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/about",
        element: <div>this is about</div>
      },
      {
        path: "/contact",
        element: <div>this is Contact</div>
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users")
      }, 
      {
        path: "users/:userId",
        element: <UserDetails></UserDetails>,
        loader: ({ params })=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
        
      },
      {
        path: "posts",
        element: <Posts></Posts>,
        loader: ()=> fetch(`https://jsonplaceholder.typicode.com/posts`)        
      },
      {
        path: "posts/:postId",
        element: <PostDetails></PostDetails>,      
      },
    ]

  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)
