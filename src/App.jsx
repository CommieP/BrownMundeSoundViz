import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ThreeCanvas from './Components/Fullscreen'


function App() {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    console.log("test");
  }
  return (
    <>
      <ThreeCanvas handleClick={()=>handleClick()}></ThreeCanvas>
    </>
  )
}

export default App
