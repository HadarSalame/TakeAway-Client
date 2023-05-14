import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./WaitressesCSS.css"
import { useState } from "react";
import NumericInput from "react-numeric-input";
import axios from "axios";




export default function Waitresses(Props) {
  

    const [Wshow, setWShow] = useState(Props.show);
    const handleWClose = () => { setWShow(false); Props.setWShow() };
    const handleWShow = () => setWShow(true);
    return (
        <>
            <div>
                <Modal show={Wshow} onHide={handleWClose}>
                    <Modal.Header closeButton>
                        <Modal.Title style={{ textAlign: 'center' }}>עדכון פרטים</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* שיהי ניתן לשלוח רק בחירה אחת */}
                        <Form.Select onClick={(e)=>console.log(e.target.value)} style={{ height: 56 }} >
                            <option disabled>בחר כמות מוזמנים</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </Form.Select>


                    </Modal.Body>
                    <Modal.Footer>

                        <Button variant="secondary" className='btn' onClick={handleWClose}>
                            ביטול
                        </Button>
                        <Button variant="primary" className='btn' onClick={handleWClose}>
                            הוסף להזמנה
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}