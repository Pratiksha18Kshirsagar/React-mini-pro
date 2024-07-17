import { useState, useEffect, useRef } from 'react'
import './App.css'


function App() {

  const [Weather, setWeather] = useState(null)
  const [city, setcity] = useState("Hangal")
  let image = useRef()


  const changeCity = (e) => {
    setcity(e.target.value)
  }




  useEffect(() => {
    const getWeather = async () => {
      try {
        let apiKey = "5f6a0548fe5be4be585f911c4df0c720";
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        if (!response.ok) throw new Error('City not found');
        let data = await response.json()
        console.log(data)
        setWeather(data)
      } catch (error) {
        console.error(error);
        setWeather(null); // or setWeather({ name: 'Error', main: { temp: 'N/A' } }); to display an error message
      }
      if (Weather.weather[0].main == "Clouds") {
        image.current.src = "https://raw.githubusercontent.com/alexkowsik/react-weather-app/0db0670c49fb9c4be1ef85c95b01714def7ad3ab/src/images/03n.svg"
      }
      else if (Weather.weather[0].main == "Clear") {
        image.current.src = "https://raw.githubusercontent.com/alexkowsik/react-weather-app/0db0670c49fb9c4be1ef85c95b01714def7ad3ab/src/images/01d.svg"
      }
      else if (Weather.weather[0].main == "Rain") {
        image.current.src = "https://raw.githubusercontent.com/alexkowsik/react-weather-app/0db0670c49fb9c4be1ef85c95b01714def7ad3ab/src/images/10n.svg"
      }
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
      {Weather &&
        <div className=' h-[40vh] w-[42vw] absolute top-[200px] left-[380px] rounded-xl shadow-2xl'>
          <img ref={image} className='h-[230px] w-[170px] absolute left-[40px] top-[20px]' src={null} alt="" />
          <div className='absolute top-[60px] left-[230px] text-[25px]'>
            <p className='font-extrabold  font-serif '>{Weather.name}</p>
            <p>Temparature : {Weather.main.temp}°C</p>
            <p>{Weather.weather[0].main}</p>
            <p>{Weather.weather[0].description}</p>
          </div>
        </div>



      }

    </>
  )
}

export default App
