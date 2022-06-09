import React, { useState } from 'react';
import './ProfessionalPACSS.css'
import { Button, InputGroup, FormControl, FloatingLabel, Form, Select } from 'react-bootstrap';
import { BrowserRouter, Link, Route, Routes, Accordion, Card } from 'react-router-dom'
import ForgetPass from '../../ForgetPassWord/ForgetPassComponent';
import { useNavigate } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';




import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function ProfessionalPA() {
    let navigate = useNavigate();
    function Chat() {
  
      navigate("/Chat")
    }
    
     const [value, onChange] = useState(new Date());

    const [valueTab, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    return (
        <>
            <div className='row border col-xl-6 col-sm-10 col-8' style={{fontFamily:"'Varela Round', sans-serif"}}>
                <div>
                    {/* <Calendar onChange={onChange} value={value} className='calender' /> */}
                    <Button>עדכון פרטי העסק</Button>
                    <br />
                    <Button>עדכון התפריט</Button>
                    <br />

                   

                    <Box style={{ width: '100%', bgcolor: 'background.paper',color:'black' }} >
                        <Tabs value={valueTab} onChange={handleChange} className="tabs" centered>
                            <Tab label="נשלח" className="tab" onClick={Chat}></Tab>
                            <Tab label="התקבל"  className="tab" />
                            <Tab label="הצעות סגורות" className="tab" />
                        </Tabs>
                    </Box>





                    <div className='schaduller '>
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


function Chat(props){

    return(
        <>
         <List sx={{ width: '100%', maxWidth: 360, borderColor: 'black', borderWidth: '15px' }}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Brunch this weekend?"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            Ali Connors
                                        </Typography>
                                        {" — I'll be in your neighborhood doing errands this…"}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Summer BBQ"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            to Scott, Alex, Jennifer
                                        </Typography>
                                        {" — Wish I could come, but I'm out of town this…"}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Oui Oui"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            Sandra Adams
                                        </Typography>
                                        {' — Do you have Paris recommendations? Have you ever…'}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    </List>
        </>
    )
}


