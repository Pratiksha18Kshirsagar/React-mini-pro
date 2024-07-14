import React from 'react'

const cards = ({title,src,desc}) => {
  return (
    
      <div className="bg-yellow-50 h-[55vh] w-[30vw] rounded-lg mt-8 border-black border-solid border-2 max-md:w-[90vw]">
        <img className='h-[45vh] w-[30vw] rounded-lg  max-md:w-[90vw]' src={src} alt="" />
        <div>{title}</div>
        <div>{desc}</div>
      </div>
    
  )
}

export default cards
