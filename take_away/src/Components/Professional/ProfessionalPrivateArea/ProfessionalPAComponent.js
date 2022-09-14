import React, { useState } from 'react';
import './ProfessionalPACSS.css'
import { Button, InputGroup, FormControl, FloatingLabel, Form, Select, Modal } from 'react-bootstrap';
import { BrowserRouter, Link, Route, Routes, Accordion, Card } from 'react-router-dom'
import ForgetPass from '../../ForgetPassWord/ForgetPassComponent';
import { useNavigate } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
import Chat from '../../Actions/Chat';
import axios from "axios";
import Timin from '../../../Images/Logos/Timin.jpg';
import Cook from '../../../Images/Logos/Cook.jpeg'

import moment from 'moment';

import { Calendar } from 'react-calendar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import { connect } from 'react-redux';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function mapStateToProps(state) {
    return {
        bus: state.Professional.B
    }
}

export default connect(mapStateToProps)(function ProfessionalPA(props) {

    const { bus, dispatch } = props

    //פונקצית לוח שנה
    const [dateState, setDateState] = useState(new Date())
    const changeDate = (e) => {
        setDateState(e)
        console.log(e)


    }

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
        setIsChatShow('true');
    }

    function closeChatModal() {
        setIsChatShow(false)
    }

    //








    return (
        <>
            <div className='row ' style={{ fontFamily: "'Varela Round', sans-serif" }}>
                <h1 style={{ textAlign: "center" }}>אזור אישי לבעלי עסק</h1>
                <div className='border col-xl-6 col-sm-10 col-8' style={{ display: 'flex' }}>
                    <div >
                        {/* <Calendar
                            value={dateState}
                            
                            onChange={changeDate}
                            className='calender'

                        />
                        <p >Current selected date is <b>{moment(dateState).format('MMMM Do YYYY')}</b></p> */}

                        {/* logo  לוגו של בעל העסק*/}
                        <img src={Cook} className='blogo'></img>



                    </div>
                    <div style={{ direction: 'rtl', marginLeft: 'auto' }}>
                        <div>
                            <p>שם העסק: {bus.businessName}</p>
                            <p>שם בעל העסק: {bus.businessOwnerName}</p>
                            <p>טלפון: {bus.businessPhone}</p>
                            <p>Email:  {bus.businessEmail}</p>
                            <p>כתובת: {bus.businessAddress}</p>
                            <p>כשרות: {bus.businessKosher}</p>

                        </div>

                        {/* <Calendar onChange={onChange} value={value} className='calender' /> */}
                        <Button onClick={handleShow} style={{ marginRight: 0, width: ' max-content' }}>עדכון פרטי העסק</Button>

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
                            <Modal.Footer style={{ flexWrap: "nowrap" }}>

                                <Button variant="secondary" className='btn' onClick={handleClose}>
                                    ביטול
                                </Button>
                                <Button variant="primary" className='btn' onClick={handleClose}>
                                    שלח/י הצעה
                                </Button>
                            </Modal.Footer>

                        </Modal>
                        {/* <br />
                        <Button style={{ marginRight: 0 }}>עדכון התפריט</Button>
                        <br /> */}



                        <Box style={{ width: '100%', bgcolor: 'background.paper', color: 'black' }} >
                            <Tabs value={valueTab} onChange={handleChange} className="tabs" centered>
                                <Tab label="נשלח" className="tab" onClick={Chatfunc}  > </Tab>
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
)

