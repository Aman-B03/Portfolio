import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Contact from './components/Contact'
import Home from './components/Home'
import Resume from './components/Resume'
import Myprojects from './components/Myprojects'

function App() {

  const router = createBrowserRouter([
    {
      path: "/contact",
      element :  <Contact/>
       },    
    {
      path: "/resume",
      element :  <Resume/>
       },
    {
      path: "/",
      element :  <Home/>
       },
    {
      path: "/myProjects",
      element :  <Myprojects/>
       }
    
  ])

  return (
    <>
      
      <RouterProvider router = {router} />
    </>
  )
}

export default App
