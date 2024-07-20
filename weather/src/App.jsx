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

    }
    getWeather()
  }, [city])

  useEffect(() => {
    if (Weather) {
      if (Weather.weather[0].main === "Clouds") {
        image.current.src = "https://static.vecteezy.com/system/resources/thumbnails/018/931/690/small_2x/cute-cloud-cartoon-icon-png.png"
      } else if (Weather.weather[0].main === "Clear") {
        image.current.src = "https://icon2.cleanpng.com/20180308/kqw/kisspng-cartoon-sun-5aa187944ccf24.3627003215205354443146.jpg"
      } else if (Weather.weather[0].main === "Rain") {
        image.current.src = "https://png.pngtree.com/png-vector/20240126/ourmid/pngtree-cute-rain-cloud-png-image_11496082.png"
      }
    }
  }, [Weather])


  return (
    <>
      <div className='image'>
        <div className='flex justify-center items-center flex-col gap-[30px] mt-14'>
          <input onChange={changeCity} value={city} className=' mt-32 w-[40vw] h-[5vh] rounded-lg' type="text" placeholder='Enter city Name' />
          {Weather &&
            <div className=' flex justify-center items-center h-[40vh] w-[42vw]  rounded-xl shadow-2xl max-md:flex max-md:flex-col max-md:items-center max-md:justify-center'>
              <img ref={image} className='h-[230px] w-[170px] ' src={null} alt="" />
              <div className=' text-[25px] text-center '>
                <p className='font-extrabold  font-serif '>{Weather.name}</p>
                <p>Temparature : {Weather.main.temp}°C</p>
                <p>{Weather.weather[0].main}</p>
                <p>{Weather.weather[0].description}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default App
