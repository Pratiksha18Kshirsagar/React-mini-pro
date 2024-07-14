import { useState } from 'react'
import Navbar from './components/navbar'
import Cards from './components/cards'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <div className='flex gap-8  justify-center max-sm:flex max-md:flex-col max-md:items-center '>
    <Cards src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5jWBBkwoJUTcPtpYrWV0snWTDB_3vp6UkiKEOZKrq-lsJezqK3f9aJjWR1HBZlTpHhRg&usqp=CAU" title="Bear jii" desc="I am from Himalayan jungles!"/>
    <Cards src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD0jyZjWsjUXUelj0zoIn8IihCBw_tCkGTpQ&s" title = "Monkey jii" desc="I am from Rjasthan jungles!"/>
    <Cards src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTsidfSyB2ew05_ev2wZY4PdkRPrbbU_pSAQ&s"  title="Ve-Poo jii" desc="I am from sikkim jungles!"/></div>
    </>
  )
}

export default App
