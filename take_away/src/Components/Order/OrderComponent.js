import React, { useEffect, useRef } from 'react';
import axios from "axios";
import { useState } from 'react';
import { Modal, Button, Form, FloatingLabel } from "react-bootstrap";
import "./OrderCss.css";
import { connect } from 'react-redux';
import { addToOrder } from '../../Redux/Actions/actions'

//לא עובד
//.1 פונקצית CreateBid לא עובדת- בעיות המרה

function mapStateToProps(state) {
    return {
        bus: state.Professional.B
    }
}

export default connect(mapStateToProps)(function Order(Props) {
    const { show, setShow } = Props
    const { bus, dispatch } = Props


    //מערך דוגמה


    const [order, setOrder] = useState()
    useEffect(() => {
        axios.get(`http://localhost:3030/order/getOrder/${Props.orderId}`).then((res) => {
            if (res.data) {
                console.log(res.data)
                setOrder(res.data)

            }
        })
    }, [])

    // const [show, setShow] = useState(Props);
    const handleOrderClose = () => { setShow(false); };
    const handleOrderShow = () => setShow(true);

    const [bids, setBids] = useState()

    let refPrice = useRef()

    function CreateBid() {
        let newBid = {

            price:refPrice.current.value,
            business:bus._id,
            order:order._id,
            status: false

        }
console.log("newbid: "+ newBid);
        axios.post(`http://localhost:3030/bid/Createbid`,newBid).then((res) => {
            console.log('res',res);
            if (res.data && res.data.length) {
                console.log(res.data)
                alert('ההצעה נשלחה בהצלחה')
                handleOrderClose()

            }
        }).catch((err)=>{
            console.log(err)})
    }

    //הזמנה סגורה שנשלחת
    return (
        <>


            <div>
                <Modal show={show} onHide={handleOrderShow}>
                    <Modal.Header>
                        <Modal.Title style={{ textAlign: 'center' }}> פירוט ההזמנה</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {order ?
                            <div style={{ direction: 'rtl' }}>



                                <h3>תפריט</h3>
                                {/* <p>{order.portion.portionName}</p> */}
                                {order.portion !== undefined ? order.portion.map(item => 
                                <p > {item['portionName']}</p>) 
                                : ''}
                                <br></br>

                                {/* <h5>{order != undefined ? order.eventDate : ''}</h5> */}
                                <h3>הצעת מחיר:</h3>
                                <div>
                                    <h5>תמחר</h5>
                                    <FloatingLabel
                                        className="mb-3 "
                                        style={{ 'direction': 'rtl' }}
                                        controlId="floatingInput"
                                        label="price" >

                                        <Form.Control
                                            ref={refPrice}
                                            type="text"
                                            placeholder="number" />


                                    </FloatingLabel>
                                </div>


                            </div> : <></>}
                    </Modal.Body>
                    <Modal.Footer style={{ marginLeft: '5%', display: 'flex', flexWrap: 'nowrap' }}>

                        <Button variant="secondary" className='btn' onClick={handleOrderClose}>
                            ביטול
                        </Button>
                        <Button variant="primary" className='btn' onClick={CreateBid}>
                            שלח
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
})

