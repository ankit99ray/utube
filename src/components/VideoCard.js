import React from 'react'

const VideoCard = ({info}) => {
    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;
  return (
    <div className=' p-2 w-72 mx-5 my-2 shadow-lg'>
        <img className="rounded-lg" src={thumbnails.medium.url}/>
        <ul>
            <li className='whitespace-pre-line text-sm mt-2'>{title}</li>
            <li className='text-gray-400'>{channelTitle}</li>
            <li className='text-gray-400'>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}

export default VideoCard