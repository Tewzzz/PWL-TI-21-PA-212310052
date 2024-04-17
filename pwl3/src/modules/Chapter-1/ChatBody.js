import React from "react";
import moment from "moment";

const ChatBubbleItem = ({ data, isSender }) => {
  const bubbleStyle = {
    backgroundColor: isSender ? "#a198a7" : "#a83aef",
    alignSelf: isSender ? "flex-end" : "flex-start",
    color: "#fff",
    padding: "8px",
    borderRadius: "10px",
    maxWidth: "70%",
    textAlign: isSender ? "right" : "left",
    display: "inline-block",
    wordWrap: "break-word",
    marginBottom: "10px", // Added to create spacing between chat bubbles
  };

  const containerStyle = {
    textAlign: isSender ? "right" : "left", // Align container to the right for sender bubbles, left for receiver bubbles
    marginBottom: "10px", // Added to create spacing between chat bubbles
  };

  return (
    <div style={containerStyle}>
      <div style={bubbleStyle}>
        <span>{data.message}</span>
        <span
          className="chat-date"
          style={{ fontSize: "11px", marginLeft: "5px" }}
        >
          {moment(data.date).format("HH:mm")}
        </span>
      </div>
    </div>
  );
};

const ChatBody = ({ data }) => {
  const itsme = "Febry";

  return (
    <div className="chat-body">
      {data.map((message, index) => (
        <ChatBubbleItem
          key={index}
          data={message}
          isSender={message.from === itsme}
        />
      ))}
    </div>
  );
};

export default ChatBody;
