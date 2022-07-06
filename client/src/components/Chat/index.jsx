import React, { useEffect,useState } from "react";
import ChatForm from "../ChatForm";
import MessageList from "../MessageList";
import { addSubscriber,socket } from '../../api/ws'



//rfce
function Chat() {
  const [messages,setMessages]=useState([]);

  useEffect(()=>{
   addSubscriber('newMessage',(message)=>{
      setMessages(prev => [...prev,message]);
    });
  },[])
  const handlerSubmit=(values,formikBag)=>{
    //send data to server
    socket.emit("sendMessage",values)
  };
  console.log(messages);

  return (
    <div>
      <ChatForm onSubmit={handlerSubmit}/>
      <MessageList list={[messages]}/>
    </div>
  );
}

export default Chat;
