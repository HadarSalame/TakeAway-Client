import React, { useState } from 'react';
import './ProfessionalPACSS.css'
import { Button, InputGroup, FormControl, FloatingLabel, Form, Select, Modal } from 'react-bootstrap';
import { BrowserRouter, Link, Route, Routes, Accordion, Card } from 'react-router-dom'
import ForgetPass from '../../ForgetPassWord/ForgetPassComponent';
import { useNavigate } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
import Chat from '../../Actions/Chat';

import { Calendar } from 'react-calendar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function ProfessionalPA({ children }) {

    const [Datevalue, onChangeDate] = useState(new Date());



    const [value, onChange] = useState(new Date());

    const [valueTab, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //chat
    const [isChatShow, setIsChatShow] = React.useState(false);
    let navigate = useNavigate();
    function Chatfunc() {
        setIsChatShow(true);
    }

    function closeChatModal() {
        setIsChatShow(false)
    }

    function changaDate(e) {
        onChangeDate(e);
        console.log(Datevalue.getDay(e))
    }

    return (
        <>
            <div className='row ' style={{ fontFamily: "'Varela Round', sans-serif" }}>
                <h1 style={{ textAlign: "center" }}>אזור אישי לבעלי עסק</h1>
                <div className='border col-xl-6 col-sm-10 col-8' style={{ display: 'flex' }}>
                    <div>
                        <Calendar minDate={value} calendarType='Hebrew' onChange={changaDate} value={Datevalue} className="border react-calendar" />
                    </div>
                    <div style={{ direction: 'rtl', marginLeft: 'auto' }}>
                        {/* <Calendar onChange={onChange} value={value} className='calender' /> */}
                        <Button onClick={handleShow} style={{ marginRight: 0 }}>עדכון פרטי העסק</Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title style={{ textAlign: 'center' }}>עדכון פרטים</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
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

                                    <FloatingLabel
                                        className="mb-3 "
                                        style={{ 'direction': 'rtl' }}
                                        controlId="floatingInputId"
                                        label="מספר העסק" >

                                        <Form.Control
                                            type="Text"
                                            placeholder="BusinessID" />
                                    </FloatingLabel>

                                    <div style={{ display: 'flex' }}>
                                        <FloatingLabel
                                            className="mb-3 form "
                                            style={{ width: '590px' }}
                                            controlId="floatingInputId"
                                            label=" כתובת העסק" >

                                            <Form.Control
                                                type="Text"
                                                placeholder="BusinessAddress" />
                                        </FloatingLabel>


                                        <Form.Select aria-label="Default select example" className='form' style={{ width: '300px', marginLeft: '15px' }}>
                                            <option disabled>בחר עיר</option>
                                            {/* <option value="1">העדה החרדית</option>
                            <option value="2">הרב לנדא</option>
                            <option value="3">בד''צ בית יוסף</option>
                            <option value="4">הרב אברהם רובין</option>
                            <option value="5">יורה דעה-הרב שלמה מחפוד</option>
                            <option value="6">בד''צ מחזיקי הדת</option>
                            <option value="7">בד''צ שארית ישראל</option>
                            <option value="8">רבנות פתח תקווה</option>
                            <option value="9">רבני צהר</option> */}
                                        </Form.Select>

                                    </div>
                                    {/* phone */}
                                    <FloatingLabel
                                        className="mb-3"
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
                                    {/* password */}
                                    <FloatingLabel
                                        className="mb-3"
                                        style={{ 'direction': 'rtl' }}
                                        controlId="floatingPassword"
                                        label="סיסמה">

                                        <Form.Control
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

                                    </FloatingLabel>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>

                                <Button variant="secondary" className='btn' onClick={handleClose}>
                                    ביטול
                                </Button>
                                <Button variant="primary" className='btn' onClick={handleClose}>
                                    שלח/י הצעה
                                </Button>
                            </Modal.Footer>

                        </Modal>
                        <br />
                        <Button style={{ marginRight: 0 }}>עדכון התפריט</Button>
                        <br />



                        <Box style={{ width: '100%', bgcolor: 'background.paper', color: 'black' }} >
                            <Tabs value={valueTab} onChange={handleChange} className="tabs" centered>
                                <Tab label="נשלח" className="tab" onClick={Chatfunc}  >

                                </Tab>

                                <Tab label="התקבל" className="tab" />
                                <Tab label="הצעות סגורות" className="tab" />
                            </Tabs>
                        </Box>
                        {isChatShow && <Chat show={isChatShow} setShow={closeChatModal} />}



                        {/* <div className='schaduller '>
                        <Form.Group controlId="datePicker">
                            <Form.Label>Select Date</Form.Label>
                            <Form.Control type="date" name="datePicker" placeholder="Date of Birth" />
                        </Form.Group>
                    </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}


