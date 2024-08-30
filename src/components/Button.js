import React from 'react'

const Button = ({name}) => {
  return (
    <button className='my-[12px] mx-2 px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded-lg whitespace-nowrap'>{name}</button>
  )
}

export default Button