import React from 'react'
import { ChatEngine } from 'react-chat-engine'
import LoginForm from './components/LoginForm'

import './App.css'
import ChatFeed from './components/ChatFeed';

const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine 
            height="100vh"
            projectID="b84fbd80-ec9a-440a-bff5-4be4c78ba1b9"
            userName="javascriptmastery"
            userSecret="123123"
            renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps} />}
               
        />
    )
}

export default App
