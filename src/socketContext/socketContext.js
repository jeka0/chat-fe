import React, { createContext, useState, useEffect } from "react";
import { getSessionFromStorage } from '../services/requestService';
import { reqRefresh } from '../services/authService';
import { io } from "socket.io-client";


export const SocketContext = createContext({});

export const Socket = ({ children })=>{
    const [socket, setSocket] = useState();

    useEffect(()=> {
        const { accessToken } = getSessionFromStorage() || {};
        const nowSock = io("http://localhost:3021", {
            auth: {
              token: `Bearer ${accessToken}`
            }
        });
        nowSock.on('connect', ()=>{
            console.log("+");
        });

        nowSock.on('error', err=>{
            console.log(err);
        });

        nowSock.on("connect_error", (err) => {
            if(err?.message === 'AccessToken is not valid'){
                console.log("-");
                reqRefresh().then(({accessToken})=>{
                    nowSock.auth.token = `Bearer ${accessToken}`;
                    nowSock.connect();
                });
            }
        });

        setSocket(nowSock);
    }, [])


    const sendMessage = (message)=>{
        socket.emit("message",message);
    };
     

    return (
        <SocketContext.Provider value={ {sendMessage, socket} }>
            {children}
        </SocketContext.Provider>
    )
}