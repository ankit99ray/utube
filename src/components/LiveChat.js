import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import store from '../utils/store';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';
import { RANDOM_MESSAGE_LENGTH } from '../utils/constants';

const LiveChat = () => {

    const [liveMessage, steLiveMessage] = useState("");
    
    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages);
    useEffect(() => {
        const interval = setInterval(() => {
            console.log("hey");
            dispatch(addMessage({
                name: generateRandomName(),
                message: makeRandomMessage(RANDOM_MESSAGE_LENGTH)
            }));
        }, 1500);

        return () => clearInterval(interval);
    }, []);


  return (
    <div className='w-full mx-5'>
        <div className='mx-5 p-2 w-full border border-black rounded-t-2xl text-center'>Live Chat</div>
        <div className='border border-x-black mx-5 w-full h-[409px] overflow-y-scroll custom-scrollbar-live flex flex-col-reverse'>
            {chatMessages.map((m, index) => (
                <ChatMessage key={index} name={m.name} message={m.message}/>
            ))}
        </div>
        <form className='mx-5 p-2 w-full border border-black rounded-b-2xl' 
                onSubmit={(e) => {
                    e.preventDefault();
                    // console.log("on form submit" + liveMessage);
                    dispatch(addMessage({
                        name: "Ankit",
                        message: liveMessage
                    }));
                    steLiveMessage("");
                }}    
        >
            <input 
                className='w-[270px] border border-gray-300 px-3 py-1 ml-2 rounded-sm'
                placeholder='Type your message here'
                type='text'
                value={liveMessage}
                onChange={e => steLiveMessage(e.target.value)}
            ></input>
            <button className='border border-green-300 bg-green-300 mx-2 px-2 py-1 rounded-sm'>Send</button>
        </form>
    </div>
  )
};

export default LiveChat