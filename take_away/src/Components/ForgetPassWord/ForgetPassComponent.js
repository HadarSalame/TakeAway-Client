import React from 'react';
import './ForgetPassCSS.css'
import { Button, InputGroup, FormControl, FloatingLabel, Form,Select } from 'react-bootstrap';
import axios from "axios";


export default function ForgetPass(props){
//שליחת קוד אקראי למייל או לטלפון 
//בדיקת הקוד ואפשרות לשלוח אותו שוב
//במידה והקוד נכון אז עמוד איפוס סיסמה עם סיסמה חדשה
//הגבלה לאחר 3 נסיונות למשך כמה שעות 
    return(
        
        <>
        <div style={{fontFamily:"'Varela Round', sans-serif"}}>
        איפוס סיסמה
        </div>
        </>
    )
}
