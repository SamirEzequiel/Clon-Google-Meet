import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faTimes, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { addMessage, setChatOpen, setTyping } from "../../store/actioncreator";
import firepadRef, { firebaseHelpers, userName } from "../../server/firebase";
import "./Chat.css";

const Chat = (props) => {
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const chatRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [props.messages]);

  useEffect(() => {
    if (props.chatOpen) {
      loadMessages();
      setupChatListeners();
    }
  }, [props.chatOpen]);

  const loadMessages = () => {
    const messagesRef = firebaseHelpers.child(firepadRef, "messages");
    firebaseHelpers.onValue(messagesRef, (snap) => {
      if (snap.val()) {
        const messages = Object.values(snap.val());
        props.setMessages(messages);
      }
    });
  };

  const setupChatListeners = () => {
    const messagesRef = firebaseHelpers.child(firepadRef, "messages");
    const typingRef = firebaseHelpers.child(firepadRef, "typing");

    // Listen for new messages
    firebaseHelpers.onChildAdded(messagesRef, (snap) => {
      const newMessage = snap.val();
      if (newMessage.userName !== userName) {
        props.addMessage(newMessage);
      }
    });

    // Listen for typing indicators
    firebaseHelpers.onChildChanged(typingRef, (snap) => {
      const typingData = snap.val();
      if (typingData && typingData.userName !== userName) {
        props.setTyping({ [snap.key]: typingData });
      }
    });

    firebaseHelpers.onChildRemoved(typingRef, (snap) => {
      props.setTyping({ [snap.key]: null });
    });
  };

  const sendMessage = () => {
    if (message.trim()) {
      const messagesRef = firebaseHelpers.child(firepadRef, "messages");
      const newMessageRef = firebaseHelpers.push(messagesRef);
      const newMessage = {
        id: Date.now(),
        text: message.trim(),
        userName: userName,
        timestamp: Date.now(),
        isCurrentUser: true,
      };

      firebaseHelpers.set(newMessageRef, newMessage);
      props.addMessage(newMessage);
      setMessage("");
      setIsTyping(false);
      
      // Clear typing indicator
      const typingRef = firebaseHelpers.child(firepadRef, "typing");
      const currentUserTypingRef = firebaseHelpers.child(typingRef, userName);
      firebaseHelpers.set(currentUserTypingRef, null);
    }
  };

  const handleTyping = (e) => {
    setMessage(e.target.value);
    
    const typingRef = firebaseHelpers.child(firepadRef, "typing");
    const currentUserTypingRef = firebaseHelpers.child(typingRef, userName);
    
    if (e.target.value && !isTyping) {
      setIsTyping(true);
      firebaseHelpers.set(currentUserTypingRef, {
        userName: userName,
        isTyping: true,
        timestamp: Date.now(),
      });
    } else if (!e.target.value && isTyping) {
      setIsTyping(false);
      firebaseHelpers.set(currentUserTypingRef, null);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const toggleChat = () => {
    props.setChatOpen(!props.chatOpen);
  };

  const getTypingUsers = () => {
    return Object.values(props.typing)
      .filter((typing) => typing && typing.userName !== userName)
      .map((typing) => typing.userName);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="chat-toggle" onClick={toggleChat}>
        <FontAwesomeIcon icon={faComments} />
        {props.messages.length > 0 && (
          <span className="chat-notification">{props.messages.length}</span>
        )}
      </div>

      {/* Chat Panel */}
      {props.chatOpen && (
        <div className="chat-panel" ref={chatRef}>
          <div className="chat-header">
            <h3>Chat</h3>
            <button className="close-chat" onClick={toggleChat}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>

          <div className="chat-messages">
            {props.messages.map((msg, index) => (
              <div
                key={msg.id || index}
                className={`message ${msg.userName === userName ? "own-message" : "other-message"}`}
              >
                <div className="message-content">
                  <div className="message-header">
                    <span className="message-author">{msg.userName}</span>
                    <span className="message-time">{formatTime(msg.timestamp)}</span>
                  </div>
                  <div className="message-text">{msg.text}</div>
                </div>
              </div>
            ))}
            
            {/* Typing indicators */}
            {getTypingUsers().length > 0 && (
              <div className="typing-indicator">
                <span>{getTypingUsers().join(", ")} está escribiendo...</span>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input">
            <textarea
              value={message}
              onChange={handleTyping}
              onKeyPress={handleKeyPress}
              placeholder="Escribe un mensaje..."
              rows="2"
            />
            <button 
              className="send-button" 
              onClick={sendMessage}
              disabled={!message.trim()}
            >
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    chatOpen: state.chatOpen,
    typing: state.typing,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (message) => dispatch(addMessage(message)),
    setMessages: (messages) => dispatch(setMessages(messages)),
    setChatOpen: (isOpen) => dispatch(setChatOpen(isOpen)),
    setTyping: (typingData) => dispatch(setTyping(typingData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
