import React from "react";
import './BusinessCSS.css';
import Big_Bite from '../../../Images/Logos/Big_Bite.jpg'
import Timin from '../../../Images/Logos/Timin.jpg'
import Cook from '../../../Images/Logos/Cook.jpeg'
import axios from "axios";
import { Button } from "@mui/material";

export default function BusinessPage(props) {

    const b = [
        { id: '123', ClaintId: '123456', OrderDate: '2/3/2022', eventDate: '2/5/2022', numInvited: '30' },
        { id: '456', ClaintId: '25847', OrderDate: '2/3/2022', eventDate: '2/5/2022', numInvited: '60' }]



    return (
        <>
            <div className="row" style={{ fontFamily: "'Varela Round', sans-serif" }}>
                <h1 style={{ textAlign: 'center' }}>הצעות</h1>
                <div className='border col-xl-6 col-sm-10 col-8'>
                    <div>
                        {b.map((item) =>
                            <>
                                <div className='b' >
                                    <p >קוד הזמנה: {item.id}</p>
                                    <p >מאת: {item.ClaintId}</p>
                                    <p >תאריך הזמנה: {item.OrderDate}</p>
                                    <p >תאריך האירוע: {item.eventDate}</p>
                                    <p >מספר מנות: {item.numInvited}</p>
                                    <Button style={{direction:'ltr',display:'flex', marginTop:'10px',marginBottom:'10px',marginRight: "80%"}} className="btn">תמחר</Button>
                                    
                                </div>
                            </>)}
                    </div>

                </div>
            </div>
        </>
    )
}