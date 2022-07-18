import React from 'react';
import './PrivateAreaCSS.css'
import { useNavigate } from 'react-router-dom';
import { Button, InputGroup, FormControl, FloatingLabel, Form, Nav, Modal } from 'react-bootstrap';
import NumericInput from 'react-numeric-input';
import { useState } from 'react';
import { AccessAlarm, ThreeDRotation, MailIcon } from '@mui/icons-material';
import { Badge } from '@mui/material';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import 'antd/dist/antd.css';
import { TimePicker } from 'antd';
import moment from 'moment'

import axios from "axios";


import RestaurantIcon from '@mui/icons-material/Restaurant';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Disposable from '../../Disposable/DisposableComponent';
import Waitresses from '../../Waitresses/WaitressesComponent';



export default function PAComponent(props) {

    let navigate = useNavigate();
    const [isShow, setIsShow] = React.useState(false);

    function DisposableFun() {
        setIsShow(true)
        //  navigate("/Disposable")
    }
    function closeModal() {
        setIsShow(false)
    }

    const [isWaitrsShow, setIsWaitrsShow] = React.useState(false);

    function WaitressesFun() {
        setIsWaitrsShow(true)

    }
    function closeWaitressesModal() {
        setIsWaitrsShow(false)
    }


    //אפשרויות נוספות
    const actions = [
        { icon: <RestaurantIcon onClick={DisposableFun} />, name: 'חד פעמי' },
        { icon: <RoomServiceIcon onClick={WaitressesFun} />, name: 'מלצרות' },


    ];


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //סיכום פרטים
    const [show2, setShowdetails] = useState(false);
    const CloseDetails = () => setShowdetails(false);
    const detailsShow = () => setShowdetails(true);

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);


    const checkSwitchDisposable = (e) => {
        if (console.log(e.target.checked) == true) {

        }
    };

    const format = 'HH:mm';


    const [value, onChange] = useState(new Date());

    const [valueTab, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <div className='row' style={{ fontFamily: "'Varela Round', sans-serif" }}>
                <h1 style={{ textAlign: 'center' }}>אזור אישי</h1>
                <div className="border col-xl-6 col-sm-10 col-8 PA" style={{ display: "inline-flex" }}>
                    {/* כפתורים:
1. עדכון פרטים אישים
 2. עדכון התפריט שמכיל הוספה והסרה מהתפריט
 3. הצעות שהתקבלו שכולל כפתורים של השוואה בין ההצעות ואפשרות להזמין את ההצעות
  4ץדואר נכנס      */}
                    <div className='menu'>

                        <div className='border' >
                            <div style={{ direction: 'rtl', fontSize: 'small' }}>
                                מנות ראשונות<br />
                                מנות עיקריות<br />
                                קינוח<br />
                                בופה<br />
                                תוספות<br />
                                אפשרויות נוספות<br />
                                פרטים והערות<br />
                            </div>

                            <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
                                <SpeedDial
                                    ariaLabel="SpeedDial basic example"
                                    sx={{ position: 'absolute', bottom: 16, right: 16 }}
                                    icon={<SpeedDialIcon />}
                                >
                                    {actions.map((action) => (
                                        <SpeedDialAction
                                            key={action.name}
                                            icon={action.icon}
                                            tooltipTitle={action.name}

                                        />
                                    ))}
                                </SpeedDial>
                            </Box>


                            <Button variant="outline" className='btn btnPA' onClick={detailsShow} >סיכום תפריט</Button>

                            {/* יפתח חלון ויהיה ניתן לבחור בו למי לשלוח את ההצעה */}
                        </div>
                        <br></br>
                        <div>
                            <Box style={{ width: '100%', bgcolor: 'background.paper', color: 'black' }} >
                                <Tabs value={valueTab} onChange={handleChange} className="tabs" centered>
                                    <Tab label="נשלח" className="tab" ></Tab>
                                    <Tab label="התקבל" className="tab" />
                                    <Tab label="הצעות סגורות" className="tab" />
                                </Tabs>
                            </Box>
                        </div>
                    </div>
                    <div className='option'>

                        <div className='details' style={{fontSize:'13px'}}>


                            <p>שם:</p>
                            <p>E-mail:</p>
                            <p>טלפון:</p>
                            <p>כתובת:</p>
                        </div>
                        <div>
                            <Button variant="outline" className='btn btnPA' style={{ width: '170px' }} onClick={handleShow}>עדכון פרטים אישיים</Button>

                            {/* הודעת עדכון פרטים */}
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
                                            label="שם" >

                                            <Form.Control
                                                type="Text"
                                                placeholder="name" />
                                        </FloatingLabel>

                                        {/* lastname */}
                                        <FloatingLabel
                                            className="mb-3"
                                            style={{ 'direction': 'rtl' }}
                                            controlId="floatingInputlastName"
                                            label="שם משפחה">

                                            <Form.Control
                                                type="Text"
                                                placeholder="lastName" />
                                        </FloatingLabel>

                                        {/* phone */}
                                        <FloatingLabel
                                            className="mb-3"
                                            style={{ 'direction': 'rtl' }}
                                            controlId="floatingInputPhone"
                                            label="טלפון" >

                                            <Form.Control
                                                type="phone"
                                                placeholder="phone" />
                                        </FloatingLabel>

                                        {/* email */}
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
                                        שמור שינויים
                                    </Button>
                                </Modal.Footer>
                            </Modal>



                            <Modal show={show2} onHide={CloseDetails}>
                                <Modal.Header>
                                    <Modal.Title>סיכום הזמנה</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>
                                    <Form>
                                        {/* //פירוט התפריט - כולל את התפריט עצמו,מילצור,חד פעמי */}
                                        {/* //תאריך הארוע */}
                                        <div style={{ display: 'flex' }}>
                                            <Form>
                                                <Form.Group controlId="datePicker" className='forms'  >
                                                    <Form.Label>תאריך</Form.Label>

                                                    <Form.Control type="date" name="datePicker" placeholder="Date of Birth" className=''  />
                                                </Form.Group>
                                            </Form>
                                            <Form>
                                                {/* //כמות המוזמנים */}
                                                <Form.Group className='forms'>
                                                    <Form.Label>שעת האירוע</Form.Label>
                                                    <TimePicker defaultValue={moment('12:00', format)} format={format} style={{ width: "230px", height: "38px" }}  onChange={(console.log(value))}/>
                                                </Form.Group>
                                            </Form>
                                        </div>
                                        <br></br>
                                        <div style={{ display: 'flex' }}>
                                            <Form>
                                                {/* //מיקום הארוע */}
                                                <Form.Label style={{ direction: 'rtl', textAlign: 'right' }}>בחר עסק</Form.Label>
                                                <Form.Select aria-label="Default select example" className='forms' rows={1} style={{width:'466px'}}>
                                                    <option disabled>בחר עסק</option>

                                                </Form.Select>
                                            </Form>
                                        </div>
                                        <div style={{ display: 'flex' }}>

                                        <Form>
                                                <Form.Label>מיקום האירוע</Form.Label>
                                                <Form.Control rows={1} style={{width:'466px'}} ></Form.Control>
                                            </Form>
                                        </div>
                                        {/* //העסקים שאליהם נשלחות ההצעות */}


                                        {/* //הערות */}
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>הערות</Form.Label>
                                            <Form.Control as="textarea" rows={1} />
                                        </Form.Group>
                                        {/* //כפתור עדכון והסרה מהתפריט */}


                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>

                                    <Button variant="secondary" className='btn' onClick={CloseDetails}>
                                        ביטול
                                    </Button>
                                    <Button variant="primary" className='btn' onClick={CloseDetails}>
                                        שלח/י הצעה
                                    </Button>
                                </Modal.Footer>

                            </Modal>

                            {isShow && <Disposable show={isShow} setShow={closeModal} />}
                            {isWaitrsShow && <Waitresses show={isWaitrsShow} setShow={closeWaitressesModal} />}



                        </div>
                        <div>
                            אימייל בוקס להצעות שנשלחו והצעות שהתקבלו


                        </div>

                    </div>


                </div>
            </div>
        </>
    )
}