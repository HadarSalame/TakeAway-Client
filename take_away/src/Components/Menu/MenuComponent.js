import React, { useRef } from 'react';
import axios from 'axios';
import './MenuCSS.css';
import { useState, useEffect, } from 'react';
import { useNavigate } from 'react-router-dom';
import { Checkbox, FormGroup, FormControlLabel, } from '@mui/material';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import moment from 'moment';

import { connect } from 'react-redux';
import { addToOrder } from '../../Redux/Actions/actions'

function mapStateToProps(state) {
    return {
        clt: state.Cliant.C
    }
}




export default connect(mapStateToProps)(function Menu(props) {

    const { clt, dispatch } = props

    //קטגוריות
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

    const [selectedPortion, setSelectedPortion] = useState([])

  let navigate = useNavigate();

    function CreateanOrder() {
        // var por=document.getElementsByClassName("portion")
        // console.log(por);

        console.log("_______________________")

        console.log(selectedPortion)


        let newOrder = {
            claintID: clt._id,

            //orderDate: moment().format('DD-MM-YY'),
            eventDate: eventDateRef.current.value,
            eventAddress: eventAddressRef.current.value,
            numInvited: numInvitedRef.current.value,
            portion: selectedPortion,
            StatusOrder: 'false'

        }
        console.log(newOrder.eventDate);
        console.log(newOrder)
        axios.post('http://localhost:3030/order/CreateOrder', newOrder).then(res => {
            alert(res.data)
            console.log(res.data)
            dispatch(addToOrder(res.data.Create));
            navigate("/Index")
        }).catch(err => console.log(err))

    }



    function check(e) {
        console.log(e.target.value);

    }
    var temp = []
    function savePoration(items) {


        // console.log(items);
        temp = selectedPortion;
        var itemdup = selectedPortion.find(i => i._id == items._id);
        //    console.log(itemdup);
        if (itemdup == undefined) {
            temp.push(items)
            setSelectedPortion(temp)
        }
        else {
            temp = selectedPortion.filter(i => i._id != items._id);
            console.log("temp");
            console.log(temp);

            setSelectedPortion(temp)

        }
        console.log(selectedPortion);
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
                                    <div>
                                        <h3>{cats.categoryName}</h3>
                                        <h1></h1>
                                    </div>

                                    {Dose && Dose.length && Dose.map((items) =>
                                        // <div onClick={check} key={items._id}></div>

                                        items.categoryID == cats._id ?
                                            <FormControlLabel control={<Checkbox className="portion" style={{ color: '#f7d520' }} onClick={() => savePoration(items)} />} label={items.portionName}
                                                name={items.portionName} data={items.Category} style={{ display: 'flex', borderColor: 'green' }} labelPlacement="start" />
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
                            style={{ 'direction': 'rtl', width: '220.4px' }}
                            controlId="floatingInputAddress"
                            label="תאריך לשנות" >

                            <Form.Control
                                ref={eventDateRef}
                                type="date"
                                placeholder="text" />

                        </FloatingLabel>
                    </div>
                    <Button style={{ marginLeft: "5%" }} onClick={CreateanOrder}>שלח</Button>
                </div>

            </div>
        </>
    )
})
