import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Sections from './Components/Sections/Sections'
import Question from './Components/Question/Question'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
     <Sections></Sections>
     <br />
     <Question></Question>
    </div>
  )
}

export default App
