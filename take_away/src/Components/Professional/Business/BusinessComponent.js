import React from "react";
import './BusinessCSS.css';
import Big_Bite from '../../../Images/Logos/Big_Bite.jpg'
import Timin from '../../../Images/Logos/Timin.jpg'
import Cook from '../../../Images/Logos/Cook.jpeg'
export default function BusinessPage(props) {

    return (
        <>
            <div className="row">
                <h1  style={{ textAlign: 'center' }}>העסקים שלנו</h1>
                <div className='border col-xl-6 col-sm-10 col-8' style={{ width:'fit-content'}}>
                    <br></br>
                    <div className="B_logos">
                        <div className="border B_border">
                            <img src={Big_Bite} className='Logos'></img>
                            <h2>Big Bite</h2>
                        </div>
                        <div className="border B_border">
                            <img src={Timin} className='Logos'></img>
                            <h2>Timin</h2>

                        </div>
                        <div className="border B_border">
                            <img src={Cook} className='Logos'></img>
                            <h2>Cook</h2>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}