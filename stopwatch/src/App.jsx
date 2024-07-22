import { useState, useRef } from 'react'
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
    clearInterval(timeRef.current)
  }

  const reset = () => {
    stop()
    settime(0)

  }

  return (
    <>
    <div className='container bg-slate-100 h-[50vh] w-[40vw] text-black flex items-center justify-center flex-col rounded-2xl max-md:h-[85vh] max-lg:w-[85vw] '>
      <div>
        <p className='text-[30px]'>Stopwatch</p>
        <p className='mt-10 text-center text-[30px]'>{(time / 1000).toFixed(0)}</p>
        </div>

      <div className='flex gap-14 p-11 max-md:flex max-md:flex-col '>
        <button className='border  border-white p-6 bg-green-300 hover:bg-green-400 text-black text-[25px] rounded-xl' 
        onClick={start}><VscDebugStart /></button>
        <button className='border border-white p-6 bg-yellow-200 hover:bg-yellow-400 text-black text-[25px] rounded-xl ' 
        onClick={stop}><CiStopwatch /></button>
        <button className='border border-white p-6 bg-red-300 hover:bg-red-400 text-black text-[25px] rounded-xl'
         onClick={reset}><GrPowerReset /></button>
    
      </div>
      </div>
    </>
  )
}

export default App
