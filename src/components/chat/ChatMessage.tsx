import React from "react";
import { Avatar } from "@mui/material";
import "./ChatMessage.scss";

const ChatMessage = () => {
	return (
		<div className="message">
      <Avatar />
      <div className="messageInfo">
        <h4>
          Shin Code
          <span className="messageTimestamp">2022/12/18</span>
        </h4>

        <p>メッセージ本文</p>
      </div>
		</div>
	);
};

export default ChatMessage;
