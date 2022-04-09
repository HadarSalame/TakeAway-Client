import React from 'react';
import './ProfessionalSignUpCSS.css'
import { Button, InputGroup, FormControl, FloatingLabel, Form,Select } from 'react-bootstrap';
export default function ProfessionalSignUp(props) {

    return (
        <>
            <div>
                <div>
                    <h1>הרשמה לעסקים</h1>
                </div>
                <div className=" row border col-xl-6 col-sm-10 col-8">
                    <div>
                        <FloatingLabel
                            className="mb-3 "
                            style={{ 'direction': 'rtl' }}
                            controlId="floatingInputName"
                            label="שם העסק" >

                            <Form.Control
                                type="Text"
                                placeholder="businessName" />
                        </FloatingLabel>

                        <FloatingLabel
                            className="mb-3 "
                            style={{ 'direction': 'rtl' }}
                            controlId="floatingInputName"
                            label="שם בעל העסק" >

                            <Form.Control
                                type="Text"
                                placeholder="BusinessOwnerName" />
                        </FloatingLabel>

                        {/* phone */}
                        <FloatingLabel
                            className="mb-3"
                            style={{ 'direction': 'rtl' }}
                            controlId="floatingInputPhone"
                            label="טלפון" >

                            <Form.Control
                                type="phone"
                                placeholder="businessPhone" />
                        </FloatingLabel>

                        <FloatingLabel
                            className="mb-3"
                            style={{ 'direction': 'rtl' }}
                            controlId="floatingInputEmail"
                            label="E-mail" >

                            <Form.Control
                                type="email"
                                placeholder="name@example.com" />
                        </FloatingLabel>

                        <Form.Select aria-label="Default select example">
                            <option disabled>כשרות העסק</option>
                            <option value="1">העדה החרדית</option>
                            <option value="2">הרב לנדא</option>
                            <option value="3">בד''צ בית יוסף</option>
                            <option value="4">הרב אברהם רובין</option>
                            <option value="5">יורה דעה-הרב שלמה מחפוד</option>
                            <option value="6">בד''צ מחזיקי הדת</option>
                            <option value="7">בד''צ שארית ישראל</option>
                            <option value="8">רבנות פתח תקווה</option>
                            <option value="9">רבני צהר</option>
                        </Form.Select>

                        <h1>???</h1>
                        <Form.Group controlId="formFile">
                            {/* <Form.Label>Default file input example</Form.Label> */}
                            <FloatingLabel
                                className="mb-3" ף
                                ystle={{ 'direction': 'rtl' }}
                                controlId="floatingInputFile"
                                label="תעודת כשרות" >
                                <Form.Control
                                    type="file"
                                    placeholder="name@example.com" />
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group controlId="formFile">
                            {/* <Form.Label>Default file input example</Form.Label> */}
                            <FloatingLabel
                                className="mb-3" ף
                                ystle={{ 'direction': 'rtl' }}
                                controlId="floatingInputFile"
                                label="לוגו" >
                                <Form.Control
                                    type="file"
                                    placeholder="name@example.com" />
                            </FloatingLabel>
                        </Form.Group>



                    </div>
                </div>
            </div>
        </>
    )
}