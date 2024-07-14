import React from 'react'

const navbar = () => {
  return (
    <div className='bg-green-200'>
      <ul className='flex gap-10 font-mono font-bold p-4 text-lg  '>
        <li className='hover:text-orange-500'>Home</li>
        <li className='hover:text-orange-500'>About</li>
        <li className='hover:text-orange-500'>Contact</li>
        <li className='float-right hover:text-orange-500 '>GitHub</li>
      </ul>
    </div>
  )
}

export default navbar
