import React, { useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { LoginSignIn } from './LoginSignIn'
import Browse from './Browse'



const Body = () => {

  
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element: <LoginSignIn/>,
        },
        {
            path:"/browse",
            element: <Browse/>,
        },
      
    ]
    )
  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body