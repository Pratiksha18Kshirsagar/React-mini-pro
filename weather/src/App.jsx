import { useState, useEffect } from 'react'
import './App.css'


function App() {

  const [Weather, setWeather] = useState(null)
  const [city, setcity] = useState(null)


  const changeCity = (e) => {
    setcity(e.target.value)
  }


  useEffect(() => {
    const getWeather = async () => {
      let apiKey = "5f6a0548fe5be4be585f911c4df0c720";
      let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      let data = await response.json()
      console.log(data)
      setWeather(data)
    }
    getWeather()

  }, [city])



  return (
    <>
      <div className=' h-[80vh] w-[80vw] bg-blue-100 '>
        <img className='relative h-[80vh] w-[80vw]' src="https://github.com/alexkowsik/react-weather-app/blob/master/src/images/background.jpg?raw=true" alt="" />
        <div className='absolute top-[120px] left-[400px]'>
          <input onChange={changeCity} value={city} className='w-[40vw] h-[5vh] rounded-lg' type="text" placeholder='Enter city Name' /></div>
        {/* <button className='absolute top-[175px] left-[880px] text-[25px] font-bold  hover:text-green-700'><CiSearch /></button> */}
      </div>
      {city &&
        <div className=' h-[40vh] w-[42vw] absolute top-[200px] left-[380px] rounded-xl shadow-2xl'>
          <img className='h-[200px] w-[160px] absolute left-[40px] top-[20px]' src="https://raw.githubusercontent.com/alexkowsik/react-weather-app/0db0670c49fb9c4be1ef85c95b01714def7ad3ab/src/images/01d.svg" alt="" />
          <div>
            <p>{Weather.name}</p>
            <p>{Weather.main}</p>
          </div>
        </div>
      
     
     
      }

    </>
  )
}

export default App
