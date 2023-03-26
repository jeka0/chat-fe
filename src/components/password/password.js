import React, { useState } from "react";
import imgShow from "../../Images/eye.png";
import imgHide from "../../Images/hide.png";
import "./password.css";

function Password(param){

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = ()=>{
        setShowPassword(!showPassword);
    }

    return(
        <div className={`password_container border ${param.className}`}> 
            <input className="input border_none" name="password" type={showPassword? "text":"password"} onChange = {param.onChange}></input>
            <input className="togglePassword" type="image" src={showPassword? imgHide:imgShow} alt="Кнопка «togglePassword»" onClick={togglePasswordVisibility}/>
        </div>
    );
}

export default Password;