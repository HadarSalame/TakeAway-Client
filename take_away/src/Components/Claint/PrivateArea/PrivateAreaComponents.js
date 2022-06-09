import React from 'react';
import './PrivateAreaCSS.css'
import { Button, InputGroup, FormControl, FloatingLabel, Form, Nav, Modal } from 'react-bootstrap';
import NumericInput from 'react-numeric-input';
import { useState } from 'react';
import { AccessAlarm, ThreeDRotation, MailIcon } from '@mui/icons-material';
import { Badge } from '@mui/material';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';



export default function PAComponent(props) {
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

    const checkSwitch = (e) => {
        if (console.log(e.target.checked) == true) {
            <Form.Select aria-label="Default select example" className='form' style={{ width: '300px', marginLeft: '15px' }}>
                <option disabled>בחר כמות מוזמנים</option>
                <option value="1">15-30 מוזמנים - 1 מלצרים</option>
                <option value="2">30-60 מוזמנים - 2 מלצרים</option>
            </Form.Select>
        }
    };

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
                            מנות ראשונות<br />
                            מנות עיקריות<br />
                            קינוח<br />
                            בופה<br />
                            תוספות<br />
                            אפשרויות נוספות<br />
                            פרטים והערות<br />

                            <Button className="more_vert">  <i class="material-icons">&#xe5d4; </i></Button>

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

                        <div className='details'>


                            <h6>שם:</h6>
                            <h6>E-mail:</h6>
                            <h6>טלפון:</h6>
                            <h6>כתובת:</h6>
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

                            <Button variant="outline" className='btn btnPA' onClick={detailsShow} >סיכום תפריט</Button>

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

                                                    <Form.Control type="date" name="datePicker" placeholder="Date of Birth" className='' />
                                                </Form.Group>
                                            </Form>
                                            <Form>
                                                {/* //כמות המוזמנים */}
                                                <Form.Label>מספר מוזמנים</Form.Label>
                                                <NumericInput min={15} step={1.000} value={15} max={500} inputmode="numeric" className="form-control forms " strict />
                                            </Form>
                                        </div>

                                        <div style={{ display: 'flex' }}>
                                            <Form>
                                                {/* //מיקום הארוע */}
                                                <Form.Label style={{ direction: 'rtl', textAlign: 'right' }}>מיקום האירוע</Form.Label>
                                                <Form.Select aria-label="Default select example" className='forms' rows={1}>
                                                    <option disabled>בחר עסק</option>
                                                </Form.Select>
                                            </Form>
                                            <Form>
                                                <Form.Label>מיקום האירוע</Form.Label>
                                                <Form.Select aria-label="Default select example" className='forms' rows={1}>
                                                    <option disabled>בחר עיר</option>

                                                </Form.Select>
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



                            <Button variant="outline" className='btn btnPA' onClick={handleShow1} style={{ display: 'flex' }}> אפשרויות נוספות</Button>

                            {/* מילצור וחד פעמי */}
                            <Modal show={show1} onHide={handleClose1}>
                                <Modal.Header closeButton>
                                    <Modal.Title>אפשרויות נוספות</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>
                                    <Form style={{ direction: 'rtl' }}>
                                        <h3>מלצרים</h3>
                                        *ניתן להזמין מלצרים לפי כמות הסועדים: לכל 30 סועדים ניתן להוסיף מלצר. כל מלצר נוסף הינו תוספת של 150 ש"ח*
                                        <Form.Check
                                            type="switch"
                                            id="custom-switch"
                                            label="הוסף מלצרים"

                                        // במידה והכפתור דלוק אז יהיה ניתן לבחור מספר סועדים והוספת מלצרים בתוספת תשלום
                                        />

                                        <Form.Check
                                            type="switch"
                                            id="custom-switch"
                                            label="הוסף כלים חד פעמיים"
                                            onChange={(e) => checkSwitch(e)}


                                        //פירות הכלים אפשרות לבחור דוגמא צבעים וכמות
                                        />

                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>


                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>

                                    <Button variant="primary" onClick={handleClose}>
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Modal>
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