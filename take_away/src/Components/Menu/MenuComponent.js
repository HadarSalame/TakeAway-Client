import React from 'react';
import axios from 'axios';
import './MenuCSS.css';
import { useState, useEffect } from 'react';
import { Checkbox, FormGroup, FormControlLabel, } from '@mui/material';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { margin } from '@mui/system';



export default function Menu(props) {



    const [Dose, setDose] = useState()
    const [Category, setCategory] = useState()

    useEffect(() => {
        axios.get("http://localhost:3030/portion/getPortion").then((res) => {
            if (res.data && res.data.length) {
                setDose(res.data)

            }
        })

        axios.get("http://localhost:3030/category/getCategory").then((res) => {
            if (res.data && res.data.length) {
                setCategory(res.data)

            }
        })
    }, [])



    function check(e) {
        console.log(e.target.value);

    }

    return (
        <>
            <div className=" row " style={{ fontFamily: "'Varela Round', sans-serif" }}>
                <h1 style={{ textAlign: 'center' }}>יצירת הזמנה</h1>
                <div className="border col-xl-6 col-sm-10 col-8 PA" style={{ display: "inline-flex", flexDirection: "column" }}>
                <div>
                    <>
                        {Category && Category.length && Category.map((cats) =>
                            //איך אפשר לתת שם לכל קטגוריה אם אפשר להכניס רק משהו אחד בכלmap
                            <FormGroup style={{
                                display: 'flex',
                                flexDirection: "row-reverse",
                                justifycontent: "flex-start",
                                margin: "3%",
                                marginRight:0
                            }}>
                                {Dose && Dose.length && Dose.map((items) =>
                                    // <div onClick={check} key={items._id}></div>

                                    items.categoryID == cats._id ?
                                        <FormControlLabel control={<Checkbox style={{ color: '#f7d520' }} />} label={items.portionName}
                                            style={{ display: 'flex', borderColor: 'green' }} labelPlacement="start" />
                                        : null

                                )
                                }
                            </FormGroup>
                        )}

                    </>
                </div>
                <div style={{
                    flexDirection: 'column', alignItems: ' flex-end', display: 'flex',
                    flexWrap: "nowrap",
                    justifyContent: "flex-end"
                }}>

                    <FloatingLabel
                        className="mb-3 "
                        style={{ 'direction': 'rtl' }}
                        controlId="floatingInputNumber"
                        label="מספר סועדים" >

                        <Form.Control
                            type="number"
                            placeholder="number" />
                    </FloatingLabel>
                </div>
                <Button style={{marginLeft: "5%"}}>שלח</Button>
            </div>

        </div>
        </>
    )
}
