import React from 'react'
import Button from './Button'
import { useSelector } from 'react-redux'

const list = ["All", "Music", "Movies", "Comedy", "News", "Sports", "Football", "Cricket", "Crime", "Game", "Drama", "Podcasts", "Reels", "Shorts", "Recently", "Watched", "New to you", "Live", "Marvel studios", "Programming", "React", "DC", "Stree"]

const ButtonList = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  return (
    <div className={isMenuOpen? 'flex w-[1327px] overflow-x-auto custom-scrollbar px-[12px]': 'flex w-screen overflow-x-auto custom-scrollbar px-[12px]'}    
    >
      {list.map((btnName) => <Button key={btnName} name={btnName}/>)}
    </div>
  )
}

export default ButtonList