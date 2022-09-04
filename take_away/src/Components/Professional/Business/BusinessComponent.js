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

    const b = [
        { id: '123', ClaintId: '123456', OrderDate: '2/3/2022', eventDate: '2/5/2022', numInvited: '30' },
        { id: '456', ClaintId: '25847', OrderDate: '2/3/2022', eventDate: '2/5/2022', numInvited: '60' }]

    //שליפת כל ההזמנות שלא סגורות
    const [AllFalseOrders, setAllFalseOrders] = useState()

    useEffect(() => {
        axios.get("http://localhost:3030/order/getOrdersFalse").then((res) => {
            if (res.data && res.data.length) {
                setAllFalseOrders(res.data)
            };




            // }
        })
    }, [])

    let navigate = useNavigate();

    const [isPricingShow, setIsPricingShow] = React.useState(false);

    function PricingModal() {

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
                <h1 style={{ textAlign: 'center' }}>הצעות</h1>
                <div className='border col-xl-6 col-sm-10 col-8'>
                    <div>

                        {AllFalseOrders && AllFalseOrders.length && AllFalseOrders.map((item) =>
                            // <div onClick={check} key={items._id}></div>
                            <>
                                <div className='b' >
                                    {/* <p >קוד הזמנה: {item.ordertID}</p> */}
                                    <p >מאת: {item.claintID}</p>
                                    <p >תאריך הזמנה: {item.orderDate}</p>
                                    <p >תאריך האירוע: {item.eventDate}</p>
                                    <p >מספר מנות: {item.numInvited}</p>
                                    <Button style={{ direction: 'ltr', display: 'flex', marginTop: '10px', marginBottom: '10px', marginRight: "80%" }} className="btn" onClick={PricingModal}>פתח הצעה</Button>
                                    {isPricingShow && <Order  show={isPricingShow} setShow={closePricingModal} />}
                                </div>
                            </>


                        )
                        }
                    </div>

                </div>
            </div>
        </>
    )
}