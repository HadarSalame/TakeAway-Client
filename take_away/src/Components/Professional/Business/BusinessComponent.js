import React from "react";
import './BusinessCSS.css';
import Big_Bite from '../../../Images/Logos/Big_Bite.jpg'
import Timin from '../../../Images/Logos/Timin.jpg'
export default function BusinessPage(props) {

    return (
        <>
            <div className='border col-xl-6 col-sm-10 col-8'>
                <h1>העסקים שלנו</h1><br></br>
                <div className="B_logos">
                    <div >
                        <img src={Big_Bite} className='Logos'></img>
                        <h3>Big Bite</h3>
                    </div>
                    <div>
                        <img src={Timin} className='Logos'></img>
                        <h3>Timin</h3>

                    </div>
                </div>
            </div>
        </>
    )
}