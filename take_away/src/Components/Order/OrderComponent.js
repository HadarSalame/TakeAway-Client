import React from "react";
import axios from "axios";
import { useState } from 'react';
import { Modal, Button, Form } from "react-bootstrap";
import "./OrderCss.css";


export default function Order(Props) {

    //מערך דוגמה
    const temp = [
        { date: '02/03/2022', OrderCode: '123456', from: 'liel', event: '02/04/2022', kind: 'חתונה', place: 'מייפל', detils: "", count: 12, marks: "" },
        { date: '12/6/2022', OrderCode: '325697', from: 'noa', event: '02/12/2022', kind: 'אירוסין', place: 'מייפל', detils: "", count: 130, marks: "" }
    ]

    const [showOrder, setShowOrder] = useState(Props.showOrder);
    const handleOrderClose = () => { setShowOrder(false); Props.setShowOrder() };
    const handleOrderShow = () => setShowOrder(true);

    //הזמנה סגורה שנשלחת
    return (
        <>
            <div>
                <Modal show={showOrder} onHide={handleOrderShow}>
                    <Modal.Header>
                        <Modal.Title style={{ textAlign: 'center' }}>הזמנה</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            {temp.map((item) =>
                            (
                                <>
                                    <h1>{item.date}</h1>
                                    <h1>{item.OrderCode}</h1>
                                    <h1>{item.count}</h1>
                                    <h1>{item.detils}</h1>
                                    <h1>{item.event}</h1>
                                </>
                            ))}
                        </div>
                    </Modal.Body>
                    <Modal.Footer>

                        <Button variant="secondary" className='btn' onClick={handleOrderClose}>
                            ביטול
                        </Button>
                        <Button variant="primary" className='btn' onClick={handleOrderClose}>
                   תמחר
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}

