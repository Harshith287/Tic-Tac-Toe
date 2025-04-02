import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TicTacToe from './components/TicTacToe'

function App() {

  return (
    <div className='text-center d-flex justify-content-center  vh-100  app-container'>
      <TicTacToe />
    </div>
  )
}

export default App
