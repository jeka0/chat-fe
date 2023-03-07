import React, { useState } from "react";
import imgShow from "../../Images/eye.png";
import imgHide from "../../Images/hide.png";
import "./login.css";

function Login(){
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = ()=>{
        setShowPassword(!showPassword);
    }

    return(
        <div className="Background">
            <div className="content">
                <p className="margin">Login</p>
                <input className="input border"></input>
                <p className="margin">Password</p>
                <div className="password_container border"> 
                    <input className="input border_none" type={showPassword? "text":"password"}></input>
                    <input className="togglePassword" type="image" src={showPassword? imgHide:imgShow} alt="Кнопка «togglePassword»" onClick={togglePasswordVisibility}/>
                </div>
                <button className="margin">Login</button>
            </div>
        </div>
    );
}

export default Login;