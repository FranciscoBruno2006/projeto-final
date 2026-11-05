import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Login from './Login'
import Navbar from './Navbar'
import Feed from './Feed';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/feed",
    element: <Feed></Feed>
  }
]
)

function App() {

  return (
  <>
    <RouterProvider router={router}/>
    
  </>
  )
}

export default App
