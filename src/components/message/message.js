import React from 'react';
import { useAuth } from '../../auth/useAuth';
import './message.css'

function Message(props) {
    const {user} = useAuth();
    
    return (
        <div>
            <div className={`messageStyle ${user.id===props.data.user.id? 'me':'other'}`}>
                {props.data.message}
            </div>
        </div>
    );
  }
  
  export default Message;