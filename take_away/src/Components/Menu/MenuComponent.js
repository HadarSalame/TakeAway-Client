import React, { useRef } from 'react';
import axios from 'axios';
import './MenuCSS.css';
import { useState, useEffect, } from 'react';
import { useNavigate } from 'react-router-dom';
import { Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
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

    const [showErrorAlert, setShowErrorAlert] = useState(false)
    const handleCloseErrorAlert = () => setShowErrorAlert(false);
    const handleShowErrorAlert = () => setShowErrorAlert(true);

    const [show, setShow] = useState(false);
    const handleCloseAlert = () => { setShow(false); navigate('/PAComponent') };
    const handleShowAlert = () => setShow(true);


    let navigate = useNavigate();

    // function handleCloseAlert() {
    //     setShow(false);
    //     navigate("/PAComponent")

    // }

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


        if (newOrder.eventDate !== '' && newOrder.eventAddress !== '' && newOrder.numInvited !== '') {
            axios.post('http://localhost:3030/order/CreateOrder', newOrder).then(res => {
                handleShowAlert()
                dispatch(addToOrder(res.data.Create));
                // navigate("/PAComponent")
            }).catch(err => console.log(err))
        }
        else {
            handleShowErrorAlert()

        }
    }



    function check(e) {
        console.log(e.target.value);

    }
    var temp = []
    function savePoration(items) {


        // console.log(items);
        temp = selectedPortion;
        var itemdup = selectedPortion.find(i => i._id === items._id);
        //    console.log(itemdup);
        if (itemdup === undefined) {
            temp.push(items)
            setSelectedPortion(temp)
        }
        else {
            temp = selectedPortion.filter(i => i._id !== items._id);
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
                        {/* <Stack sx={{ width: '100%', margin: '2%' }} spacing={2} >
                            <Alert severity="error" hidden={!showAlert}>
                                <AlertTitle>שגיאה!</AlertTitle>
                                יש למלא את כל הפרטים
                            </Alert>
                        </Stack> */}

                        <Modal show={show} onHide={handleCloseAlert} >

                            <Modal.Body className='alertModal'>
                                <CheckCircleIcon sx={{ color: "#f7d520", fontSize: '106px' }} />
                                <br></br>

                                <h3 style={{ direction: 'rtl' }}>ההזמנה נשלחה בהצלחה!</h3>

                                <Button variant="primary" className='btn'
                                    style={{ alignItems: 'center', marginTop: '3% ', marginLeft: 0, marginRight: 0 }}
                                    onClick={handleCloseAlert}>
                                    סגור
                                </Button>
                            </Modal.Body>
                        </Modal>


                        <Modal show={showErrorAlert} onHide={handleCloseErrorAlert}>

                            <Modal.Body className='alertModal' >
                                <CancelIcon sx={{ color: "#cb2121cc", fontSize: '106px' }} />
                                <br></br>

                                <h3 style={{ direction: 'rtl' }}>שגיאה!</h3>
                                <h5> יש למלא את כל הפרטים</h5>

                                <Button variant="primary" className='btn'
                                    style={{ alignItems: 'center', marginTop: '3% ', marginLeft: 0, marginRight: 0 }}
                                    onClick={handleCloseErrorAlert}>
                                    סגור
                                </Button>

                            </Modal.Body>



                        </Modal>
                        <>

                            {Category && Category.length && Category.map((cats, index) =>

                                //איך אפשר לתת שם לכל קטגוריה אם אפשר להכניס רק משהו אחד בכלmap
                                <FormGroup style={{
                                    display: 'flex',
                                    flexDirection: "row-reverse",
                                    justifycontent: "flex-start",
                                    margin: "3%",
                                    marginRight: 0

                                }}>
                                    <div key={index}>
                                        <h3>{cats.categoryName}</h3>

                                    </div>

                                    {Dose && Dose.length && Dose.map((items) =>
                                        // <div onClick={check} key={items._id}></div>

                                        items.categoryID === cats._id ? <>
                                            <div >
                                                <br></br>
                                                <FormControlLabel control={<Checkbox className="portion" style={{ color: '#f7d520' }} onClick={() => savePoration(items)} />} label={items.portionName}
                                                    name={items.portionName} data={items.Category} style={{ display: 'flex', borderColor: 'green' }} labelPlacement="start" />
                                            </div> </> : null

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
                                min={10}
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
                            label="תאריך" >

                            <Form.Control

                                min={new Date().toISOString().split("T")[0]}
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
