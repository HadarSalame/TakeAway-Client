
import React, { useState, useEffect } from "react";
import './DisposableCSS.css';
import { Button, InputGroup, FormControl, FloatingLabel, Form, Select, Modal, Table } from 'react-bootstrap';
import axios from "axios";
import { MultiSelect } from "react-multi-select-component";



import RestaurantIcon from '@mui/icons-material/Restaurant';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import CheckIcon from '@mui/icons-material/Check';

import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Radio from '@mui/material/Radio';

import Checkbox from '@mui/material/Checkbox';

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { createFilterOptions } from '@mui/material/Autocomplete';

import BG1 from '../../Images/Logos/Photos/bg.png'
import BG2 from '../../Images/Logos/Photos/circlesBG.jpg'
import BG3 from '../../Images/Logos/Photos/flowersBG.webp'
import BG4 from '../../Images/Logos/Photos/trinagleBG.png'
import CheckBox from "@mui/icons-material/CheckBox";







export default function Disposable(Props) {


    const [Dselected, DsetSelected] = useState([]);

    const colors = [
        { label: "שחור", value: '#000000' },
        { label: "אפור", value: '#555555 ' },
        { label: "כסף", value: '#c1bfb1ed' },
        { label: "לבן", value: '#ffff' },
        { label: "שמנת", value: '#f0d693' },
        { label: "כתום", value: '#e17c05ed' },
        { label: "צהוב", value: '#f7d520' },
        { label: "ירוק בהיר", value: '#59de2ff0' },
        { label: "ירוק כהה", value: '#34d160f0' },
        { label: "טורקיז", value: '#1ed99e' },
        { label: "תכלת", value: '#0a92c6' },
        { label: "כחול", value: '#003594' },
        { label: "כחול כהה", value: '#000556' },
        { label: "כחול-סגול", value: '#4508a7' },
        { label: "סגול", value: '#7002b8' },
        { label: "סגול בהיר", value: '#9a03ab' },
        { label: "ורוד", value: '#f00bc3' },
        { label: "בורדו", value: '#b6034a' },
        { label: "ורוד פוקסיה", value: '#f93f74' },
        { label: "אדום", value: '#e81414' }
    ]

    const customValueRenderer = (selected, _options) => {
        return selected.length
            ? selected.map(({ label }) => ", " + label)
            : "בחר צבע";
    };

    const [countValue, setcountValue] = React.useState(0);
    const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
    const checkedIcon = <CheckBoxIcon fontSize="small" />;

    const BGcolors = [{ id: 1, Img: BG1 }, { id: 2, Img: BG2 }, { id: 3, Img: BG3 }, { id: 4, Img: BG4 }]

    const [show, setShow] = useState(Props.show);
    const handleDClose = () => { setShow(false); Props.setShow() };
    const handleDShow = () => setShow(true);

    //radio buttun
    const [selectedValueCup, setselectedValueCup] = React.useState('a');
    const handleChangeCup = (event) => {
        setselectedValueCup(event.target.value);
    };

    const [selectedValueFlasks, setselectedValueFlasks] = React.useState('a');
    const handleChangeFlasks = (event) => {
        setselectedValueFlasks(event.target.value);
    };

    const [selectedValuePlate, setselectedValuePlate] = React.useState('a');
    const handleChangePlate = (event) => {
        setselectedValuePlate(event.target.value);
    };

    const [selectedValueCutlery, setselectedValueCutlery] = React.useState('a');
    const handleChangeCutlery = (event) => {
        setselectedValueCutlery(event.target.value);
    };

    const [selectedValueNapkin, setselectedValueNapkin] = React.useState('a');
    const handleChangeNapkin = (event) => {
        setselectedValueNapkin(event.target.value);
    };

    const [selectedValueBowl, setselectedValueBowl] = React.useState('a');
    const handleChangeBowl = (event) => {
        setselectedValueBowl(event.target.value);
    };

    function nn(option) {
        console.log(option);

    }
    return (
        <>
            <div className='row ' style={{ fontFamily: "'Varela Round', sans-serif" }}>
                {/* <h1 style={{ textAlign: 'center' }}> ... קצת עלינו</h1> */}
                <div className="border col-xl-6 col-sm-10 col-8">
                    <div>

                        {/* <Button variant="outline" className='btn btnPA' onClick={handleDShow} >סיכום תפריט</Button> */}



                        <Modal show={show} onHide={handleDClose}>
                            <Modal.Header closeButton>
                                <Modal.Title style={{ textAlign: 'center' }}>עדכון פרטים</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>

                                <div>


                                    <Form>
                                        <Form.Group>

                                            <MultiSelect
                                                style={{ direction: 'rtl', height: '38px' }}
                                                options={colors}
                                                value={Dselected}
                                                onChange={DsetSelected}
                                                labelledBy="labal"
                                                valueRenderer={customValueRenderer}


                                            />


                                        </Form.Group>
                                    </Form>
                                </div>
                                <h6 >ניתן לבחור עד 2 צבעים*</h6>




                                {/* בחר צבע מס 1
                                <div style={{ width: "250px" }}>
                                    {values.map((item) => (

                                        <button style={{ backgroundColor: item.color }} className='colorsBtn'></button>

                                    ))}
                                    <DoNotDisturbIcon sx={{ color: 'white' }} style={{ backgroundColor: "black", width: '40px' }} className='colorsBtn'  ></DoNotDisturbIcon>

                                </div> */}
                                <br></br>
                                <br></br>

                                <div>
                                    <Autocomplete
                                        multiple

                                        id="checkboxes-tags-demo"
                                        options={BGcolors}
                                        disableCloseOnSelect
                                        getOptionLabel={(option) => option.id}
                                        renderOption={(props, option, { selected }) => (
                                            <li {...props}>
                                                <Checkbox
                                                    icon={icon}
                                                    checkedIcon={checkedIcon}
                                                    style={{ marginRight: 8, backgroundImage: option.Img }}
                                                    checked={selected.id}
                                                    // src={option.Image} 

                                                    className="colorsBtn"
                                                />

                                                {option.id}
                                            </li>
                                        )}
                                        style={{ width: '470px' }}
                                        renderInput={(params) => (
                                            <TextField {...params} label="בחר צבע" placeholder="" />
                                        )}
                                    />
                                </div>

                                {/* <div style={{ width: "250px" }} >
                                    
                                    {BGcolors.map((item) => (
                                        
                                        <img src={item.Image} className='colorsBtn'></img>
                                    ))}
                               
                                </div> */}
                                <br></br>
                                <br></br>
                                <div>
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th style={{ width: '155px' }}>צבע ב</th>
                                                <th style={{ width: '155px' }}>צבע א</th>
                                                <th style={{ width: '155px' }}> מוצר </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <Radio
                                                        style={{ color: "#f7d520" }}
                                                        checked={selectedValueCup === 'a'}
                                                        onChange={handleChangeCup}
                                                        value="a"
                                                        name="cupClr"
                                                        inputProps={{ 'aria-label': 'a' }}
                                                    />
                                                </td>

                                                <td>
                                                    <Radio
                                                        style={{ color: "#f7d520" }}
                                                        checked={selectedValueCup === 'b'}
                                                        onChange={handleChangeCup}
                                                        value="b"
                                                        name="cupClr"
                                                        inputProps={{ 'aria-label': 'b' }}
                                                    />
                                                </td>
                                                <td className="tbl">
                                                    כוסות
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <Radio
                                                        style={{ color: "#f7d520" }}
                                                        checked={selectedValueFlasks === 'a'}
                                                        onChange={handleChangeFlasks}
                                                        value="a"
                                                        name="FlasksClr"
                                                        inputProps={{ 'aria-label': 'a' }}
                                                    />
                                                </td>

                                                <td>
                                                    <Radio
                                                        style={{ color: "#f7d520" }}
                                                        checked={selectedValueFlasks === 'b'}
                                                        onChange={handleChangeFlasks}
                                                        value="b"
                                                        name="Flasksclr"
                                                        inputProps={{ 'aria-label': 'b' }}
                                                    />
                                                </td>
                                                <td className="tbl">
                                                    צלוחיות
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <Radio
                                                        style={{ color: "#f7d520" }}
                                                        checked={selectedValuePlate === 'a'}
                                                        onChange={handleChangePlate}
                                                        value="a"
                                                        name="PlateClr"
                                                        inputProps={{ 'aria-label': 'a' }}
                                                    />
                                                </td>

                                                <td>
                                                    <Radio
                                                        style={{ color: "#f7d520" }}
                                                        checked={selectedValuePlate === 'b'}
                                                        onChange={handleChangePlate}
                                                        value="b"
                                                        name="Platesclr"
                                                        inputProps={{ 'aria-label': 'b' }}
                                                    />
                                                </td>
                                                <td className="tbl">
                                                    צלחות
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <Radio
                                                        style={{ color: "#f7d520" }}
                                                        checked={selectedValueCutlery === 'a'}
                                                        onChange={handleChangeCutlery}
                                                        value="a"
                                                        name="CutleryClr"
                                                        inputProps={{ 'aria-label': 'a' }}
                                                    />
                                                </td>

                                                <td>
                                                    <Radio
                                                        style={{ color: "#f7d520" }}
                                                        checked={selectedValueCutlery === 'b'}
                                                        onChange={handleChangeCutlery}
                                                        value="b"
                                                        name="Cutlerysclr"
                                                        inputProps={{ 'aria-label': 'b' }}
                                                    />
                                                </td>
                                                <td className="tbl">
                                                    סכום
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <Radio
                                                        style={{ color: "#f7d520" }}
                                                        checked={selectedValueNapkin === 'a'}
                                                        onChange={handleChangeNapkin}
                                                        value="a"
                                                        name="NapkinClr"
                                                        inputProps={{ 'aria-label': 'a' }}
                                                    />
                                                </td>

                                                <td>
                                                    <Radio
                                                        style={{ color: "#f7d520" }}
                                                        checked={selectedValueNapkin === 'b'}
                                                        onChange={handleChangeNapkin}
                                                        value="b"
                                                        name="Napkinclr"
                                                        inputProps={{ 'aria-label': 'b' }}
                                                    />
                                                </td>
                                                <td className="tbl">
                                                    מפיות
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <Radio
                                                        style={{ color: "#f7d520" }}
                                                        checked={selectedValueBowl === 'a'}
                                                        onChange={handleChangeBowl}
                                                        value="a"
                                                        name="BowlClr"
                                                        inputProps={{ 'aria-label': 'a' }}
                                                    />
                                                </td>

                                                <td>
                                                    <Radio
                                                        style={{ color: "#f7d520" }}
                                                        checked={selectedValueBowl === 'b'}
                                                        onChange={handleChangeBowl}
                                                        value="b"
                                                        name="Bowlclr"
                                                        inputProps={{ 'aria-label': 'b' }}
                                                    />
                                                </td>
                                                <td className="tbl">
                                                    קערות ומגשים
                                                </td>
                                            </tr>

                                        </tbody>
                                    </Table>
                                </div>


                            </Modal.Body>

                            <Modal.Footer>

                                <Button variant="secondary" className='btn' onClick={handleDClose}>
                                    ביטול
                                </Button>
                                <Button variant="primary" className='btn' onClick={handleDClose}>
                                    הוסף להזמנה
                                </Button>
                            </Modal.Footer>
                        </Modal>


                    </div>



                </div>
            </div>
        </>
    )
}