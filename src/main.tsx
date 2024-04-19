import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Toaster } from 'sonner'
import ListPage from './pages/list/page.tsx'
import PostIdPage from './pages/post-id/page.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [],
  },
  {
    path: '/list',
    element: <ListPage />,
  },
  {
    path: '/list/:page',
    element: <ListPage />,
  },
  {
    path: '/post/:postId',
    element: <PostIdPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Toaster position='top-center' />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
