import React from "react";

function MessageList(props) {
  const messages = Array.isArray(props.list) ? props.list : [];

  return (
    <ul>
      {messages.map((message) => {
        return <li key={message._id}>{message.body}</li>;
      })}
    </ul>
  );
}

export default MessageList;
