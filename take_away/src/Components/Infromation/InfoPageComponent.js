import React, { useState, useEffect } from "react";
import './InfopageCss.css';
import { Button, InputGroup, FormControl, FloatingLabel, Form, Select } from 'react-bootstrap';

import RestaurantIcon from '@mui/icons-material/Restaurant';
import RoomServiceIcon from '@mui/icons-material/RoomService';

import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';




export default function InfoPage(Props) {




    const colors = [{ id: 1, color: '#000000' }, { id: 2, color: '#555555 ' }, { id: 3, color: '#c1bfb1ed' }, { id: 4, color: '#ffff' }
        , { id: 5, color: '#f0d693' }, { id: 6, color: '#e17c05ed' }, { id: 7, color: '#f7d520' }, { id: 8, color: '#59de2ff0' }, { id: 9, color: '#34d160f0' }
        , { id: 10, color: '#1ed99e' }, { id: 11, color: '#0a92c6' }, { id: 12, color: '#003594' }, { id: 13, color: '#000556' },
    { id: 14, color: '#4508a7' }, { id: 15, color: '#7002b8' }, { id: 16, color: '#9a03ab' }, { id: 17, color: '#f00bc3' }, { id: 18, color: '#b6034a' }
        , { id: 19, color: '#f93f74' }, { id: 20, color: '#e81414' }
    ]


    return (
        <>
            <div className='row ' style={{ fontFamily: "'Varela Round', sans-serif" }}>
                <h1 style={{ textAlign: 'center' }}> ... קצת עלינו</h1>
                <div className="border col-xl-6 col-sm-10 col-8">
                    <div>

                        <div style={{ width: "250px" }}>
                            {colors.map((item) => (
                                <button style={{ backgroundColor: item.color }} className='colorsBtn'></button>
                            ))}
                        </div>

                    </div>



                </div>
            </div>
        </>
    )
}