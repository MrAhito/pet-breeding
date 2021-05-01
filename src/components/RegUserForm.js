import React, { useRef, useState } from 'react'
import * as aiIcons from 'react-icons/cg'
import * as faIcons from 'react-icons/fa'
import { Link, useHistory } from "react-router-dom";
function RegUserForm() {

    const fnameRef = useRef();
    const lnameRef = useRef();
    const regEmRef = useRef();
    const regAdRef = useRef();
    const regPaRef = useRef();
    const conRef = useRef();
    const bdateRef = useRef();
    const genRef = useRef();
    const cusGRef = useRef();

    const [cgend, setcgend] = useState(false);
    const [errFName, setFName] = useState(false);
    const [errLName, setLName] = useState(false);
    const [errRegEm, setRegEm] = useState(false);
    const [errRegAd, setRegAd] = useState(false);
    const [errRegPa, setRegPa] = useState(false);
    const [errCon, setCon] = useState(false);
    const [errBday, setBday] = useState(false);
    const [errGen, setGen] = useState(false);
    const [errCGen, setCGen] = useState(false);
    const [showPet, setshowPet] = useState(true);
    const petSHow = () => setshowPet(!showPet);
    const cGend = (e) => {
        const selVal = e.target.value;
        if (selVal == "custome") {
            setcgend(true);
        } else {
            setcgend(false);
        }
    }
    const showError = () => {
        const firstName = fnameRef.current.value;
        const lastName = lnameRef.current.value;
        const regEmail = regEmRef.current.value;
        const regAddress = regAdRef.current.value;
        const regPass = regPaRef.current.value;
        const conNum = conRef.current.value;
        const birthDate = bdateRef.current.value;
        const genDer = genRef.current.value;
        const customGen = cusGRef.current.value;

        if (firstName.replace(/\s/g, "").length <= 0) {
            setFName(true);
        } else {
            setFName(false);
        }
        if (lastName.replace(/\s/g, "").length <= 0) {
            setLName(true);
        } else {
            setLName(false);
        }
        if (regEmail.replace(/\s/g, "").length <= 0) {
            setRegEm(true);
        } else {
            setRegEm(false);
        }
        if (regAddress.replace(/\s/g, "").length <= 0) {
            setRegAd(true);
        } else {
            setRegAd(false);
        }
        if (regPass.replace(/\s/g, "").length <= 0) {
            setRegPa(true);
        } else {
            setRegPa(false);
        }
        if (conNum.replace(/\s/g, "").length <= 0) {
            setCon(true);
        } else {
            setCon(false);
        }
        if (birthDate.replace(/\s/g, "").length <= 0) {
            setBday(true);
        } else {
            setBday(false);
        }
        if (genDer.replace(/\s/g, "").length <= 0) {
            setGen(true);
        } else if (genDer == "custome") {
            if (customGen.replace(/\s/g, "").length <= 0) {
                setCGen(true);
            } else {
                setCGen(false);
            }
        } else {
            setGen(false);
        }
        setshowPet(!showPet)
    }
    return (
        <>
            <div className={showPet ? 'reg-form-c show' : 'reg-form-c'} >
                <div>
                    <div className="pet-reg fixs">
                        <div className="pet-title"><h1>User Information </h1></div>
                        <input type="text" name="txt-Fnme" placeholder='First Name:' ref={fnameRef} className='txt Fnme' id="txtFname" />
                        <div className={errFName ? 'valida sh' : 'valida'}>
                            <faIcons.FaExclamationCircle></faIcons.FaExclamationCircle></div>
                        <input type="text" name="txt-Lnme" placeholder='Last Name:' ref={lnameRef} className='txt Lnme' id="txtLname" />
                        <div className={errLName ? 'valida sh' : 'valida'}>
                            <faIcons.FaExclamationCircle></faIcons.FaExclamationCircle></div>
                        <input type="text" name="txt-Emai" placeholder='Email Address:' ref={regEmRef} className='txt EmailtxT' id="txtEmails" />
                        <div className={errRegEm ? 'valida sh' : 'valida'}>
                            <faIcons.FaExclamationCircle></faIcons.FaExclamationCircle></div>
                        <input type="text" name="txt-Addr" placeholder='Address:' ref={regAdRef} className='txt AddR' id="txtAddr" />
                        <div className={errRegAd ? 'valida sh' : 'valida'}>
                            <faIcons.FaExclamationCircle></faIcons.FaExclamationCircle></div>
                        <input type="password" name="txt-Pwor" placeholder='Password:' ref={regPaRef} className='txt PassworD' id="txtPword" />
                        <div className={errRegPa ? 'valida sh' : 'valida'}>
                            <faIcons.FaExclamationCircle></faIcons.FaExclamationCircle></div>
                        <input type="tel" name="txt-Cnum" placeholder='Contact Number:' ref={conRef} className='txt CnuM' id="txtCnum" />
                        <div className={errCon ? 'valida sh' : 'valida'}>
                            <faIcons.FaExclamationCircle></faIcons.FaExclamationCircle></div>
                        <input type="date" name="txt-Bdate" placeholder='Birth Date:' ref={bdateRef} className='txt BdatE' id="txtBdate" />
                        <div className={errBday ? 'valida sh' : 'valida'}>
                            <faIcons.FaExclamationCircle></faIcons.FaExclamationCircle></div>
                        <select name="txt-Gend" onChange={cGend} id="txtGend" ref={genRef} className="txt GenD">
                            <option value="" selected disabled>Gender:</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="custome">Custom</option>
                        </select>
                        <div className={errGen ? 'valida sh' : 'valida'}>
                            <faIcons.FaExclamationCircle></faIcons.FaExclamationCircle></div>
                        <input type="text" name="txt-Gcus" className={cgend ? 'txt' : 'txt show'} ref={cusGRef} id="txtGcus" placeholder='Please specify:' />
                        <div className={errCGen ? 'valida sh' : 'valida'}>
                            <faIcons.FaExclamationCircle></faIcons.FaExclamationCircle></div>
                    </div>
                </div>
                <div className="reg-footer">
                    <button className='btn btn-sub' onClick={showError} >Next</button>
                </div>
            </div>
            <div className={showPet ? 'reg-form-c' : 'reg-form-c show'} >
                <div>
                    <div className="pet-reg">
                        <div className="pet-title"><h1>Pet Information </h1></div>
                        <input type="text" name="txt-Anme" placeholder='First Name:' className='txt Anme' id="txtAnme" />
                        <div className='valida'>
                            <faIcons.FaExclamationCircle></faIcons.FaExclamationCircle></div>
                        <input type="date" name="txt-Bdate" placeholder='Birth Date:' ref={bdateRef} className='txt BdatE' id="txtBdate" />
                        <div className={errBday ? 'valida sh' : 'valida'}>
                            <faIcons.FaExclamationCircle></faIcons.FaExclamationCircle></div>
                        <select name="txt-Gend" onChange={cGend} id="txtGend" ref={genRef} className="txt GenD">
                            <option value="" selected disabled>Gender:</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        <div className={errGen ? 'valida sh' : 'valida'}>
                            <faIcons.FaExclamationCircle></faIcons.FaExclamationCircle>
                        </div>
                        <div></div>
                    </div>
                </div>
                <div className="reg-footer">
                    <div>
                        <button className='btn btn-sub' onClick={petSHow} >Back</button>
                        <button className='btn btn-sub' onClick={petSHow} >Sign Up</button>
                    </div>
                    <div className="termscon">adadadawdawdddddddddddddddd</div>
                </div>
            </div>
        </>
    )
}

export default RegUserForm
