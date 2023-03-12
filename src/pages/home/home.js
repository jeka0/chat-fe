import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../auth/useAuth';
import { io } from "socket.io-client";
import "./home.css";

function Home(){

    const { logout, user }= useAuth();
    const navigate = useNavigate();
    const socket = io("http://localhost:3021");

    socket.on('connect', ()=>{
        console.log("+");
    });

    socket.on("mess", (mess)=>{
        console.log(mess);
    })

    const a = ()=>{
        socket.emit("mess",user);
    };

    const onSubmit = (event)=>{
        event.preventDefault();
        logout()
        .then(()=>navigate("/login"))
        .catch((err)=>{
            console.log("some wrong");
        });
    }

    return(
        <div>
            login
            <button onClick={a}>send</button>
            <button onClick={onSubmit}>logout</button>
        </div>
    );
}

export default Home;