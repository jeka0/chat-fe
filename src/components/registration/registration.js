import React, { useState } from "react";
import { Link ,useNavigate } from "react-router-dom";
import { useAuth } from '../../auth/useAuth';
import Password from "../password/password";
import "../login_registration.css";
import "./registration.css";

function Registration(){
    const [form, setForm] = useState({});
    const [error, setError] = useState({ isError:false, message:"" });

    const { register }= useAuth();
    const navigate = useNavigate();

    const onSubmit = (event)=>{
        event.preventDefault();
        if(!form.login || !form.password){
            setError({ isError:true, message:"Fields must be filled"})
            return;
        }
        register(form)
        .then(()=>navigate("/home"))
        .catch((err)=>{
            setError({ isError:true, message:"User with this login already exists"})
        });
    }
    const updateForm = async (event)=>{
        setError({ isError:false, message:"" });
        setForm({...form, [event.target.name] : event.target.value})
    }

    return(
            <div className="content">
                <p className="header">Registration</p>
                <p className="margin">Login</p>
                <input className={`input border${error.isError?" error":""}`} name="login" onChange = {updateForm}></input>
                <p className="error_message" hidden={!error.isError}>{error.message}</p>
                <p className="margin">Password</p>
                <Password className={error.isError && error.message==="Fields must be filled"?" error":""} onChange = {updateForm}/>  
                <p className="error_message" hidden={!error.isError || error.message==="User with this login already exists"}>{error.message}</p>
                <button className="margin" onClick={onSubmit}>Registration</button>
                <Link className="link" to="/login">Sign in</Link>
            </div>
    );
}

export default Registration;