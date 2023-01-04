import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import './BusinessCSS.css';
import Big_Bite from '../../../Images/Logos/Big_Bite.jpg'
import Timin from '../../../Images/Logos/Timin.jpg'
import Cook from '../../../Images/Logos/Cook.jpeg'
import axios from "axios";
import { Button } from "@mui/material";
import Order from "../../Order/OrderComponent";
import { connect } from 'react-redux';
import { Modal, Form, FloatingLabel } from "react-bootstrap";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';



function mapStateToProps(state) {
    return {
        bus: state.Professional.B,
        IsBidExist:state.Professional.IsBidExist
    }
}

export default connect(mapStateToProps)(function BusinessPage(props) {
    const { bus,IsBidExist } = props
    console.log('llll', IsBidExist);
    //שליפת כל ההזמנות שלא סגורות
    const [AllFalseOrders, setAllFalseOrders] = useState()

    useEffect(() => {
        debugger
        axios.get("http://localhost:3030/order/getOrdersFalse").then((res) => {
            if (res.data && res.data.length) {
                if (res.data === "the business exist") {
                    alert("כבר שלחת הצעת החיר להזמנה זו")
                }
                else
                    setAllFalseOrders(res.data)
            };




            // }
        })
    }, [])

    let navigate = useNavigate();

    const [isPricingShow, setIsPricingShow] = useState();
    const [IdCurrent, setIdCurrent] = useState();

    const [show, setShow] = useState(false);
    const handleCloseAlert = () => { setShow(false)};
    const handleShowAlert = () => setShow(true);

    function PricingModal(id) {
        setIdCurrent(id)
        setIsPricingShow(true)
      

    }
    function closePricingModal() {
        setIsPricingShow(false)
        console.log('IsBidExist'+IsBidExist);
        if(IsBidExist)
        handleShowAlert()
 

    }


    return (
        <>
            <div className="row" style={{ fontFamily: "'Varela Round', sans-serif" }}>
                <h1 style={{ textAlign: 'center' }}>הצעות לתמחור</h1>
                <div className='border col-xl-6 col-sm-10 col-8'>
                    <div>

                        <Modal show={show} onHide={handleCloseAlert} >

                            <Modal.Body className='alertModal'>
                                <CheckCircleIcon sx={{ color: "#f7d520", fontSize: '106px' }} />
                                <br></br>

                                <h3 style={{ direction: 'rtl' }}>ההצעה נשלחה בהצלחה!</h3>

                                <Button variant="primary" className='btn'
                                    style={{ alignItems: 'center', marginTop: '3% ', marginLeft: 0, marginRight: 0 }}
                                    onClick={handleCloseAlert}>
                                    סגור
                                </Button>
                            </Modal.Body>
                        </Modal>



                        {AllFalseOrders && AllFalseOrders.length && AllFalseOrders.map((item, index) => {
                            const isUserAlredyGive = item.bids.some(e => e.business === bus._id)
                            // <div onClick={check} key={items._id}></div>
                            return <>
                                <div className='b' key={index} style={{}}>
                                    <p >קוד הזמנה: {item._id}</p>
                                    <p >מאת: {item['claintID']['claintFirstName']+" "+ item['claintID']['claintLastName']}</p> 
                                    <p >תאריך הזמנה: {new Date(item.orderDate).toLocaleDateString()}</p>
                                    <p >תאריך האירוע: {new Date(item.eventDate).toLocaleDateString()}</p>
                                    <p >מספר מנות: {item.numInvited}</p>
                                    <Button disabled={isUserAlredyGive} style={{ direction: 'ltr', display: 'flex', marginTop: '10px', marginBottom: '10px', marginRight: "80%" }} className="btn" onClick={() => { PricingModal(item._id) }}>פתח הצעה</Button>

                                </div>
                            </>
                        })
                        }
                        {isPricingShow && <Order show={isPricingShow} setShow={closePricingModal} orderId={IdCurrent} />}

                    </div>

                </div>
            </div>
        </>
    )
})