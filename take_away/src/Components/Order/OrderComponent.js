import React from "react";
import axios from "axios";
import { useState } from 'react';
import { Modal, Button, Form } from "react-bootstrap";
import "./OrderCss.css"

export default function Order(Props) {

    const [showOrder, setShowOrder] = useState(Props.showOrder);
    const handleOrderClose = () => { setShowOrder(false); Props.setShowOrder() };
    const handleOrderShow = () => setShowOrder(true);

    //הזמנה סגורה שנשלחת
    return (
        <>
            <div>
                <Modal show={showOrder} onHide={handleOrderClose}>
                    <Modal.Header>
                        <Modal.Title style={{ textAlign: 'center' }}>הזמנה</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        שם המזמין:
                        מייל:
                        תאריך הזמנה:
                        תאריך יעד:
                        שעה:
                        חד פעמי:
                        מלצרים:
                        מקום האירוע:
                        סוג האירוע:
                        תפריט:

                        כמות מנות:
                        הערות:


                    </Modal.Body>
                    <Modal.Footer>

                        <Button variant="secondary" className='btn' onClick={handleOrderClose}>
                            ביטול
                        </Button>
                        <Button variant="primary" className='btn' onClick={handleOrderClose}>
                            הוסף להזמנה
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}

