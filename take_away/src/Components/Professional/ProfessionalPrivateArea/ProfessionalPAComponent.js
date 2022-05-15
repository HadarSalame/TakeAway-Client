import React, { useState } from 'react';
import './ProfessionalPACSS.css'
import { Button, InputGroup, FormControl, FloatingLabel, Form, Select } from 'react-bootstrap';
import { BrowserRouter, Link, Route, Routes, Accordion, Card } from 'react-router-dom'
import ForgetPass from '../../ForgetPassWord/ForgetPassComponent';
import { useNavigate } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';

export default function ProfessionalPA() {
    const [value, onChange] = useState(new Date());
    return (
        <>
            <div className='row border col-xl-6 col-sm-10 col-8'>
                <div>
                    {/* <Calendar onChange={onChange} value={value} className='calender' /> */}
                    <Button>עדכון פרטי העסק</Button>
                    <br/>
                    <Button>עדכון התפריט</Button>
                    <br/>
                    
                    

                    <div className='schaduller'>  
                        <Form.Group controlId="datePicker">
                            <Form.Label>Select Date</Form.Label>
                            <Form.Control type="date" name="datePicker" placeholder="Date of Birth" />
                        </Form.Group>
                    </div>
                </div>
            </div>
        </>
    )
}