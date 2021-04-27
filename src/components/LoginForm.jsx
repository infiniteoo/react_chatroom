import React, { useState } from 'react'
import axios from 'axios'

const LoginForm = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': "b84fbd80-ec9a-440a-bff5-4be4c78ba1b9", 'User-Name': username, 'User-Secret': password };

        try {
            // username / password = chatengine => give messages
           await axios.get('https://api.chatengine.io/chats', { headers: authObject }); 
           // works out -> logged in 
           localStorage.setItem('username', username)
           localStorage.setItem('password', password)

           window.location.reload()

        } catch (error) {
            setError('Oops, incorrect credentials.')           
        }

        // error => try with new username ...

    }

    return (
        <div className="wrapper">
            <div className='form'>
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                        <h2 className="error">{error}</h2>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default LoginForm
