import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Grid from './components/Grid'

const App = () => {

  return (
    <div>
      <h1>NYC Community Pools</h1>
      <h2>Welcome to Park Centers!</h2>
      <Grid park='Tony Dapolito' color='blue'/>
    </div>
  )
}

export default App
