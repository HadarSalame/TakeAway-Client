import React from 'react';
import './ProfessionalPACSS.css'
import { Button, InputGroup, FormControl, FloatingLabel, Form, Select } from 'react-bootstrap';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import ForgetPass from '../../ForgetPassWord/ForgetPassComponent';
import { useNavigate } from 'react-router-dom';

export default function ProfessionalPA() {

    return (
        <>
            <div className='row border col-xl-6 col-sm-10 col-8'>
                <div>
                    <Button>עדכון פרטי העסק</Button>
                    <br/>
                    <Button>עדכון התפריט</Button>
                    <br/>
                    

                    {/* <div>  schaduller
                        <Form.Group controlId="datePicker">
                            <Form.Label>Select Date</Form.Label>
                            <Form.Control type="date" name="datePicker" placeholder="Date of Birth" />
                        </Form.Group>
                    </div> */}
                </div>
            </div>
        </>
    )
}