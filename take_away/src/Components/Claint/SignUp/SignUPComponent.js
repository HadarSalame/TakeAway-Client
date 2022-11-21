import React, { useRef ,useState} from 'react';
import './SignUpCss.css'
import { Button, InputGroup, FormControl, FloatingLabel, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { Alert,Stack,AlertTitle} from '@mui/material';
import { connect } from 'react-redux';
import { addUser } from '../../../Redux/Actions/actions'


export default connect()(function SignUp(props) {

    const { dispatch } = props

    let FirstNameRef = useRef();
    let LastNameRef = useRef();
    let PhoneRef = useRef();
    let EmailRef = useRef();
    let PassRef = useRef();

    const [showAlert, setShowAlert] = useState(false)

    let navigate = useNavigate();
    function gotoIndex() {
        let newClaint = {
            claintFirstName: FirstNameRef.current.value,
            claintLastName: LastNameRef.current.value,
            claintPhone: PhoneRef.current.value,
            claintEmail: EmailRef.current.value,
            password: PassRef.current.value,

        }
        if (newClaint.claintPhone < 10 || newClaint.claintPhone > 10) {
            axios.post('http://localhost:3030/Claint/CreateClaint', newClaint).then(res => {
                console.log(res.data)
                //הסרת כפתורי ההתחברות וההרשמה ולשים כפתור התנתקות ושלום למשתמש
                dispatch(addUser(res.data.CreateClaint));
                navigate("/Index")
            }).catch(err => console.log(err))
        }
        else {
            setShowAlert(false)
        }

    }
    return (
        <>
            <div style={{ fontFamily: "'Varela Round', sans-serif" }}>
                {/* for users */}
                <div className='signUp' >
                    {/* //הרשמה למשתמשים מכילה
                    //שם, שם משפחה, נייד, מייל, סיסמה, אימות סיסמה
                    //אישור תנאי האתר וכפתור הרשמה */}
                    <h1 style={{ textAlign: 'center' }}>הרשמה למשתמשים</h1>

                    <Stack sx={{ width: '100%', margin: '2%' }} spacing={2} >
                        <Alert severity="error" hidden={!showAlert}>
                            <AlertTitle>!שגיאה</AlertTitle>
                            אחד מהפרטים שהוזנו אינו תקין
                        </Alert>
                    </Stack>
                    <br></br>
                    <div className=" row" >
                        <div className='border col-xl-6 col-sm-10 col-8'>
                            <div >
                                {/* name */}
                                <FloatingLabel
                                    className="mb-3 "
                                    style={{ 'direction': 'rtl' }}
                                    controlId="floatingInputName"
                                    label="שם" >

                                    <Form.Control
                                        ref={FirstNameRef}
                                        type="Text"
                                        placeholder="name" />
                                </FloatingLabel>

                                {/* lastname */}
                                <FloatingLabel
                                    className="mb-3"
                                    style={{ 'direction': 'rtl' }}
                                    controlId="floatingInputlastName"
                                    label="שם משפחה">

                                    <Form.Control
                                        ref={LastNameRef}

                                        type="Text"
                                        placeholder="lastName" />
                                </FloatingLabel>

                                {/* phone */}
                                <FloatingLabel
                                    className="mb-3"
                                    style={{ 'direction': 'rtl' }}
                                    controlId="floatingInputPhone"
                                    label="טלפון" >

                                    <Form.Control
                                        ref={PhoneRef}
                                        type="phone"
                                        placeholder="phone" />
                                </FloatingLabel>

                                {/* email */}
                                <FloatingLabel
                                    className="mb-3"
                                    style={{ 'direction': 'rtl' }}
                                    controlId="floatingInputEmail"
                                    label="E-mail" >

                                    <Form.Control
                                        ref={EmailRef}
                                        type="email"
                                        placeholder="name@example.com" />
                                </FloatingLabel>

                                {/* password */}
                                <FloatingLabel
                                    className="mb-3"
                                    style={{ 'direction': 'rtl' }}
                                    controlId="floatingPassword"
                                    label="סיסמה">

                                    <Form.Control
                                        ref={PassRef}
                                        type="password"
                                        placeholder="Password" />

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
                            </div>

                            <form>
                                <div className="custom-control custom-checkbox custom-control-label">

                                    <label for="TermsdefaultCheck"> אני מאשר/ת את תקנון האתר  </label>
                                    <input type="checkbox" id="TermsdefaultCheck" name="Terms" />
                                </div>
                            </form>

                            <Button value="SignUpBtn" variant="outline" className="btn" onClick={gotoIndex} >הרשמ/י</Button>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
})