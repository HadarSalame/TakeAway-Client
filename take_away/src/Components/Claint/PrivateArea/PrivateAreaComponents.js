import React from 'react';
import './PrivateAreaCSS.css'
import { Button, InputGroup, FormControl, FloatingLabel, Form, Nav, Modal} from 'react-bootstrap';
import NumericInput from 'react-numeric-input';
import { useState } from 'react';

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

    return (
        <>
            <div className='row'>
                <h1 style={{ textAlign: 'center' }}>אזור אישי</h1>
                <div className="border col-xl-6 col-sm-10 col-8 PA">
                    {/* כפתורים:
1. עדכון פרטים אישים
 2. עדכון התפריט שמכיל הוספה והסרה מהתפריט
 3. הצעות שהתקבלו שכולל כפתורים של השוואה בין ההצעות ואפשרות להזמין את ההצעות
  4ץדואר נכנס      */}
                    <div className='menu'>

                        <div  >




                            {/* יפתח חלון ויהיה ניתן לבחור בו למי לשלוח את ההצעה */}
                        </div>
                    </div>
                    <div className='option'>
                        <div className='details'>
                            <h6>שם:</h6>
                            <h6>E-mail:</h6>
                            <h6>טלפון:</h6>
                            <h6>כתובת:</h6>
                        </div>
                        <div></div>
                        <Button variant="outline" className='btn' style={{ width: '170px', marginRight: '0' }} onClick={handleShow}>עדכון פרטים אישיים</Button>

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

                        <Button variant="outline" className='btn' onClick={detailsShow}>סיכום תפריט</Button>

                        <Modal show={show2} onHide={CloseDetails}>
                            <Modal.Header>
                                <Modal.Title>סיכום הזמנה</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                <Form>
                                    {/* //פירוט התפריט - כולל את התפריט עצמו,מילצור,חד פעמי */}
                                    {/* //תאריך הארוע */}
                                    <Form.Group controlId="datePicker">
                                        <Form.Label>Select Date</Form.Label>
                                        <Form.Control type="date" name="datePicker" placeholder="Date of Birth" />
                                    </Form.Group>
                                    {/* //כמות המוזמנים */}
                                    <NumericInput className="form-control" min={15} step={1.000} value={15} max={500} inputmode="numeric"  strict/>
                                    {/* //מיקום הארוע */}
                                    {/* //העסקים שאליהם נשלחות ההצעות */}
                                    <Form.Select>
                                        <option value={1}>שם העסק</option>
                                    </Form.Select>
                                    {/* //הערות */}
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Example textarea</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
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



                        <Button variant="outline" className='btn' onClick={handleShow1}> אפשרויות נוספות</Button>

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

                        <div>
                            אימייל בוקס להצעות שנשלחו והצעות שהתקבלו


                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}