import React from 'react'
import { useSelector } from 'react-redux'
import store from '../utils/store'
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  if(!isMenuOpen)return null;
  return (
    <div className='col-span-1 w-52 shadow-lg overflow-y-auto h-[660px] custom-scrollbar'>
      <div className='mt-1 px-2 ml-1'>
        <ul>
          <Link to="/"><li className='hover:bg-gray-100 rounded-lg px-2 py-1 font-bold cursor-pointer'>Home</li></Link>
          <li className='hover:bg-gray-100 rounded-lg px-2 py-1 font-bold cursor-pointer'>Shorts</li>
          <li className='hover:bg-gray-100 rounded-lg px-2 py-1 font-bold cursor-pointer'>Subscriptions</li>
        </ul>
      </div>
      <div className='mt-1 px-2 ml-1'>
        <p className='text-lg font-bold '>Explore</p>
        <ul>
          <li className='hover:bg-gray-100 rounded-lg px-2 py-1 cursor-pointer'>Trending</li>
          <li className='hover:bg-gray-100 rounded-lg px-2 py-1 cursor-pointer'>Shopping</li>
          <li className='hover:bg-gray-100 rounded-lg px-2 py-1 cursor-pointer'>Music</li>
          <li className='hover:bg-gray-100 rounded-lg px-2 py-1 cursor-pointer'>Films</li>
          <li className='hover:bg-gray-100 rounded-lg px-2 py-1 cursor-pointer'>Live</li>
          <li className='hover:bg-gray-100 rounded-lg px-2 py-1 cursor-pointer'>Gaming</li>
          <li className='hover:bg-gray-100 rounded-lg px-2 py-1 cursor-pointer'>News</li>
          <li className='hover:bg-gray-100 rounded-lg px-2 py-1 cursor-pointer'>Sport</li>
          <li className='hover:bg-gray-100 rounded-lg px-2 py-1 cursor-pointer'>Courses</li>
          <li className='hover:bg-gray-100 rounded-lg px-2 py-1 cursor-pointer'>Fashion & beauty</li>
          <li className='hover:bg-gray-100 rounded-lg px-2 py-1 cursor-pointer'>Podcasts</li>
        </ul>
      </div>
      <div className='mt-1 px-2 ml-1'>
        <p className='text-lg font-bold'>More from youtube</p>
        <ul>
          <li className='hover:bg-gray-100 rounded-lg px-2 py-1 cursor-pointer'>YouTube Premium</li>
          <li className='hover:bg-gray-100 rounded-lg px-2 py-1 cursor-pointer'>YouTube Music</li>
          <li className='hover:bg-gray-100 rounded-lg px-2 py-1 cursor-pointer'>YouTube Kids</li>
        </ul>
      </div>
      <div className='mt-1 px-2 ml-1'>
        <ul>
          <li className='hover:bg-gray-100 rounded-lg px-2 py-1 cursor-pointer font-bold'>Settings</li>
          <li className='hover:bg-gray-100 rounded-lg px-2 py-1 cursor-pointer font-bold'>Report history</li>
          <li className='hover:bg-gray-100 rounded-lg px-2 py-1 cursor-pointer font-bold'>Help</li>
          <li className='hover:bg-gray-100 rounded-lg px-2 py-1 cursor-pointer font-bold'>Send feedback</li>
        </ul>
      </div>
      <div className='mt-1 px-2'>
        <p className='whitespace-pre-line p-2 text-gray-500'>
        {`About Press Copyright
        Contact us Creator
        Advertise Developers
        Terms Privacy Policy
        & Safety
        How YouTube works
        Test new features
        © 2024 Google LLC`}
        </p>
      </div>
    </div>
  )
}

export default Sidebar