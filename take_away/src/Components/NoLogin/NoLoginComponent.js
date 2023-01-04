import React from "react"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

export default function NoLogin() {
    let navigate = useNavigate()
    function goIndex() {
        navigate("/Index")

    }


    return (
        <>
            <div style={{display:'flex',flexDirection:'column'}}>
                <h1 style={{
                    marginTop: '10%',
                    display: 'flex',
                    justifyContent: 'center',
                    fontSize: 'xxx-large'
                }}

                >אופס התנתקת מהמערכת</h1>
                <Button onClick={goIndex} style={{ justifyContent: 'center' }} className='btn'>התחבר מחדש</Button>
            </div>
        </>
    )
}