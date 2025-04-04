import React from 'react'
import { Route, Router } from 'react-router-dom'
import Home from './Pages/Home'

const App = () => {
  return (
    <div className='bg-slate-300 h-[100vh]'>
      <Home/>
    </div>
  )
}

export default App