import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Carousel } from './commponents/Carousel'
import {slides} from "./data/carouselData.json"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Carousel data={slides}/>
    </div>
  )
}

export default App
