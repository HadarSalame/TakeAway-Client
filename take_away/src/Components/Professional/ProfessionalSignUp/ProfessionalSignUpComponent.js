import React, { useRef, useState } from 'react';

import './ProfessionalSignUpCSS.css'
import { Button, InputGroup, FormControl, FloatingLabel, Form, Select, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { MultiSelect } from "react-multi-select-component";






export default function ProfessionalSignUp(props) {

    const [selected, setSelected] = useState([]);
    const options = [
        { label: "העדה החרדית", value: "1" },
        { label: "בד''צ בית יוסף", value: "2" },
        { label: "הרב לנדא", value: "3" },
        { label: "הרב אברהם רובין", value: "4" },
        { label: "יורה דעה-הרב שלמה מחפוד", value: "5" },
        { label: "בד''צ מחזיקי הדת", value: "6" },
        { label: "בד''צ שארית ישראל", value: "7" },
        { label: "איגוד הרבנים", value: "8" },
        { label: "רבני צהר", value: "9" },
        { label: "רבנות פתח תקווה", value: "10" },
        { label: "רבנות נתניה", value: "11" }



    ];

    const customValueRenderer = (selected, _options) => {
        return selected.length
            ? selected.map(({ label }) => "✔️ " + label)
            : "בחר כשרות";
    };

    let ProNameRef = useRef();
    let OwnerProNameRef = useRef();
    let ProAddressRef = useRef();
    let ProPhoneRef = useRef();
    let ProEmailRef = useRef()
    let ProPassRef = useRef()
    let ProIdRef = useRef()
    //איך זה עובד עם קבצים??
    const [selectedKosher, setSelectedKosher] = useState()



    let navigate = useNavigate();
    function gotoIndex() {
        let newBusiness = {
            businessID: ProIdRef.current.value,
            businessName: ProNameRef.current.value,
            businessOwnerName: OwnerProNameRef.current.value,
            businessPhone: ProPhoneRef.current.value,
            businessEmail: ProEmailRef.current.value,
            businessAddress: ProAddressRef.current.value,
            businesspassword: ProPassRef.current.value,
            businessKosher: selectedKosher,
        }
        axios.post('http://localhost:3030/business/CreateBusiness', newBusiness).then(res => {
            alert(res.data)
            console.log(res.data)
            navigate("/Index")
        }).catch(err => console.log(err))

    }

    return (
        <>
            <div style={{ fontFamily: "'Varela Round', sans-serif" }}>
                <div>
                    <h1 style={{ textAlign: 'center' }}>הרשמה לעסקים</h1>
                </div>
                <div className=" row border col-xl-6 col-sm-10 col-8">
                    <div>
                        <FloatingLabel
                            className="mb-3 "
                            style={{ 'direction': 'rtl' }}
                            controlId="floatingInputName"
                            label="שם העסק" >

                            <Form.Control
                                ref={ProNameRef}
                                type="Text"
                                placeholder="businessName" />
                        </FloatingLabel>

                        <FloatingLabel
                            className="mb-3 "
                            style={{ 'direction': 'rtl' }}
                            controlId="floatingInputOwnerName"
                            label="שם בעל העסק" >

                            <Form.Control
                                ref={OwnerProNameRef}
                                type="Text"
                                placeholder="BusinessOwnerName" />
                                
                        </FloatingLabel>

                        <FloatingLabel
                            className="mb-3 "
                            style={{ 'direction': 'rtl' }}
                            controlId="floatingInputId"
                            label="מספר העסק" >

                            <Form.Control
                                ref={ProIdRef}
                                type="Text"
                                placeholder="BusinessID" />
                        </FloatingLabel>

                        <div style={{ display: 'flex' }}>
                            <FloatingLabel
                                className="mb-3"
                                style={{ width: '686px' }}
                                controlId="floatingInputAddress"
                                label=" כתובת העסק" >

                                <Form.Control
                                    ref={ProAddressRef}
                                    type="Text"
                                    placeholder="BusinessAddress" />
                            </FloatingLabel>




                        </div>
                        {/* phone */}
                        <FloatingLabel
                            className="mb-3"
                            controlId="floatingInputPhone"
                            label="טלפון" >

                            <Form.Control
                                ref={ProPhoneRef}
                                type="phone"
                                placeholder="businessPhone" />
                        </FloatingLabel>

                        <FloatingLabel
                            className="mb-3"
                            style={{ 'direction': 'rtl' }}
                            controlId="floatingInputEmail"
                            label="E-mail" >

                            <Form.Control
                                ref={ProEmailRef}
                                type="email"
                                placeholder="name@example.com" />
                        </FloatingLabel>

                        {/* password */}
                        <FloatingLabel
                            className="mb-3"
                            style={{ 'direction': 'rtl' }}
                            controlId="floatingPassword"
                            label="סיסמה">

                            <Form.Control
                                ref={ProPassRef}
                                type="password"
                                placeholder="Password" />

                        </FloatingLabel>

                        {/* Password Authentication */}
                        <FloatingLabel
                            className="mb-3"
                            // style={{ 'direction': 'rtl' }}
                            controlId="floatingPasswordAuthentication"
                            label=" אימות סיסמה">

                            <Form.Control
                                type="password"
                                placeholder="Password Authentication" />

                        </FloatingLabel >


                        <FloatingLabel
                            className="mb-3 form"
                        >

                            <MultiSelect
                                className='form'
                                style={{direction:'rtl'}}
                                options={options}
                                value={selected}
                                onChange={setSelected}
                                labelledBy="kosher"
                                valueRenderer={customValueRenderer}


                            />
                        </FloatingLabel>


                        <h1>???</h1>
                        <Form.Group controlId="formFile">
                            {/* <Form.Label>Default file input example</Form.Label> */}
                            <FloatingLabel
                                className="mb-3"
                                style={{ 'direction': 'rtl' }}
                                controlId="floatingInputFile"
                                label="תעודת כשרות" >
                                <Form.Control
                                    style={{ 'hight': '40px' }}

                                    type="file"
                                    placeholder="name@example.com" />
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group controlId="formFile">
                            {/* <Form.Label>Default file input example</Form.Label> */}
                            <FloatingLabel
                                className="mb-3"
                                style={{ 'direction': 'rtl' }}
                                controlId="floatingInputFile"
                                label="לוגו" >
                                <Form.Control
                                    type="file"
                                    placeholder="name@example.com" />
                            </FloatingLabel>
                        </Form.Group>

                        {/* <Form.Group controlId="formFile">
                            {/* <Form.Label>Default file input example</Form.Label> 
                            <FloatingLabel
                                className="mb-3"
                                style={{ 'direction': 'rtl' }}
                                controlId="floatingInputFile"
                                label="אישור משרד הבריאות" >
                                <Form.Control
                                    type="file"
                                    placeholder="name@example.com" />
                            </FloatingLabel>
                        </Form.Group> */}

                        <Button value="ProfessionalSignUpPart1" variant="outline" onClick={gotoIndex} className="btn">המשך</Button>

                    </div>
                </div>
            </div>
        </>
    )
}