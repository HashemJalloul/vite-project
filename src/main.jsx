import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Add from './pages/Add.jsx'
import Test from './pages/Test.jsx'
import Edit from './pages/Edit.jsx'
import Root from './pages/Root.jsx'

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: < About />,
        children: [
          {
            path: "add",
            element: <Add />,
            children: [
              {
                path: "test/:id/:name",
                element: <Test />
              }
            ]
          },
          {
            path: "edit",
            element: <Edit />
          }]
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  }


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routers} />
  </StrictMode>,
)
