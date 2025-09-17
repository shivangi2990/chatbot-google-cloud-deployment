
import react from 'react';
import {userSelector} from 'react-redux';

const MessageList = ()=>{
    const messages = userSelector((state)=> state.chat.messages);
    return(
        <div className='flex-1 p-3 overflow-y-auto'>
            {messages.map((msg,index)=>(
                <div
                key={index}
                className={`mb-2 p-2 rounded-lg max-w-[70%] ${
                    msg.sender === 'bot'? 'bg-gray-200 text-let':
                    'bg-blue-500 text-white ml-auto text-right'
                }`}>
                    {msg.text}
                </div>
            ))}
        </div>
    )
}
export default MessageList