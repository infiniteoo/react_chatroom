import React from 'react'
import MessageForm from './MessageForm'
import MyMessage from './MyMessage'
import TheirMessage from './TheirMessage'

const ChatFeed = (props) => {

    const { chats, activeChat, userName, messages } = props;

    const chat = chats && chats[activeChat];

    console.log("chat, username, messages", chat, userName, messages)

    const renderMessages = () => {
        const keys = Object.keys(messages);

        console.log(keys);

       
    }
    renderMessages();

    console.log(props)
    return (
        <div>
            <h1>Chat Feed</h1>
        </div>
    )
}

export default ChatFeed
