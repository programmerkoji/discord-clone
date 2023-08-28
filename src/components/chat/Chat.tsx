import React from "react";
import "./Chat.scss";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import { useAppSelector } from "../../app/hooks";

const Chat = () => {
	const channelName = useAppSelector((state) => state.channel.channelName);

	
	return (
		<div className="chat">
			<ChatHeader channelName={channelName} />
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
