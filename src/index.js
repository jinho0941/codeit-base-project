import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import ListPage from './pages/list-page'
import PostIdPage from './pages/post-id'
import AnswerPage from './pages/answer-page'
import MainPage from './pages/main-page'
import ApiTestPage from './pages/api-test-page'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{ index: true, element: <MainPage /> }],
  },
  {
    path: '/list',
    element: <ListPage />,
    children: [],
  },
  {
    path: '/post/:postId',
    element: <PostIdPage />,
    children: [],
  },
  {
    path: '/post/:postId/answer',
    element: <AnswerPage />,
    children: [],
  },
  {
    path: '/apiTest',
    element: <ApiTestPage />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
