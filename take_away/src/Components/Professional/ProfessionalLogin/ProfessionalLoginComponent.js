import React, { useRef, useState } from 'react';
import './ProfessionalLoginCSS.css'
import { Button, InputGroup, FormControl, FloatingLabel, Form, Select ,Modal} from 'react-bootstrap';

// import ForgetPass from '../../ForgetPassWord/ForgetPassComponent';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import CancelIcon from '@mui/icons-material/Cancel';



import { connect } from 'react-redux';
import { addProfessional, signhoutClient } from '../../../Redux/Actions/actions'


//למצוא את הניתוב של ForgetPass
//import Forgetpass from '.././'



export default connect()(function ProfessionalLogin(props) {

    const { dispatch } = props

    let ProEmailRef = useRef()
    let ProPassRef = useRef()
 
    const [showErrorAlert, setShowErrorAlert] = useState(false)
    const handleCloseErrorAlert = () => setShowErrorAlert(false);
    const handleShowErrorAlert = () => setShowErrorAlert(true);

    let navigate = useNavigate();

    function gotoIndex() {

        axios.get(`http://localhost:3030/business/BusinessLogin/${ProEmailRef.current.value}/${ProPassRef.current.value}`).then((res) => {
            console.log(res.data);
            if (res.data === 'undefined') {
                handleShowErrorAlert()

            }
            else {
        
                dispatch(addProfessional(res.data));
                dispatch(signhoutClient());
                navigate('/PPAComponent')
            }


        }).catch(err => {

        })

    }
    return (

        <>
            <div style={{ fontFamily: "'Varela Round', sans-serif", marginTop: '10%' }}>

                <div className=" row" >
                    <h1 style={{ textAlign: 'center' }}>התחברות לבעל עסק</h1>
                    <div className='border col-xl-6 col-sm-10 col-8'>

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

                        <div>
                            <FloatingLabel
                                className="mb-3 "
                                style={{ 'direction': 'rtl' }}
                                controlId="floatingInput"
                                label="Email" >

                                <Form.Control
                                    ref={ProEmailRef}
                                    type="email"
                                    placeholder="name@example.com" />


                            </FloatingLabel>

                            {/* <FloatingLabel
                                className="mb-3 "
                                style={{ 'direction': 'rtl' }}
                                controlId="floatingInput"
                                label="מספר העסק" >

                                <Form.Control
                                    ref={ProIdRef}
                                    type="Text"
                                    placeholder="BusinessID" />


                            </FloatingLabel> */}

                            <FloatingLabel
                                controlId="floatingPassword"
                                label="סיסמה">

                                <Form.Control
                                    ref={ProPassRef}
                                    type="password"
                                    placeholder="Password" />

                            </FloatingLabel>

                            <div className="FP">

                                {/* <Link to='/ForgetPass'>שכחתי סיסמה</Link> */}


                            </div>
                        </div>
                        <Button value="logInBtn" variant="outline" className="btn" onClick={gotoIndex} >התחבר/י</Button>
                    </div>
                </div>
            </div>
        </>
    )
})