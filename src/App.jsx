import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  
  return (
    <>
      <div className='text-3xl text-slate-600 bg-blue'>Mahfil and Masti</div>
      <AddTodo/>
      <Todos/>

    </>
  )
}

export default App
