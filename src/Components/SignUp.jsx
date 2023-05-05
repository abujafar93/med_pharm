import React, { useState } from 'react'
import "../StyleSheets/SignUp.css"
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import axios from 'axios';


const SIgnUp = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState("")
    const [checkValid, setValid] = useState("");
    const [message, setMessage] = useState("")
    const [phone, setPhone] = useState("")
    const [phoneMsg, setPhoneMsg] = useState("")
    const [firstName, setFirstName] = useState("hhdhdhd")
    const [lastName, setLastName] = useState("")
    const [nameMsg, setNameMsg] = useState("")
    const [checkBox, setCheckBox] = useState(false)
    // const [posts, setPosts] = useState([]);
    
    // const [readMsg, setReadMsg] = useState("Hello");



    const handleSubmit = (e) => {
            e.preventDefault();


            let userInfo = {
                firstname: null,
                lastname: null,
                email: null,
                phoneNum: null,
                password: null,
                agree: null
            }
            
            userInfo.firstname = firstName;
            userInfo.lastname = lastName;
            userInfo.email = email;
            userInfo.phoneNum = phone;
            userInfo.password = showPassword;
            userInfo.agree = checkBox;

            console.log(userInfo);

            // const postData = axios
            // .post("https://medipharm-test.herokuapp.com/api/users/register", {userInfo})
            // .then((response)=>{
            //      console.log(response);
            // })
            // .catch(err=>{
            //      console.log(err.response);
            //     // console.log("Error Posting");
            // })
    

            // console.log(readMsg);
    }

 


    const togglePassword = ()=>{
    setShowPassword(!showPassword)
    }

    const firstNameValidation = (e) =>{
        let first_Name = e.target.value

        const namePattern = /^[a-zA-Z]*$/
        if(namePattern.test(first_Name)){
            setFirstName(first_Name)
            setNameMsg("")
        } else {
            setNameMsg("First Name should be text")
        }
    }

    const lastNameValidation = (e) =>{
        let last_Name = e.target.value

        const namePattern = /^[a-zA-Z]*$/
        if(namePattern.test(last_Name)){
            setLastName(last_Name)
            setNameMsg("")
        } else {
            setNameMsg("Last Name should be text")
        }
    }

    const emailValidation = (e) => {
            let mail = e.target.value;
             const emailPattern =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;            
            if (emailPattern.test(mail)){
                setMessage("")
                setValid('valid');
                setEmail(mail);
            } else if (!emailPattern.test(mail) && mail.trim() !== ""){
                setMessage("Email is not valid")
                setValid('invalid');
            } else{
                    setMessage("");
                    setValid("");
            }
    }

    const phoneValidation = (e) => {
            let num =  e.target.value.trim();

            const NumberPattern =  /^\d{11}$/g;   
            setPhone("");
            if (num.length >= 1 && !NumberPattern.test(num)){
                setPhoneMsg("Phone number should be figure");
            } else if (num.length < 1) {
                setPhoneMsg("");
            } else{
                console.log(num);
                setPhone(num)
                setPhoneMsg("");
            }

    }

    const handleBox = (e) => {
        let check = e.target.checked;
        if(check){
            setCheckBox(true);
        }else{
            setCheckBox(false);
        }
        // if (check === true){
        //     setCheckBox(check)
        // } else {
        //     setCheckBox("")
        // }
    }

    return (
        <div className='signUpContainer'>
        <h2>MEDIPHARM ASSISTANT</h2>
            <div className='card'>
                    <h1>Sign Up</h1>
                    <p>Sign up as A Super Admin and create other accounts</p>
                    <hr />
                    <form  className={checkValid} onSubmit={handleSubmit}>
                        <div className='input_box name_box'>
                            <div className='name'>
                                <div className='firstName'>
                                    <label>First Name</label><br />
                                    <input type="text" maxLength="20" onKeyUp={firstNameValidation} required/>
                                </div>
                                <div className='lastName'>
                                    <label>Last Name</label><br />
                                    <input type="text" maxLength="20" onKeyUp={lastNameValidation} required/>
                                </div>
                            </div>
                            <div>
                            <span className='nameErrorMsg error'>{nameMsg}</span>
                            </div>
                        </div>
                        
                        <div className='input_box email_box'>
                            <label>Email Address</label><br />
                            <input type="email" id='email' onKeyUp= {emailValidation} required/>
                            <span className='emailErrorMsg error'>{message}</span>
                        </div>
               
                        <div className='input_box'>
                            <label>Phone Number</label><br />
                            <input type="phone" onKeyUp= {phoneValidation} maxLength="11" required/>
                            <span className='phoneErrorMsg error'>{phoneMsg}</span>
                        </div>

                        <div className='input_box'>
                            <label>Password</label><br/>
                            <div className='password'>
                                <input type={showPassword ? "text" : "password"} placeholder='Enter your Password' required/>
                                <div className='icon' onClick={togglePassword}>
                                    {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                                </div>
                            </div>
                            <span className='pswErrorMsg'></span>
                        </div>

                        <div className='chk_box'>
                            <input type="checkbox" onChange={handleBox} required/>
                            <label>Creating an account means you're okay with our Terms of Service, Privacy Policy and our default Notification Settings.</label>
                        </div>

                        <button type='submit'>Create Account</button>
                    </form>
                    <p className='toLogIn'>Have an account? <a href='#'>Login</a></p>
            </div>
        </div>
  )
}

export default SIgnUp