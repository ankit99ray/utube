import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div>
      <div className='col-span-11 flex-1 overflow-x-auto'>
        <ButtonList/>
      </div>
      <div>
        <VideoContainer/>
      </div>
    </div>
  )
}

export default MainContainer