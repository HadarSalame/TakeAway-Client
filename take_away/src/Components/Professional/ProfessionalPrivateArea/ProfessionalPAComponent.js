import React, { useState, useEffect } from 'react';
import './ProfessionalPACSS.css'
import { Button, InputGroup, FormControl, FloatingLabel, Form, Select, Modal } from 'react-bootstrap';
import { BrowserRouter, Link, Route, Routes, Accordion, Card } from 'react-router-dom'
import { MultiSelect } from "react-multi-select-component";
import ForgetPass from '../../ForgetPassWord/ForgetPassComponent';
import { useNavigate } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
import ShowOrder from '../../ShowOrder/ShowOrderComponent';
import axios from "axios";
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import { connect } from 'react-redux';
import { updateProfessional } from '../../../Redux/Actions/actions'

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function mapStateToProps(state) {
    return {
        bus: state.Professional.B
    }
}

export default connect(mapStateToProps)(function ProfessionalPA(props) {

    const { bus, dispatch } = props




    //פונקצית לוח שנה
    const [dateState, setDateState] = useState(new Date())
    const changeDate = (e) => {
        setDateState(e)
        console.log(e)


    }

    const [value, onChange] = useState(new Date());

    const [valueTab, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //ordershow
    const [isOrderShow, setIsOrderShow] = useState();
    const [IdCurrent, setIdCurrent] = useState();
    function OrderModal(id) {
        setIdCurrent(id)
        setIsOrderShow(true, IdCurrent)


    }
    function closeOrderModal() {
        setIsOrderShow(false)


    }

    const [selected, setSelected] = useState([]);
    const options = [
        { label: "העדה החרדית", value: "1" },
        { label: "בד''צ בית יוסף", value: "2" },
        { label: "הרב לנדא", value: "3" },
        { label: "הרב אברהם רובין", value: "4" },
        { label: "יורה דעה-הרב שלמה מחפוד", value: "5" },
        { label: "בד''צ מחזיקי הדת", value: "6" },
        { label: "בד''צ שארית ישראל", value: "7" },
        { label: "איגוד הרבנים", value: "8" },
        { label: "רבני צהר", value: "9" },
        { label: "רבנות פתח תקווה", value: "10" },
        { label: "רבנות נתניה", value: "11" }



    ];

    const customValueRenderer = (selected, _options) => {
        return selected.length
            ? selected.map(({ label }) => "✔️ " + label)
            : "בחר כשרות";
    };

    //update

    const [currentBus, setCurrentBus] = useState(bus)

    const changeCurrentBus = (fieldName, fieldValue) => {
        console.log('ji');
        console.log(currentBus);
        setCurrentBus({ ...currentBus, [fieldName]: fieldValue })
    }
    function updateBus() {

        axios.put(`http://localhost:3030/business/UpdateBusiness/${currentBus._id}`, currentBus).then(res => {
            console.log(res.data)
            dispatch(updateProfessional(currentBus));
            handleClose()
        }).catch(err => console.log(err))

    }

    //get bids by business
    const [AllBusinessBids, setAllBusinessBids] = useState()
    const [AllCloseOrders, setAllCloseOrders] = useState()

    useEffect(() => {
        console.log(bus, "AllBusinessBids")
        axios.get(`http://localhost:3030/bid/getbidsByBusiness/${bus._id}`).then((res) => {
            if (res.data && res.data.length) {
                console.log(res.data)
                setAllBusinessBids(res.data.filter(d => !d.status))
                setAllCloseOrders(res.data.filter(d => d.status))
            }
        })
    }, [])
    useEffect(() => {
        if (!AllCloseOrders?.length) return
        axios.post(`http://localhost:3030/bid/setShowBids`, AllCloseOrders.map(b => b._id)).then((res) => {

        })
    }, [AllCloseOrders])

    //get close orders
    console.log(bus.businessKosher);

    //delete bids

    const [showAlert, setShowAlert] = useState(false);
    const handleCloseAlert = () => setShowAlert(false);
    const handleShowAlert = () => setShowAlert(true);

    function DeleteBid(bid) {
        axios.post(`http://localhost:3030/bid/updateIsActiveBid/${bid}`).then((res) => {
            if (res.data === 'updateIsActiveBid') {
                console.log('delete');
                setShowAlert(true)
                handleShowAlert()
            }
            else {
                console.log('cant updateIsActiveBid')
            }
        })

    }

    const [ClaintDetails, setClaitDetails] = useState();
    const [proId, setProId] = useState()

    //צפייה בפרטי העסק
    function ShowClaintDetails(b) {
        console.log(b);
        setProId(b)
        setClaitDetails(true)
    }
    function CloseClaintDetails() {
        setClaitDetails(false)
    }


    return (
        <>
            <div className='row ' style={{ fontFamily: "'Varela Round', sans-serif" }}>
                <h1 style={{ textAlign: "center" }}>אזור אישי לעסקים</h1>
                <div className='border col-xl-6 col-sm-10 col-8' style={{ justifyContent: 'center', display: 'flex' }}>
                    <div >

                        <Modal show={showAlert} onHide={handleCloseAlert}>

                            <Modal.Body className='alertModal'>
                                <h1 style={{ direction: 'rtl' }}>ההצעה בוטלה בהצלחה!</h1>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="primary" className='btn' onClick={handleCloseAlert}>
                                    סגור
                                </Button>
                            </Modal.Footer>
                        </Modal>

                        <h3 style={{ margin: "3%" }}>פרטי העסק</h3>
                        <div className='bDtails'>
                            <div >

                                {/* logo  לוגו של בעל העסק
                                <img src={Cook} className='blogo'></img> */}



                            </div>

                            <div style={{ direction: 'rtl', marginLeft: 'auto', right: 0 }}>
                                <div>
                                    <p>שם העסק: {" " + bus.businessName}</p>
                                    <p>שם בעל העסק: {" " + bus.businessOwnerName}</p>
                                    <p>טלפון: {" " + bus.businessPhone}</p>
                                    <p>מייל:  {" " + bus.businessEmail}</p>
                                    <p>כתובת: {" " + bus.businessAddress}</p>

                                    <p>כשרות: {" " + bus.businessKosher.map(b => b + ", ")}</p>

                                </div>

                                {/* <Calendar onChange={onChange} value={value} className='calender' /> */}
                                <Button onClick={handleShow} style={{ marginRight: 0, width: ' max-content' }}>עדכון פרטי העסק</Button>

                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title style={{ textAlign: 'center' }}>עדכון פרטים</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form>


                                            <FloatingLabel
                                                className="mb-3 "
                                                style={{ 'direction': 'rtl' }}
                                                controlId="floatingInputName"
                                                label="שם העסק" >

                                                <Form.Control
                                                    type="Text"
                                                    placeholder="businessName"
                                                    value={currentBus.businessName}
                                                    onChange={(e) => changeCurrentBus("businessName", e.target.value)} />
                                            </FloatingLabel>

                                            <FloatingLabel
                                                className="mb-3 "
                                                style={{ 'direction': 'rtl' }}
                                                controlId="floatingInputName"
                                                label="שם בעל העסק" >

                                                <Form.Control
                                                    type="Text"
                                                    placeholder="BusinessOwnerName"
                                                    value={currentBus.businessOwnerName}
                                                    onChange={(e) => changeCurrentBus("businessOwnerName", e.target.value)} />
                                            </FloatingLabel>

                                            <div
                                                style={{ display: 'flex' }}>
                                                <FloatingLabel
                                                    className="mb-3 form "
                                                    style={{ width: '590px' }}
                                                    controlId="floatingInputId"
                                                    label=" כתובת העסק" >

                                                    <Form.Control
                                                        type="Text"
                                                        placeholder="BusinessAddress"
                                                        value={currentBus.businessAddress}
                                                        onChange={(e) => changeCurrentBus("businessAddress", e.target.value)} />
                                                </FloatingLabel>

                                            </div>
                                            {/* phone */}
                                            <FloatingLabel
                                                className="mb-3"
                                                controlId="floatingInputPhone"
                                                label="טלפון" >

                                                <Form.Control
                                                    type="phone"
                                                    placeholder="businessPhone"
                                                    value={currentBus.businessPhone}
                                                    onChange={(e) => changeCurrentBus("businessPhone", e.target.value)} />
                                            </FloatingLabel>

                                            {/* kosher */}
                                            {/* <FloatingLabel
                                        className="mb-3 form"
                                    >

                                        <MultiSelect
                                            className='form'
                                            style={{ direction: 'rtl' }}
                                            options={options}
                                            value={selected}
                                            onChange={setSelected}
                                            labelledBy="kosher"
                                            valueRenderer={customValueRenderer}


                                        />
                                    </FloatingLabel> */}

                                            {/* password */}
                                            <FloatingLabel
                                                className="mb-3"
                                                style={{ 'direction': 'rtl' }}
                                                controlId="floatingPassword"
                                                label="סיסמה">

                                                <Form.Control
                                                    type="password"
                                                    placeholder="Password"
                                                    value={currentBus.businesspassword}
                                                    onChange={(e) => changeCurrentBus("businesspassword", e.target.value)} />

                                            </FloatingLabel>

                                            {/* Password Authentication */}
                                            <FloatingLabel
                                                className="mb-3"
                                                // style={{ 'direction': 'rtl' }}
                                                controlId="floatingPasswordAuthentication"
                                                label=" אימות סיסמה">

                                                <Form.Control
                                                    type="password"
                                                    placeholder="Password Authentication" />

                                            </FloatingLabel>
                                        </Form>

                                    </Modal.Body>
                                    <Modal.Footer style={{ flexWrap: "nowrap" }}>

                                        <Button variant="secondary" className='btn' onClick={handleClose}>
                                            ביטול
                                        </Button>
                                        <Button variant="primary" className='btn' onClick={updateBus}>
                                            עדכון
                                        </Button>
                                    </Modal.Footer>

                                </Modal>

                            </div>
                        </div>




                        <h3 style={{ margin: '3%' }}>היסטוריה</h3>

                        <div className='bbids'>
                            <div className='send'>
                                <h5>הצעות שנשלחו</h5>
                                {AllBusinessBids && AllBusinessBids.length && AllBusinessBids.map((item, index) =>
                                    <>
                                        <div key={index} style={{ display: 'flex', alignItems: 'center', direction: 'rtl', flexDirection: 'row', margin: 0, alignItems: 'flex-end' }} className='showb'>
                                            <div >
                                                <p>
                                                    מספר ההצעה:{item._id}
                                                </p>
                                                <p>
                                                    <p >ל: {item.order?.claintID?.claintFirstName}</p>
                                                </p>
                                                <p>
                                                    <p >מספר הזמנה:{item.order?._id}</p>
                                                </p>

                                                <p>
                                                סטטוס:{!item.isActive ? 'בוטל':item.status ? "סגור" : "פתוח"}
                                                </p>
                                                <p>
                                                    סכום:{item.price}
                                                </p>
                                            </div>
                                            <div className='end'>

                                                <Button className='btn bidbtn' disabled={!item.isActive} onClick={() => { DeleteBid(item._id) }}>בטל הצעה</Button>
                                                <Button className='btn bidbtn' disabled={!item.isActive} onClick={() => { OrderModal(item.order) }}>פירוט הזמנה</Button>
                                            </div>

                                        </div>
                                    </>
                                )}
                                {isOrderShow && <ShowOrder show={isOrderShow} setShow={closeOrderModal} orderId={IdCurrent} />}

                            </div>


                            <div>



                                <h5 style={{ direction: 'rtl' }}>הצעות שאושרו</h5>
                                {AllCloseOrders && AllCloseOrders.length && AllCloseOrders.map((item, index) =>
                                    <>
                                        <div key={index} style={{ display: 'flex', alignItems: 'center', direction: 'rtl', flexDirection: 'row', margin: 0, alignItems: 'flex-end' }} className='showb'>
                                            <div >
                                                <p>
                                                    מספר ההצעה:{" "+item._id}
                                                </p>
                                                <p>
                                                    מספר הזמנה:{" "+item.order?._id}
                                                </p>
                                                        <p>שם הלקוח:{+" "+item.order?.claintID?.claintFirstName+" "+ item.order?.claintID?.claintLastName} </p>
                                                <p>
                                                    סטטוס:{" "+item.status ? "אושר" : "פתוח"}
                                                </p>
                                                <p>{!item.isShow && <>
                                                    <div style={{display:'flex'}}>
                                                                <MarkEmailReadIcon color="#496bdb" />
                                                                <h6 style={{ color: '#496bdb' }}>הזמנה חדשה  </h6>

                                                            </div>
                                                 </>}
                                                 </p>
                                            </div>
                                            <div className='end'>
                                                <Button className='btn bidbtn' onClick={() => { ShowClaintDetails(item._id) }}>פרטי הלקוח</Button>

                                                <Modal show={ClaintDetails} onHide={ShowClaintDetails} >
                                                    <Modal.Header>
                                                        <Modal.Title style={{direction:'rtl'}}>
                                                            פרטי הלקוח
                                                        </Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <p>שם הלקוח:{+" "+item.order?.claintID?.claintFirstName+" "+ item.order?.claintID?.claintLastName} </p>
                                                        <p>טלפון:{+" "+item.order?.claintID?.claintPhone} </p>
                                                        <p>מייל:{+" "+item.order?.claintID?.claintEmail} </p>  
                                                    </Modal.Body>
                                                    <Modal.Footer>
                                                        <Button variant="primary" className='btn' onClick={CloseClaintDetails}>
                                                            סגור
                                                        </Button>
                                                    </Modal.Footer>
                                                </Modal>


                                                <Button className='btn bidbtn' onClick={() => { OrderModal(item.order) }}>פירוט הצעה</Button>
                                            </div>

                                        </div>
                                    </>
                                )}
                                {isOrderShow && <ShowOrder show={isOrderShow} setShow={closeOrderModal} orderId={IdCurrent} />}

                            </div>
                        </div>
                        {/* <br />
                        <Button style={{ marginRight: 0 }}>עדכון התפריט</Button>
                        <br /> */}


                        {/* 
                        <Box style={{ width: '100%', bgcolor: 'background.paper', color: 'black' }} >
                            <Tabs value={valueTab} onChange={handleChange} className="tabs" centered>
                                <Tab label="נשלח" className="tab" onClick={Chatfunc}  > </Tab>
                                



                            </Tabs>
                        </Box> */}
                        {/* {isChatShow && <Chat show={isChatShow} setShow={closeChatModal} />} */}




                        {/* <div className='schaduller '>
                        <Form.Group controlId="datePicker">
                            <Form.Label>Select Date</Form.Label>
                            <Form.Control type="date" name="datePicker" placeholder="Date of Birth" />
                        </Form.Group>
                    </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}
)

