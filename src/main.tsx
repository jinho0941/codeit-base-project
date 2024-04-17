import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.tsx'
import './index.css'
import AnswerPage from './pages/answer-page.tsx'
import { Toaster } from 'sonner'
import ListPage from './pages/list-page.tsx'
import PostIdPage from './pages/post-id-page.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [],
  },
  {
    path: '/post/:postId/answer',
    element: <AnswerPage />,
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
