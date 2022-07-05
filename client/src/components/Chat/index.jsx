import React from "react";
import ChatForm from "../ChatForm";
import MessageList from "../MessageList";


//rfce
function Chat() {


  const handlerSubmit=()=>{
    //send data to server
  };

  return (
    <div>
      <MessageList list={[]}/>
      <ChatForm onSubmit={handlerSubmit}/>
    </div>
  );
}

export default Chat;
