import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../auth/useAuth';
import { useSocket } from '../../socketContext/useSocket';
import { getAllMessages } from '../../services/messageService';
import Message from '../message/message';
import "./home.css";

function Home(){

    const { logout, user }= useAuth();
    const { sendMessage, socket } = useSocket();
    const navigate = useNavigate();
    const [message, setMessage] = useState({});
    const [messages, setMessages] = useState({ data:[] });

    useEffect(()=>{
        getAllMessages().then((data)=>{   
            setMessages({ data });
        });
    },[]);

    useEffect(()=>{
        if(socket){
            socket.on("message", update);
        }
    },[socket]);
    const update = (mess)=>{
        console.log(messages.data);
        messages.data.push(mess);
        console.log(messages.data);
        setMessages(messages);
    }

    const onSubmit = (event)=>{
        event.preventDefault();
        logout()
        .then(()=>navigate("/login"))
        .catch((err)=>{
            console.log("some wrong");
        });
    }

    const updateMessage = (event)=>{
        setMessage({...message, [event.target.name] : event.target.value})
    }

    const onSend = ()=>{
        sendMessage(message);
    }

    return(
        <div className="content_home">
            <div className="actionBar">
                {user.login}
                <button onClick={onSubmit}>logout</button>
            </div>
            <div className="chatSpace">
                {messages.data.map(mess=><Message key={mess.id} data = {mess} />)}
            </div>
            <div className="inputPanel">
                <input name = "message" onInput={updateMessage}></input>
                <button onClick={onSend}>send</button>
            </div>
        </div>
    );
}

export default Home;