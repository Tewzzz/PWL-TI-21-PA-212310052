import React, { useEffect, useMemo, useRef, useState } from "react";
import { ButtonPrimary, ButtonSecondary } from "../../../Chapter-1/ButtonUI";
// import ChatBody from "./ChatBody";
import moment from "moment";

export default function MessagersUI({profile, selectedChat, selectedUser}) {
  const EmptyChat = () => {
    return (
      <div>
        <div className="info text-center">
          <h1>No conversations</h1>
          <p>You didn't made any conversation yet, please select username</p>
          <span className="badge badge-primary">Start a chat</span>
        </div>
      </div>
    );
  };
  const StylesMessager = {
    chatBox: {
      minHeight: "200px",
      maxHeight: "45vh",
      overflowY: "auto",
    },
    dateStyle: {
      textAlign: "center",
      margin: "10px 0",
      color: "#999",
      fontWeight: "bold",
    },
  };
  const endOfMessagesRef = useRef(null);
  const [writeChat, setWriteChat] = useState("");
  const [myChat, setMyChat] = useState([]);
  const [search, setSearch] = useState("");
  const ChatBodyWithGrouped = ({ data, profile}) => {
    const renderChatBubbles = () => {
        return data.map((message, index) => {
            const isSender = message.from_id === profile.id;
            const bubbleStyle = {
                background: isSender ? "#dcf8c6" : "#fff",
                alignSelf: isSender ? "flex-end" : "flex-start",
            };
            return (
                <div key={index} className="chat-bubble" style={{...bubbleStyle, padding: "10px", borderRadius: "8px", marginTop: "5px"}}>
                    <p>{message.message}</p>
                </div>
            );
        });
    };
    return (
        <div className="chat-bubbles">
            {renderChatBubbles()}
        </div>
    );
  };

  const ResultMessageData = useMemo(() => {
    let computedData = myChat.map((msg) => ({
      ...msg,
      date_fmt: moment(msg.date).format("YYYY-MM-DD"),
      isOutgoing: msg.from_id === profile.id,
    }));
    if (search) {
      computedData = computedData.filter((listData) => {
        return Object.keys(listData).some((key) =>
          listData[key].toString().toLowerCase().includes(search.toLowerCase())
        );
      });
    }

    return computedData;
  }, [myChat, profile.id, search]);

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setMyChat(selectedChat)
     scrollToBottom();
  }, [selectedChat]);

  const HandlerSendChat = (e) => {
    e.preventDefault();
    const newMessage = {
      id: myChat.length + 1,
      message: writeChat,
      from: "Febry",
      date: moment().format("YYYY-MM-DD HH:mm:ss"),
    };

    setMyChat([...myChat, newMessage]);
    setWriteChat("");
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title align-items-start flex-column">
          <span className="fw-bold mb-2 text-gray-900">Chats</span>
        </h3>
        <div className="card-toolbar">
          <ButtonSecondary
            items={{
              title: "Create new chat",
              btn_class: "btn-icon btn-clear",
            }}
          >
            <i className="bi bi-pencil-square"></i>
          </ButtonSecondary>
        </div>
      </div>
      <div className="card-body p-0">
        {ResultMessageData.length > 0 ? (
          <>
            <div className="chat-message px-2 h-100" style={StylesMessager.chatBox}>
              <ChatBodyWithGrouped data={ResultMessageData} profile={profile} />
              <div ref={endOfMessagesRef} />
            </div>
            <div className="chat-send bg-light p-3">
              <form method="post" autoComplete="off" onSubmit={(e) => HandlerSendChat(e)}>
                <div className="d-flex justify-content-between align-items-center">
                  <input
                    type="text"
                    className="form-control me-2"
                    autoFocus={true}
                    value={writeChat}
                    onChange={(e) => setWriteChat(e.target.value)}
                  />
                  <ButtonPrimary
                    items={{
                      title: "Send",
                      btn_class: "btn-icon btn-success",
                      type: "submit",
                    }}
                  >
                    <i className="bi bi-send"></i>
                  </ButtonPrimary>
                </div>
              </form>
            </div>
          </>
        ) : (
          <EmptyChat />
        )}
      </div>
    </div>
  );
}
