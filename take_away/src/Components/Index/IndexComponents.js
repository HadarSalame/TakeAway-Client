import React from "react";
import './IndexCSS.css'
import { Button, InputGroup, FormControl, FloatingLabel, Form, Select } from 'react-bootstrap';
import Page1 from '../../Images/Logos/Photos/Page1.jpg'
import stake1 from '../../Images/Logos/stake1.jpg'
import Page2 from '../../Images/Logos/Photos/Page2.jpg'
import Page3 from '../../Images/Logos/Photos/Page3.jpg'
import { useNavigate } from 'react-router-dom';
import axios from "axios";



export default function Index(props) {

  let navigate = useNavigate();

    function gotoMenu() {
        //to add menu page
        navigate('/Menu')
      }
    return (
        <>
            <div style={{fontFamily:"'Varela Round', sans-serif"}}>
                <div className="row col-xl-12 col-sm-10 col-xs-6" >



                    <div>

                        <Button className="btn st" onClick={gotoMenu}>לתפריט</Button>

                        <img src={Page2} className='opens '></img>
                    </div>


                    <div>

                        <Button className="btn st" style={{ top: "1060px" }} >לתפריט</Button>

                        <img src={stake1} className='opens '></img>
                    </div>


                    <div>

                        <Button className="btn st" style={{ top: "1580px" }} >עלינו</Button>

                        <img src={Page3} className='opens '></img>
                    </div>



                </div>
            </div>
       

        </>
    )

}