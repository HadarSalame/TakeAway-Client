import React from 'react';
import './PrivateAreaCSS.css'
import { Button, InputGroup, FormControl, FloatingLabel, Form, Nav } from 'react-bootstrap';

export default function PAComponent(props) {
    return (
        <>
            <div className='row'>
                <h1>אזור אישי</h1>
                <div className="border col-xl-6 col-sm-10 col-8 PA">
                    {/* כפתורים:
1. עדכון פרטים אישים
 2. עדכון התפריט שמכיל הוספה והסרה מהתפריט
 3. הצעות שהתקבלו שכולל כפתורים של השוואה בין ההצעות ואפשרות להזמין את ההצעות
  4ץדואר נכנס      */}
                    <div className='menu'>
                       
                        <div  >
                            <Button variant="outline" className='btn'>הסרה מהתפריט</Button>
                            <Button variant="outline" className='btn'>שלח הצעה</Button>
                            {/* יפתח חלון ויהיה ניתן לבחור בו למי לשלוח את ההצעה */}
                        </div>
                    </div>
                    <div className='option'>

                        <Button variant="outline" className='btn' >עדכון פרטים אישיים</Button>
                        <div>


                            {/* <Button>הצעות שהתקבלו</Button>
                        <Button>הזמנות</Button>
                        <Button>הצעות שנשלחו</Button> */}
                            {/* <Nav variant='tabs' defaultActiveKey='#' className='nav nav-tabs' >
                                <Nav.Item>
                                    <Nav.Link eventKey='get' href='#' >הזמנות שהתקבלו</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='out' href='#'>הזמנות שנשלחו</Nav.Link>
                                </Nav.Item>
                            </Nav> */}



                            <Nav variant="tabs"  className='navs1'>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-1" className='navs'>הצעות שנשלחו</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="get" className='navs'>הצעות שהתקבלו</Nav.Link>
                                </Nav.Item>
                                
                            </Nav>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}