import React, { useEffect, useRef } from 'react';
import { Ref } from 'react';
import './PrivateAreaCSS.css'
import { useNavigate } from 'react-router-dom';
import { Button, InputGroup, FormControl, FloatingLabel, Form, Nav, Modal } from 'react-bootstrap';
import NumericInput from 'react-numeric-input';
import { useState } from 'react';
import { AccessAlarm, ThreeDRotation, MailIcon } from '@mui/icons-material';
import { Alert, Badge, Input, Select, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import 'antd/dist/antd.css';
import { InputNumber, TimePicker } from 'antd';
import moment from 'moment';
import StarsIcon from '@mui/icons-material/Stars';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';


import axios from "axios";
import { MultiSelect } from "react-multi-select-component";
import { connect } from 'react-redux';
import { updateUser } from '../../../Redux/Actions/actions';





import FilterListIcon from '@mui/icons-material/FilterList';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
// import Disposable from '../../Disposable/DisposableComponent';
import Waitresses from '../../Waitresses/WaitressesComponent';
import { addToOrder } from '../../../Redux/Actions/actions';
import ShowOrder from '../../ShowOrder/ShowOrderComponent';




function mapStateToProps(state) {

    return {
        clt: state.Cliant.C,
        bid: state.Bid.Bi,
        ord: state.Order.O
    }
}

export default connect(mapStateToProps)(function PAComponent(props) {
    const { ord, clt, bid, dispatch } = props;
    console.log('lllllllll', clt);
    const handleSave = () => {
        console.log(currentClt);
    }


    //ref
    let DateRef = useRef();
    let hourRef = useRef();
    let kosheRef = useRef([]);
    let invitedRef = useRef();
    let BusRef = useRef([]);


    const [Allbusiness, setAllbusiness] = useState()

    const [isShow, setIsShow] = useState(false);

    const [isOrderShow, setIsOrderShow] = useState();
    const [IdCurrent, setIdCurrent] = useState();

    function OrderModal(id) {
        setIdCurrent(id)
        setIsOrderShow(true)


    }
    function closeOrderModal() {
        setIsOrderShow(false)


    }


    let navigate = useNavigate();


    //עסקים
    const [busSelected, setBusSelected] = useState([])
    const [businessList, setbusinessList] = useState([])

    let temp = []
    const [AllBids, setAllBids] = useState()
    const [sourceBids, setSourceBids] = useState()
    const [minPrice, setMinPrice] = useState()
    const [showFilter, setShowFilter] = useState(false)


    //כשרויות
    const [selected, setSelected] = useState([]);
    const changeSelected = (options) => {
        setSelected(options)
        if (!options.length) {
            setAllBids(sourceBids)
            setMinPrice(Math.min(...sourceBids.map(e => e.price)))
            return
        }
        const bids = [...sourceBids]
        let filterBids = []
        bids.map(b => {
            let bidKosher = b.business.businessKosher
            // לשנות קוד
            let flag = false
            for (let i = 0; i < options.length && !flag; i++) {
                if (bidKosher.includes(options[i].label)) {
                    flag = true
                }
            }
            flag && filterBids.push(b)

        }

        )
        const prices = filterBids.map(e => e.price)
        setMinPrice(Math.min(...prices))
        setAllBids(filterBids)
        console.log(filterBids);
    }

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
    const customValueRendererKosher = (selected, _options) => {
        return selected.length
            ? selected.map(({ label }) => ", " + label)
            : "בחר כשרות";
    };

    const customValueRenderer = (selected, _options) => {
        return selected.length
            ? selected.map(({ label }) => ", " + label)
            : "בחר עסק";
    };

    //חד פעמי




    //אפשרויות נוספות
    // const actions = [
    //     { icon: <RestaurantIcon onClick={DisposableFun} />, name: 'חד פעמי' },
    //     { icon: <RoomServiceIcon onClick={WaitressesFun} />, name: 'מלצרות' },


    // ];



    //סיכום פרטים
    const [show2, setShowdetails] = useState(false);
    // const CloseDetails = () => setShowdetails(false);
    const detailsShow = () => setShowdetails(true);
    function CloseDetails() {
        axios.get(`http://localhost:3030/order/CreateOrder/${DateRef.current.value}`)
        setShowdetails(false)
    }



    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);


    //שליפת עסקים
    useEffect(() => {
        axios.get("http://localhost:3030/business/getBusiness").then((res) => {
            if (res.data && res.data.length) {
                setAllbusiness(res.data)
                res.data.forEach(element => {
                    temp.push({ "label": element.businessName, "value": element._id })
                });
                setbusinessList(temp)



            }
        })
    }, [])
    const [value, onChange] = useState(new Date());

    const [valueTab, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);

    };
    console.log('hhhh', AllBids);

    //שליפת ההזמנות של אותו לקוח
    const [AllClaintOrders, setAllClaintOrders] = useState()
    useEffect(() => {
        if (clt._id) {
            console.log(clt, "llllllllllllllll")
            axios.get(`http://localhost:3030/order/getOrderById/${clt._id}`).then((res) => {
                if (res.data && res.data.length) {
                    console.log(res.data)
                    dispatch(addToOrder())
                    setAllClaintOrders(res.data)
                }
            })
        }
    }, [])


    const [close, setClose] = useState()
    const handleMessegeClose = () => { setClose(false); };
    const handleMessegeShow = () => setClose(true);

    // אישור הצעה
    const closeBid = (id) => {
        axios.put(`http://localhost:3030/bid/updatBidsById/${id}`).then((res) =>
            handleMessegeShow()
        )
    }


    //   שליפת הצעות

    let price = 0;
    function getbidsByOrder(or) {
        console.log(or);
        axios.get(`http://localhost:3030/bid/getbidsByOrder/${or}`).then((res) => {
            if (res.data && res.data.length) {
                setAllBids(res.data)
                setSourceBids(res.data)
                setMinPrice(Math.min(...res.data.map(e => e.price)))
            }
            else {
                setAllBids([])
            }
        })
        setShowFilter(true)
    }


    const [ProDetails, setProDetails] = useState();
    const [proId, setProId] = useState()

    //צפייה בפרטי העסק
    function ShowProDetails(b) {
        console.log(b);
        setProId(b)
        setProDetails(true)
    }
    function CloseProDetails() {
        setProDetails(false)
    }



    const [showAlert, setShowAlert] = useState(false);
    const handleCloseAlert = () => setShowAlert(false);
    const handleShowAlert = () => setShowAlert(true);

    //מחיקת הזמנה
    function DeleteOrder(or) {
        console.log(or + "   or");
        axios.delete(`http://localhost:3030/order/DeleteOrderById/${or}`).then((res) => {
            if (res.data === 'delete') {
                setShowAlert(true)
                handleShowAlert()
                console.log('delete');
            }
            else {
                console.log('cant delete')
            }
        })

    }


    //update
    const [currentClt, setCurrentClt] = useState(clt)

    const [showUpdate, setShowUpdate] = useState(false);
    const handleCloseUpdate = () => setShowUpdate(false);
    const handleShowUpdate = () => setShowUpdate(true);


    const changeCurrentClt = (fieldName, fieldValue) => {
        console.log("Name" + fieldName);
        console.log("Value" + fieldValue);

        console.log(currentClt);
        setCurrentClt({ ...currentClt, [fieldName]: fieldValue })
    }

    function UpdateClt() {
        console.log("currectClt   " + currentClt);
        axios.put(`http://localhost:3030/claint/UpdateClaint/${currentClt._id}`, currentClt).then(res => {
            console.log(res.data)
            dispatch(updateUser(currentClt))
            handleCloseUpdate()
        }).catch(err => console.log(err))
    }

    //open Order
    // const [showOrder,setShowOrder]=

    return (
        <>{clt.claintFirstName !== undefined ?
            <div className='row' style={{ fontFamily: "'Varela Round', sans-serif" }}>
                <h1 style={{ textAlign: 'center' }}>אזור אישי</h1>
                <div className="border col-xl-6 col-sm-10 col-8 " style={{ justifyContent: 'center', display: 'flex' }}>
                    <div style={{ width: "75%" }}>

                        <Modal show={showAlert} onHide={handleCloseAlert}>

                            <Modal.Body className='alertModal'>
                                <h1 style={{ direction: 'rtl' }}>ההזמנה נמחקה בהצלחה!</h1>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="primary" className='btn' onClick={handleCloseAlert}>
                                    סגור
                                </Button>
                            </Modal.Footer>
                        </Modal>

                        <div>
                            <h3 style={{ margin: "3%", textAlign: 'center' }}>פרטים אישיים</h3>
                            <div className='bDtails' >
                                <div style={{ direction: 'rtl', right: 0, flexDirection: 'column', display: 'flex', marginLeft: '82%' }}>
                                    <p>שם: {" " + clt.claintFirstName + " " + clt.claintLastName}</p>
                                    <p>מייל: {" " + clt.claintEmail}</p>
                                    <p>טלפון: {" " + clt.claintPhone}</p>
                                    <Button variant="outline" className='btn btnPA' style={{ width: '170px' }} onClick={handleShowUpdate}>עדכון פרטים אישיים</Button>

                                </div>
                            </div>

                            {/* הודעת עדכון פרטים */}
                            <Modal show={showUpdate} onHide={handleCloseUpdate}>
                                <Modal.Header closeButton>
                                    <Modal.Title style={{ textAlign: 'center' }}>עדכון פרטים</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <FloatingLabel
                                            className="mb-3 "
                                            style={{ 'direction': 'rtl' }}
                                            controlId="floatingInputName"
                                            label="שם" >

                                            <Form.Control
                                                type="Text"
                                                placeholder="name"
                                                value={currentClt.claintFirstName}
                                                onChange={(e) => changeCurrentClt("claintFirstName", e.target.value)} />
                                        </FloatingLabel>

                                        {/* lastname */}
                                        <FloatingLabel
                                            className="mb-3"
                                            style={{ 'direction': 'rtl' }}
                                            controlId="floatingInputlastName"
                                            label="שם משפחה">

                                            <Form.Control
                                                type="Text"
                                                placeholder="lastName"
                                                value={currentClt.claintLastName}
                                                onChange={(e) => changeCurrentClt("claintLastName", e.target.value)} />
                                        </FloatingLabel>

                                        {/* phone */}
                                        <FloatingLabel
                                            className="mb-3"
                                            style={{ 'direction': 'rtl' }}
                                            controlId="floatingInputPhone"
                                            label="טלפון" >

                                            <Form.Control
                                                type="phone"
                                                placeholder="phone"
                                                value={currentClt.claintPhone}
                                                onChange={(e) => changeCurrentClt("claintPhone", e.target.value)} />
                                        </FloatingLabel>

                                        {/* password */}
                                        <FloatingLabel
                                            className="mb-3"
                                            style={{ 'direction': 'rtl' }}
                                            controlId="floatingPassword"
                                            label="סיסמה">

                                            <Form.Control
                                                type="password"
                                                placeholder="Password"
                                                value={currentClt.password}
                                                onChange={(e) => changeCurrentClt("password", e.target.value)} />

                                        </FloatingLabel>


                                        {/* Password Authentication */}
                                        <FloatingLabel
                                            className="mb-3"
                                            // style={{ 'direction': 'rtl' }}
                                            controlId="floatingPasswordAuthentication"
                                            label=" אימות סיסמה">

                                            <Form.Control
                                                type="password"
                                                placeholder="Password Authentication"
                                                value={currentClt.confirmPassword}
                                                onChange={(e) => changeCurrentClt("claintLastName", e.target.value)} />
                                        </FloatingLabel>
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>

                                    <Button variant="secondary" className='btn' onClick={handleCloseUpdate}>
                                        ביטול
                                    </Button>
                                    <Button variant="primary" className='btn' onClick={UpdateClt}>
                                        עדכון
                                    </Button>
                                </Modal.Footer>
                            </Modal>

                        </div>

                        {/* חלק 2 */}

                        <h3 style={{ margin: "3%" }}>היסטוריה</h3>
                        <div className='bbids' style={{ marginLeft: 0 }}>
                            <div className='send' >

                                <Modal show={close} onHide={handleMessegeShow}>
                                    <Modal.Body className='alertModal'>
                                        <SentimentSatisfiedAltIcon sx={{ color: "green", fontSize: '106px' }} />
                                        <br></br>

                                        <h3 style={{ direction: 'rtl' }}>מזל טוב!</h3>
                                        <h5> ההזמנה אושרה בהצלחה</h5>
                                  
                                        <Button variant="secondary" className='btn' onClick={handleMessegeClose}>
                                            סגור
                                        </Button>
                                    </Modal.Body>
                                </Modal>

                                <h5>הזמנות </h5>
                                {AllClaintOrders && AllClaintOrders.length && AllClaintOrders.map((or, index) =>
                                    <>
                                        <div key={index} style={{ display: 'flex', AlignItems: 'center', direction: 'rtl', flexDirection: 'row', margin: 0, alignItems: 'flex-end' }} className='showb'>
                                            <div style={{ cursor: "pointer" }} onClick={() => getbidsByOrder(or._id)}>
                                                <p>
                                                    מספר הזמנה:{or._id}
                                                </p>
                                                <p>
                                                    תאריך אירוע:{new Date(or.eventDate).toLocaleDateString()}
                                                </p>
                                                <p>
                                                    סטטוס:{or.StatusOrder ? "סגור" : "פתוח"}
                                                </p>
                                            </div>
                                            <div className='end'>

                                                <Button className='btn bidbtn' onClick={() => { OrderModal(or._id) }}>פירוט הזמנה</Button>
                                            </div>

                                        </div>
                                    </>
                                )
                                }
                                {isOrderShow && <ShowOrder show={isOrderShow} setShow={closeOrderModal} orderId={IdCurrent} />}



                            </div>

                            <div style={{ display: showFilter ? 'flex' : 'none', flexDirection: "column", width: ' 100%' }} >
                                <h5 style={{ direction: 'rtl', marginBottom: '10%' }}>הצעות שהתקבלו</h5>
                                <h5 style={{ direction: 'rtl' }}> סינון הצעות</h5>
                                <div>
                                    <MultiSelect
                                        className='fillter'
                                        options={options}
                                        value={selected}
                                        onChange={changeSelected}
                                        labelledBy="kosher"
                                        valueRenderer={customValueRendererKosher}
                                        hasSelectAll={false}

                                    // ref={BusRef}
                                    >
                                    </MultiSelect>


                                </div>


                                <div>
                                    {AllBids && AllBids.length > 0 && AllBids.map((b, index) =>
                                        <>

                                            <div key={index} style={{ display: 'flex', AlignItems: 'center', direction: 'rtl', flexDirection: 'row', margin: 0, alignItems: 'flex-end' }}
                                                className='showb'>

                                                <div>
                                                    <p>
                                                        מאת:{b['business']['businessName']}
                                                    </p>
                                                    <p>כשרות: {" " + b.business.businessKosher.map(b => b + ", ")}</p>

                                                    <p>
                                                        סכום:{b.price}
                                                    </p>
                                                    <p>
                                                        סטטוס:{b.status ? "סגור" : "פתוח"}
                                                    </p>
                                                    <p>{b.price === minPrice &&
                                                        <>
                                                            <div>
                                                                <StarsIcon sx={{ color: '#2e7d32' }} />
                                                                <h6 style={{ color: '#2e7d32' }}>ההצעה המשתלמת ביותר</h6>

                                                            </div>
                                                        </>
                                                    }</p>
                                                </div>
                                                {b.status ?
                                                    <>
                                                        <div className='end'>
                                                            <Button className='btn bidbtn' onClick={() => ShowProDetails(b._id)} >פרטי העסק</Button>
                                                        </div>
                                                        <Modal show={ProDetails} onHide={ShowProDetails} >
                                                            <Modal.Header>
                                                                <Modal.Title style={{ direction: 'rtl' }}>
                                                                    פרטי הלקוח
                                                                </Modal.Title>
                                                            </Modal.Header>
                                                            <Modal.Body>
                                                                <p>שם העסק:{b['business']['businessName']} </p>
                                                                <p>טלפון:{b['business']['businessPhone']} </p>
                                                                <p>כתובת:{b['business']['businessAddress']} </p>
                                                                <p>מייל:{b['business']['businessEmail']} </p>
                                                                {/* <p>כשרות:{b.businessKosher.map(b => b + ", ")}</p> */}
                                                            </Modal.Body>
                                                            <Modal.Footer>
                                                                <Button variant="primary" className='btn' onClick={CloseProDetails}>
                                                                    סגור
                                                                </Button>
                                                            </Modal.Footer>
                                                        </Modal>
                                                    </>
                                                    :
                                                    <>
                                                        <div className='end'>
                                                            <Button className='btn bidbtn' onClick={() => closeBid(b._id)}>אישור הצעה</Button>
                                                        </div>
                                                    </>}


                                            </div>
                                        </>
                                    )
                                    }
                                </div>
                                {AllBids?.length === 0 && <div style={{ direction: 'rtl', marginTop: '2%' }}>אין הצעות להזמנה זו</div>}


                            </div>



                        </div>

                    </div>











                    <div>



                        <div >

                            <div  >
                                <div>



                                    <div>


                                    </div>

                                    {/* //סינון כשרות. */}

                                </div>





                            </div>
                            <br></br>

                        </div>

                    </div>
                </div>
            </div>
            : ''}

        </>
    )
})