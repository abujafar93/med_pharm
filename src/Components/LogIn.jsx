import React, { useState } from 'react'
import axios from 'axios';
import "../StyleSheets/logIn.css"
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Navigate, useNavigate} from 'react-router-dom';


const LogIn = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState("wale");
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState()
    const [receiveUsername, setReceiveUsername] = useState()
    const [receivePassword, setReceivePassword] = useState()
    const [is_logged,setLogged] = useState(false);

     const navigate = useNavigate()

    const togglePassword = ()=>{
        setShowPassword(!showPassword)
    }


    const emailValidation = (e) => {

        let mail = e.target.value;
         const emailPattern =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;            
        if (emailPattern.test(mail)){
            setMessage("")
            // setValid('valid');
            setEmail(mail);
        } else if (!emailPattern.test(mail) && mail.trim() !== ""){
            setMessage("Failed to Login")
                // setValid('invalid');
        } else{
                setMessage("");
                // setValid("");
        }
    }

    const getPassword = (e)=>{
    let userPassword = e.target.value;
    setPassword(userPassword);
   // console.log(userPassword)
   // console.log(password);
    }   

    const handleClick = (e)=>{
    e.preventDefault();

    const options = {
        headers: {"content-type": "application/json"}
    }

    axios.post("https://medipharm-test.herokuapp.com/api/login", {
    "username": email,
    "password": password
    },options)
    .then(function (response) {
        console.log(response.data)
        console.log(response.data.data);
       if(response.data.statusCode === 200)
       {
         navigate("/dashboard")
       }
    })
    .catch(function (error) {
        console.log(error);
    });
   
    }


  return (
    <div className='logIncontainer'>
        
        <div className='card'>
            <div className='logo'>MEDIPHARM ASSISTANT</div>
                <h3>Welcome Back!</h3>
                <h2>Login to your Account</h2>
            <form>
            <span className='danger_msg'>{message}</span>
                <div className='input_box'>
                    <label>Email Address</label><br/>
                    <input type="email" id='email' onKeyUp= {emailValidation} placeholder='Enter your Email Address' required/><br/>
                </div>
                <div className='input_box'>
                    <label>Password</label><br/>
                    <div className='password'>
                        <input type={showPassword ? "text" : "password"} onChange={getPassword} placeholder='Enter your Password' required/>
                        <div className='icon' onClick={togglePassword}>
                            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </div>
                    </div>
                </div>
            <a href='#' className='forget_psw'>Forgot Password?</a>
            <br/>
            <button className='logIn_btn' onClick={handleClick}>Login</button>
            </form>
            <p>Drug Monitoring 2021</p>
        </div>
    </div>
  )
}

export default LogIn