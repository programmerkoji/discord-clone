import React from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import "./ChatInput.scss";

const ChatInput = () => {
	return (
		<div className="chatInput">
			<AddCircleOutlineIcon />
			<form action="">
				<input type="text" placeholder="#udemyへメッセージを送信" />
				<button type="submit" className="chatInputButton">送信</button>
			</form>

			<div className="chatInputIcons">
				<CardGiftcardIcon />
				<GifIcon />
				<SentimentSatisfiedAltIcon />
			</div>
		</div>
	);
};

export default ChatInput;
