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


export default function BusinessPage() {


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

    const [isPricingShow, setIsPricingShow] = React.useState();
    const [IdCurrent, setIdCurrent] = React.useState();

    function PricingModal(id) {
        setIdCurrent(id)
        setIsPricingShow(true)
        console.log("1234");

    }
    function closePricingModal() {
        setIsPricingShow(false)
        console.log("4321");

    }


    return (
        <>
            <div className="row" style={{ fontFamily: "'Varela Round', sans-serif" }}>
                <h1 style={{ textAlign: 'center' }}>הצעות לתמחור</h1>
                <div className='border col-xl-6 col-sm-10 col-8'>
                    <div>

                        {AllFalseOrders && AllFalseOrders.length && AllFalseOrders.map((item, index) =>
                            // <div onClick={check} key={items._id}></div>
                            <>
                                <div className='b' key={index} style={{}}>
                                    <p >קוד הזמנה: {item._id}</p>
                                    {item.claintID !== undefined ? <p >מאת: {item['claintID']['claintFirstName']}</p> : ''}
                                    <p >תאריך הזמנה: {item.orderDate}</p>
                                    <p >תאריך האירוע: {item.eventDate}</p>
                                    <p >מספר מנות: {item.numInvited}</p>
                                    <Button style={{ direction: 'ltr', display: 'flex', marginTop: '10px', marginBottom: '10px', marginRight: "80%" }} className="btn" onClick={() => { PricingModal(item._id) }}>פתח הצעה</Button>

                                </div>
                            </>
                        )
                        }
                        {isPricingShow && <Order show={isPricingShow} setShow={closePricingModal} orderId={IdCurrent} />}

                    </div>

                </div>
            </div>
        </>
    )
}