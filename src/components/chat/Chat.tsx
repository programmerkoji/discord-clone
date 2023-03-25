import React from "react";
import "./Chat.scss";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";

const Chat = () => {
	return (
		<div className="chat">
			<ChatHeader />
			<div className="chatMessage">
				<ChatMessage />
				<ChatMessage />
				<ChatMessage />
				<ChatMessage />
				<ChatMessage />
			</div>
			<ChatInput />
		</div>
	);
};

export default Chat;
