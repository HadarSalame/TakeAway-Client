import React from "react";
import './IndexCSS.css'
import { Button, InputGroup, FormControl, FloatingLabel, Form, Select } from 'react-bootstrap';
import Page1 from '../../Images/Logos/Photos/Page1.jpg'

export default function Index(props) {

    return (
        <>
            <div>
                <div className="row col-xl-6 col-sm-10 col-8">
                    <div style={{display:'flex'}} className="border">
                        <div style={{margin:'10px'}}>
                        <h1>קצת עלינו...</h1>
                        <br></br>
                        <h2>jhcgjkkchkzdhkhcxzhckhxk</h2>
                        </div>
                        <img src={Page1} className='img' ></img>
          
                    </div>

                    <div style={{display:'flex'}} className="border">
                        <div style={{margin:'10px'}}>
                        <h1>קצת עלינו...</h1>
                        <br></br>
                        <h2>jhcgjkkchkzdhkhcxzhckhxk</h2>
                        </div>
                        <img src={Page1} className='img' ></img>
          
                    </div>

                    <div style={{display:'flex'}} className="border">
                        <div style={{margin:'10px'}}>
                        <h1>קצת עלינו...</h1>
                        <br></br>
                        <h2>jhcgjkkchkzdhkhcxzhckhxk</h2>
                        </div>
                        <img src={Page1} className='img' ></img>
          
                    </div>
                </div>
            </div>
        </>
    )

}