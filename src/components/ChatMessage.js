import React from 'react'
import { USER_ICON } from '../utils/constants'

const ChatMessage = ({name, message}) => {
  return (
    <div className='mx-2 my-1 flex items-center bg-gray-50 py-2'>
        <img
        className='w-7 h-7'
            alt='user-icon'
            src={USER_ICON}
        />
        <span className='ml-1 mr-2 font-bold'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage