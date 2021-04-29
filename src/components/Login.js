import React, { useRef, useState } from 'react'
import * as aiIcons from 'react-icons/cg'
import * as faIcons from 'react-icons/fa'
import { Link, useHistory } from "react-router-dom";
import './Login.css'
import { auth } from '../firebase/firebase';

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
            console.log(err)
            if (err.code == 'auth/invalid-email') {
                setValid("No Account Found");
            } else if (err.code == 'auth/wrong-password') {
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
                        <a ><span className='validate'>{validate}</span></a>
                        <button className="btn btn-submit" id="btn-sub" onClick={login}>Log In</button>
                        <a href="">Forgot Password?</a>
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
                        <Link to='' className='exitBtn' onClick={sh}>
                            <aiIcons.CgClose />
                        </Link>
                        <h1 className='tittle-reeg'>Register</h1>
                    </div>

                    <div className="reg-form-control">
                        <input type="text" name="txt-Fnme" placeholder='First Name:' className='txt Fnme' id="txtFname" />
                        <input type="text" name="txt-Lnme" placeholder='Last Name:' className='txt Lnme' id="txtLname" />
                        <input type="text" name="txt-Emai" placeholder='Email Address:' className='txt EmailtxT' id="txtEmails" />
                        <input type="password" name="txt-Pwor" placeholder='Password:' className='txt PassworD' id="txtPword" />
                        <input type="tel" name="txt-Cnum" placeholder='Contact Number:' className='txt CnuM' id="txtCnum" />
                        <input type="text" name="txt-Fnme" placeholder='First Name:' className='txt Fnme' id="txtFname" />
                        <input type="text" name="txt-Fnme" placeholder='First Name:' className='txt Fnme' id="txtFname" />
                        <input type="text" name="txt-Fnme" placeholder='First Name:' className='txt Fnme' id="txtFname" />
                        <input type="text" name="txt-Fnme" placeholder='First Name:' className='txt Fnme' id="txtFname" />
                    </div>

                    <div className="reg-footer">
                        <button>SIGN UP</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login
