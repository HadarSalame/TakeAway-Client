import React from 'react';
import './PrivateAreaCSS.css'
import { Button, InputGroup, FormControl, FloatingLabel, Form, Nav, Modal } from 'react-bootstrap';
import { useState } from 'react';

export default function PAComponent(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);


    const handleClose1 = () => setShow(false);
    const handleShow1 = () => setShow(true);
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
                            <Button variant="outline" className='btn' onClick={handleShow}>סיכום תפריט</Button>



                            <Button variant="outline" className='btn' onClick={handleShow1}> אפשרויות נוספות</Button>

                            {/* מילצור וחד פעמי */}
                            <Modal show={show1} onHide={handleClose1}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal heading</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>
                                    <Form>
                                      <h3>מלצרים</h3>
                                      *ניתן להזמין מלצרים לפי כמות הסועדים: לכל 30 סועדים ניתן להוסיף מלצרץ כל מלצר נוסף הינו תוספת של 150 ש"ח*
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

                            <Button variant="outline" className='btn'>הסרה מהתפריט</Button>
                            <Button variant="outline" className='btn'>שלח הצעה</Button>

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
                           <Button variant="outline" className='btn' style={{ width: '170px', marginRight: '0' }} onClick={handleShow}>עדכון פרטים אישיים</Button>

                        {/* הודעת עדכון פרטים */}
                           <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title  style={{ textAlign: 'center' }}>עדכון פרטים</Modal.Title>
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

                        <div>


                            {/* <Button>הצעות שהתקבלו</Button>
                        <Button>הזמנות</Button>
                        <Button>הצעות שנשלחו</Button> */}
                            {/* <Nav variant='tabs' defaultActiveKey='#' className='nav nav-tabs' >
                                <Nav.Item>
                                    <Nav.Link eventKey='get' href='#' >הזמנות שהתקבלו</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='out' href='#'>הזמנות שנשלחו</Nav.Link>
                                </Nav.Item>
                            </Nav> */}



                            <Nav variant="tabs" className='navs1'>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-1" className='navs'>הצעות שנשלחו</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="get" className='navs'>הצעות שהתקבלו</Nav.Link>
                                </Nav.Item>

                            </Nav>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}