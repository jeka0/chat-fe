import React, { useState } from "react";
import { Link ,useNavigate } from "react-router-dom";
import { useAuth } from '../../auth/useAuth';
import imgShow from "../../Images/eye.png";
import imgHide from "../../Images/hide.png";
import "./registration.css";

function Registration(){
    const [form, setForm] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = ()=>{
        setShowPassword(!showPassword);
    }

    const { register }= useAuth();
    const navigate = useNavigate();

    const onSubmit = (event)=>{
        event.preventDefault();
        register(form)
        .then(()=>navigate("/home"))
        .catch((err)=>{
            console.log("Wrong login or password");
        });
    }
    const updateForm = async (event)=>{
        setForm({...form, [event.target.name] : event.target.value})
    }

    return(
        <div className="Background">
            <div className="content">
                <p className="header">Registration</p>
                <p className="margin">Login</p>
                <input className="input border" name="login" onChange = {updateForm}></input>
                <p className="margin">Password</p>
                <div className="password_container border"> 
                    <input className="input border_none" name="password" type={showPassword? "text":"password"} onChange = {updateForm}></input>
                    <input className="togglePassword" type="image" src={showPassword? imgHide:imgShow} alt="Кнопка «togglePassword»" onClick={togglePasswordVisibility}/>
                </div>
                <button className="margin" onClick={onSubmit}>Registration</button>
                <Link className="link" to="/login">Sign in</Link>
            </div>
        </div>
    );
}

export default Registration;