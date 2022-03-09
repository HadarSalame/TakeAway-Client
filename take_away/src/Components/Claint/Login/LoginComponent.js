import React from 'react';
import './LoginCSS.css'
import { Button } from 'react-bootstrap';

export default function Login(props) {
    return (
        <>
        <div>
            {/* //התחברות למשתמשים עם שם סיסמא כפתור שיחזור סיסמה עי שליחת 
            //קישור למייל 
            // וכפתור התחברות */}
            <br></br>
            <h1>התחברות</h1>
            <br></br>
            <br></br>
            <div className="border">
               
                <input type="text" placeholder="LogInEmail@" value="LogInEmail" className="input"></input>
                 E-Mail<br></br>
                <input type="password" value="LogInPass"></input>
                <br></br> 
                <br></br>
 

               <Button value="logInBtn" variant="outline" className="btn">התחברות</Button>
            </div>
        </div>
        </>
    ) 
}