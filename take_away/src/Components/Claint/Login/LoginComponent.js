import React from 'react';
import './LoginCSS.css'
import { Button } from 'react-bootstrap';

export default function Login(props) {
    return (
        <>
        <div >
            {/* //התחברות למשתמשים עם שם סיסמא כפתור שיחזור סיסמה עי שליחת 
            //קישור למייל 
            // וכפתור התחברות */}
            <br></br>
            <h1>התחברות</h1>
            <br></br>
            <br></br>
            <div className="border">
                {/* <input type="email" value="LogInEmail" className="input">E-mail</input>
                <br></br>
                <input type="password" value="LogInPass">סיסמה</input>
                <br></br>  */}
                <br></br>


               <Button value="logInBtn" variant="outline" className="btn">התחברות</Button>
            </div>
        </div>
        </>
    )
}