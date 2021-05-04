import React, { useRef, useState } from 'react'
import * as aiIcons from 'react-icons/cg'
import * as FiIcons from 'react-icons/fi'
import { Link, useHistory } from "react-router-dom";
import './Login.css'
import { auth } from '../firebase/firebase';
import RegUserForm from './RegUserForm';

function Login() {
    const emailRef = useRef();
    const passRef = useRef();
    const history = useHistory();

    const [validate, setValid] = useState();
    const [showReg, setshowReg] = useState(false);
    const sh = () => setshowReg(!showReg);

    const login = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value, passRef.current.value
        ).then(user => {
            console.log(user)
            history.push('/dashboard');
        }).catch(err => {
            if (err.code === 'auth/network-request-failed') {
                setValid("Establishing Internet Connection Failed");
            } else if (err.code === 'auth/invalid-email') {
                setValid("No Account Found");
            } else if (err.code === 'auth/wrong-password') {
                setValid("Incorrect Password");
            } else {

            }
        });
    }
    return (
        <>
            <div className="log-container">
                <div className="log-title"><h1>Pet Breeding Portal</h1><p>Your pet Breeding Companion</p></div>
                <div className="f-container">
                    <form className="form-container">
                        <input type="text" name="email" ref={emailRef} id="txt-email" placeholder="Email Address" className="txt txemail" required />
                        <input type="password" name="pword" ref={passRef} id="txt-pass" placeholder="Password" className="txt txpass" required />
                        <a href="#" ><span className='validate'>{validate}</span></a>
                        <button className="btn btn-submit" id="btn-sub" onClick={login}>Log In</button>
                        <a href="#">Forgot Password?</a>
                        <hr />
                        <Link to='' onClick={sh}>
                            <button className="btn btn-reg">Create New Account</button>
                        </Link>
                    </form>
                </div>
            </div>

            <div className={showReg ? 'reg-container show' : 'reg-container'}>
                <div className="reg-header-continer">

                    <div className="reg-heder">
                        <Link to='' className='exitBtn' type='reset' onClick={sh}>
                            <aiIcons.CgClose />
                        </Link>
                        <h1 className='tittle-reeg'>Register</h1>
                    </div>
                    <RegUserForm />
                </div>
            </div>
        </>
    )
}

export default Login
