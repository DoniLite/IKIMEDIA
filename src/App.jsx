import { useState } from 'react'
import './App.css'
import './index.css' 
import { Outlet, RouterProvider, createBrowserRouter, useRouteError } from 'react-router-dom'
import { Home } from './pages/Home'
import { Hub } from './pages/Hub'
import { EventPage } from './pages/EventPage'
import { Loisirs } from './pages/Loisirs'
import process from "process"
import { Connexion, Inscription, MailVerification } from './components/Forms'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'hub',
        element: <Hub />,
      },
      {
        path: 'events',
        element: <EventPage />,
      },
      {
        path: 'loisirs',
        element: <Loisirs />
      },
      {
        path: 'authentification',
        element:  <>
                    <Outlet />
                  </>,
        children: [
          {
            path: '',
            element: <Connexion />
          },
          {
            path: 'inscription',
            element: <Inscription />
          },
          {
            path: 'verification',
            element: <MailVerification />
          }
        ]
      },
      {
        path: 'user/:id',
        element: ''
      },
      {
        path: 'event/:id',
        element: ''
      },
      {
        path: 'post/:id',
        element: ''
      },
      {
        path: 'article/:id',
        element: ''
      }
    ]
  }
])

function Root () {
  return(
    <>
      <Outlet />
    </>
  )
}

function ErrorPage() {
  const error = useRouteError()
  console.log(error)

  return(
    <>
    </>
  )
}

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}


export default App
