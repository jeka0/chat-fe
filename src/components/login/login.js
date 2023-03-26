import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../../auth/useAuth';
import Password from "../password/password";
import "../login_registration.css";
import "./login.css";

function Login(){
    const [form, setForm] = useState({});
    const [error, setError] = useState({ isError:false, message:"" });

    const { login }= useAuth();
    const navigate = useNavigate();

    const onSubmit = (event)=>{
        event.preventDefault();
        if(!form.login || !form.password){
            setError({ isError:true, message:"Fields must be filled"})
            return;
        }
        login(form)
        .then(()=>navigate("/home"))
        .catch((err)=>{
            setError({ isError:true, message:"Wrong login or password"})
        });
    }
    const updateForm = async (event)=>{
        setError({ isError:false, message:"" });
        setForm({...form, [event.target.name] : event.target.value})
    }

    return(
            <div className="content">
                <p className="header">Authorization</p>
                <p className="margin">Login</p>
                <input className={`input border${error.isError?" error":""}`} name="login" onChange = {updateForm}></input>
                <p className="error_message" hidden={!error.isError}>{error.message}</p>
                <p className="margin">Password</p>
                <Password className={error.isError?" error":""} onChange = {updateForm}/>               
                <p className="error_message" hidden={!error.isError}>{error.message}</p>
                <button className="margin" onClick={onSubmit}>Login</button>
                <Link className="link" to="/registration">Sign up</Link>
            </div>
    );
}

export default Login;