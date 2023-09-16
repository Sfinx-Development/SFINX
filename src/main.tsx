import {  } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './components/RootLayout'
import IndexPage from './pages/indexPage'

const router = createBrowserRouter(
  createRoutesFromElements (
    <Route element={<RootLayout/>}>
      <Route index element={<IndexPage/>}></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
