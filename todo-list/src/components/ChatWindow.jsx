
import React from 'react'
import MessageList from './MessageList';
import MessageInput from './MessageInput';
const ChatWindow=()=>{
    return(
        <div className='w-96 h-[500px] bg-white shadow-lg rounded-xl flex flex-col'>
            <div className='p-3 bg-blue-600 text-white font-semibold rounded-t-xl'>
                Chatbot
            </div>
            <MessageList/>
            <MessageInput/>
        </div> 
   )
};
export default ChatWindow;