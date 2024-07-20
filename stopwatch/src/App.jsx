import { useState , useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { VscDebugStart } from "react-icons/vsc";
import { GrPowerReset } from "react-icons/gr";
import { CiStopwatch } from "react-icons/ci";




function App() {
  const [time, settime] = useState(0)
  const timeRef = useRef(null)





  const start = () => {
    // if (timeRef.current !== null) return; // Prevent multiple intervals
    timeRef.current = setInterval(() => {
      settime(prevTime => prevTime + 1000)
    }, 1000);
  }

  const stop = () => {
  }

  const reset = () => {
  }

  return (
    <>
      <p>{(time/1000).toFixed(0)}</p>
      <button onClick={start}><VscDebugStart /></button>
      <button onClick={stop}><CiStopwatch /></button>
      <button onClick={reset}><GrPowerReset /></button>
    </>
  )
}

export default App
