import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { FaExchangeAlt } from "react-icons/fa";
import './App.css'

function App() {

  const [isdarkTheme, setisdarkTheme] = useState(false)

  const themeChange = () => {
    setisdarkTheme(!isdarkTheme)

  }



  return (
    <>
      <div className={isdarkTheme ? 'bg-black h-[100vh] w-[100vw]' : 'bg-cyan-200 h-[100vh] w-[100vw]'} >

        <button onClick={themeChange} className= {isdarkTheme ? "text-cyan-200 text-[100px]" : "text-black text-[100px]"} ><FaExchangeAlt /></button>

      </div>
    </>
  )
}

export default App
