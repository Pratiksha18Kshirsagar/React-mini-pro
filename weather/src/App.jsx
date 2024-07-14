import { useState, useEffect } from 'react'
import './App.css'
import { CiSearch } from "react-icons/ci";

function App() {

  const [weather, setweather] = useState(null)
  const [city, setcity] = useState("Basavakalyan")

  const changeCity = (e) => {
    setcity(e.target.value)
  }

  useEffect(() => {
    const getWeather = async () => {
      let apiKey = "64b71db2b9ac2e33740181245642c47a";
      let data = 
      let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
      console.log(response)
    }
    getWeather()

  },)







  return (
    <>
      <div className=' h-[80vh] w-[80vw] bg-blue-100 '>
        <img className='relative h-[80vh] w-[80vw]' src="https://png.pngtree.com/thumb_back/fh260/background/20201012/pngtree-white-cloud-on-blue-sky-weather-background-image_410050.jpg" alt="" />
        <div className='absolute top-[170px] left-[400px]'>
          <input onChange={changeCity} value={city} className='w-[40vw] h-[5vh] rounded-lg' type="text" placeholder='Enter city Name' /></div>
        <button className='absolute top-[175px] left-[880px] text-[25px] font-bold  hover:text-green-700'><CiSearch /></button>
      </div>
    </>
  )
}

export default App
