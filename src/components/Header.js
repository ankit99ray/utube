import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { Link } from 'react-router-dom';
import { USER_ICON, YOUTUBE_SEARCH_API } from '../utils/constants';
import store from '../utils/store';
import { cacheResults } from '../utils/searchSlice';

const Header = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector(store => store.search);
  const dispatch = useDispatch();

  //use effect
  useEffect(() => {

    /*
      Make an api call eyery time we type something in search
      but if the time difference between two keys is less than 200ms then don't make the api call
      otherwise make the api call
    */
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
      }
      else{
        const timer = setTimeout(() => getSearchSuggestions(), 200);
        return () => {
          clearTimeout(timer);
        };
      }

  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);
    dispatch(cacheResults({
      [searchQuery]: json[1]
    }));
  }

  //dispatching

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }

  return (
    <div className='grid grid-flow-col  py-1 px-3 shadow-lg'>
      <div className='flex col-span-1'>
        <img 
          onClick={() => toggleMenuHandler()}
          className='h-10 mt-[9px] cursor-pointer'
          alt='menu'
          src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8CAgIAAADb29vDw8OxsbHt7e3y8vK4uLiampo7OztmZmaAgIC8vLzT09NhYWEcHBxxcXHi4uITExOioqJXV1eHh4dMTEx7e3uQkJAnJyc1NTX5+fnW1tbJyclAQEBzZbpGAAABTUlEQVR4nO3cC1LCQAwG4LK8lYcioCLi/W9pGa9gkyH9vgt0/tmhGzbNdh0AAAAAAAAAAAAAAAAAAABEW0yHtkzNt9u/tKFdXg95AdeDx/uzygo4b20SobVdTsBlUMA+4ltOwmNUwH4RZykJT2EJJ+2ckvApMOFzSsL3wIQfKQk/AxPOUxJO496lLamw2YTth8ecgF23bwEZ+2dssgL2W+IloGb7Siva7q671XxY2+/MfAAAAAAPY3GbDeuW2wOe/QSctZ2Suod35xZzXpp2ILwOO/Pe5gQ8BPaArykJ14E94JxFjOwf5nQu9ID/M2HOGtb/HdZ/l9bfD0dQ04ygLu3q/7cAAAAAeBDlv9UvP29Rfmam/NxT/dm1+vOH9WdI6/eA689y15/Hr3+nQv17MUZwt8kI7qfp6t8xBAAAAAAAAAAAAAAAAAAAwDj9AgjsI6cJ8n2yAAAAAElFTkSuQmCC'
        />
        <a href='/'><img 
          className='h-[60px] cursor-pointer'
          alt='youtube-logo'
          src="data:image/png;base64,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"
        /></a>
      </div>
      <div className='col-span-10 px-10 mt-2'>
          <div>
            <input 
                placeholder="Search" 
                className=' px-6 w-1/2 border border-gray-300 rounded-l-full p-2' 
                type='text'
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setShowSuggestions(false)}
            />
            <button className='p-2 px-5 border border-gray-300 rounded-r-full'>🔍</button>
          </div>
          {showSuggestions && <div className='fixed bg-white w-[34rem]  shadow-xl border border-gray-100 rounded-xl'>
            <ul>
              {suggestions.map((s) => (<li key={s} 
                              className='px-6 mx-1 py-1 hover:bg-gray-50 cursor-default'
                              >{s}</li>))}
            </ul>
          </div>}
      </div>
      <div className='col-span-1 ml-auto mr-2 cursor-pointer'>
        <img 
          className='h-14 pt-2 pb-3'
        alt='user-icon'
          src={USER_ICON} 
        />
      </div>
    </div>
  )
}

export default Header