import React, { useEffect, useRef } from 'react';
import axios from "axios";
import { useState } from 'react';
import { Modal, Button, Form, FloatingLabel } from "react-bootstrap";
import "./OrderCss.css";
import { connect } from 'react-redux';
import { addToOrder } from '../../Redux/Actions/actions'
import { ItemGroup } from 'semantic-ui-react';
import { AlarmTwoTone } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import CancelIcon from '@mui/icons-material/Cancel';
import {IsBidExistProfessional} from '../../Redux/Actions/actions'


//לא עובד
//.1 פונקצית CreateBid לא עובדת- בעיות המרה

function mapStateToProps(state) {
    return {
        bus: state.Professional.B,
        IsBidExist:state.Professional.IsBidExist

    }
}

export default connect(mapStateToProps)(function Order(Props) {
    const { show, setShow } = Props
    const { bus,IsBidExist, dispatch } = Props
    let navigate = useNavigate();

    //מערך דוגמה


    const [order, setOrder] = useState()
    useEffect(() => {
        axios.get(`http://localhost:3030/order/getOrder/${Props.orderId}`).then((res) => {
            if (res.data) {
                console.log(res.data)
                setOrder(res.data)

            }
        })
    }, [])

    // const [show, setShow] = useState(Props);
    const handleOrderClose = () => { setShow(false); };
    const handleOrderShow = () => setShow(true);

    //massage

    const [showErrorAlert, setShowErrorAlert] = useState(false)
    const handleCloseErrorAlert = () => {setShowErrorAlert(false)};
    const handleShowErrorAlert = () => setShowErrorAlert(true);


    let refPrice = useRef()
    let refMarks = useRef()

    const [messege, setMessege] = useState()

    function Close(){
        console.log("741852963"+IsBidExist);
        dispatch(IsBidExistProfessional(false))
        handleOrderClose()

    }

    function CreateBid() {
        let newBid = {

            price: refPrice.current.value,
            marks: refMarks.current.value,
            business: bus._id,
            order: order._id,
            status: false

        }

        console.log("IsBidExistOrder: " + bus);
        if (newBid.price !== '') {
            axios.post(`http://localhost:3030/bid/Createbid`, newBid).then((res) => {
                console.log('res', res);
                if (res.data) {
                    dispatch(IsBidExistProfessional(true))
                    console.log("212121"+IsBidExist);
                    handleOrderClose()
                    // navigate('/PPAComponent')
                }

                //משום מה זה מגיע לפה תמיד ומדלג על האיף הראשון
                // else{
                //     alert('כבר שלחת הצעה להזמנה זו')
                //     handleOrderClose()
                // }

            }).catch((err) => {
                console.log(err)
            })
        }
        else {
            
            handleShowErrorAlert()
            // handleOrderClose()
        }
        
    }

    //הזמנה סגורה שנשלחת
    return (
        <>


            <div>

                {/* error Alert */}
                <Modal show={showErrorAlert} onHide={handleCloseErrorAlert} >

                    <Modal.Body className='alertModal'>
                        <CancelIcon sx={{ color: "#cb2121cc", fontSize: '106px' }} />
                        <br></br>

                        <h3 style={{ direction: 'rtl' }}>שגיאה!</h3>
                        <h5> אחד הפרטים אינו תקין</h5>

                        <Button variant="primary" className='btn'
                            style={{ alignItems: 'center', marginTop: '3% ', marginLeft: 0, marginRight: 0 }}
                            onClick={handleCloseErrorAlert}>
                            סגור
                        </Button>

                    </Modal.Body>
                </Modal>


                <Modal show={show} onHide={handleOrderShow}>
                    <Modal.Header>
                        <Modal.Title style={{ textAlign: 'center' }}> פירוט ההזמנה</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {order ?
                            <div style={{ direction: 'rtl' }}>

                                <h3>תפריט</h3>

                                {order.portion !== undefined ? order.portion.map((item, index) => <>
                                    <div key={index}>
                                        <p > {item['portionName']}</p>
                                    </div>
                                </>
                                )
                                    : ''}
                                <br></br>
                                <h3>פרטים נוספים</h3>
                                <p>מיקום:{order.eventAddress}</p>
                                <p>כמות מוזמנים:{order.numInvited}</p>

                                {/* <h5>{order != undefined ? order.eventDate : ''}</h5> */}
                                <h3>הצעת מחיר:</h3>
                                <div>
                                    <h5>תמחר</h5>
                                    <FloatingLabel
                                        className="mb-3 "
                                        style={{ 'direction': 'rtl' }}
                                        controlId="floatingInput"
                                        label="price" >

                                        <Form.Control
                                            ref={refPrice}
                                            type="text"
                                            placeholder="number" />


                                    </FloatingLabel>
                                </div>

                                <br></br>
                                <div>
                                    <h5>הערות</h5>
                                    <FloatingLabel
                                        className="mb-3 "
                                        style={{ 'direction': 'rtl' }}
                                        controlId="floatingInput"
                                        label=" " >

                                        <Form.Control
                                            ref={refMarks}
                                            type="text"
                                            placeholder="number" />


                                    </FloatingLabel>
                                </div>


                            </div> : <></>}
                    </Modal.Body>
                    <Modal.Footer style={{ marginLeft: '5%', display: 'flex', flexWrap: 'nowrap' }}>

                        <Button variant="secondary" className='btn' onClick={Close}>
                            ביטול
                        </Button>
                        <Button variant="primary" className='btn' onClick={CreateBid}>
                            שלח הצעה
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
})

