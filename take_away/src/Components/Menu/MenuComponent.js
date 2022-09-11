import React, { useRef } from 'react';
import axios from 'axios';
import './MenuCSS.css';
import { useState, useEffect, } from 'react';
import { Checkbox, FormGroup, FormControlLabel, } from '@mui/material';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { margin } from '@mui/system';
import moment from 'moment';

import { connect } from 'react-redux';
import { addToOrder } from '../../Redux/Actions/actions'

function mapStateToProps(state) {
    return {
        clt: state.Professional.C
    }
}


export default connect(mapStateToProps)(function Menu(props) {

    const { clt, dispatch } = props

    //קטגוריות
    const categoryList = [{ cn: 'סלטים' }, { cn: 'מנות ראשונות' }, { cn: 'תוספות' }, { cn: 'מנות עיקריות' }, { cn: 'קינוחים' },]
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

    //יצירת הזמנה

    let eventDateRef = useRef();
    let eventAddressRef = useRef();
    let numInvitedRef = useRef();
    // let portionRef = useRef([]);

    const [selectedPortion, setSelectedPortion] = useState()


    function CreateanOrder() {
        let newOrder = {
            //מאיפ מביאים את הID של הCLAINT

            // claintID: clt.claint,
            orderDate: moment().format('DD-MM-YY'),
            eventDate: eventDateRef.current.value,
            eventAddress:eventAddressRef.current.value,
            numInvited: numInvitedRef.current.value,
            portion: selectedPortion,
            StatusOrder: 'false'

        }
        axios.post('http://localhost:3030/order/CreateOrder', newOrder).then(res => {
            alert(res.data)
            console.log(res.data)
            dispatch(addToOrder(newOrder));
            // navigate("/Index")
        }).catch(err => console.log(err))

    }



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
                                    marginRight: 0

                                }}>
                                    {/* {categoryList.map((c)=>(
                                        
                                        
                                            <h3>{c.cn}</h3>
                                            <br></br>
                                        
                                    )) } */}

                                    {Dose && Dose.length && Dose.map((items) =>
                                        // <div onClick={check} key={items._id}></div>

                                        items.categoryID == cats._id ?
                                            <FormControlLabel control={<Checkbox style={{ color: '#f7d520' }} onClick={setSelectedPortion} />} label={items.portionName}
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
                        <h5 style={{ direction: 'rtl' }}>פרטים נוספים</h5>

                        <FloatingLabel
                            className="mb-3 "
                            style={{ 'direction': 'rtl' }}
                            controlId="floatingInputNumber"
                            label="מספר סועדים" >

                            <Form.Control
                                ref={numInvitedRef}
                                type="number"
                                placeholder="number" />
                        </FloatingLabel>

                        <FloatingLabel
                            className="mb-3 "
                            style={{ 'direction': 'rtl' }}
                            controlId="floatingInputAddress"
                            label="כתובת" >

                            <Form.Control
                                ref={eventAddressRef}
                                type="text"
                                placeholder="text" />
                        </FloatingLabel>

                        <FloatingLabel
                            className="mb-3 "
                            style={{ 'direction': 'rtl' }}
                            controlId="floatingInputAddress"
                            label="תאריך לשנות" >

                            <Form.Control
                                ref={eventDateRef}
                                type="text"
                                placeholder="text" />
                        </FloatingLabel>
                    </div>
                    <Button style={{ marginLeft: "5%" }} onClick={CreateanOrder}>שלח</Button>
                </div>

            </div>
        </>
    )
})
