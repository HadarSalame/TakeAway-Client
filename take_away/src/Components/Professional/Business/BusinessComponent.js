import React from "react";
import './BusinessCSS.css';
import Big_Bite from '../../../Images/Logos/Big_Bite.jpg'
import Timin from '../../../Images/Logos/Timin.jpg'
import Cook from '../../../Images/Logos/Cook.jpeg'
import axios from "axios";

export default function BusinessPage(props) {

    const ListB=[{BID:1,Bname:"Cook",kosher:"בית יוסף",tel:"034587898",Blogo:Cook},
    {BID:2,Bname:"Timin",kosher:"בית יוסף",tel:"034587838",Blogo:Timin}]
 
    return (
        <>
            <div className="row" style={{fontFamily:"'Varela Round', sans-serif"}}>
                <h1  style={{ textAlign: 'center' }}>העסקים שלנו</h1>
                <div className='border col-xl-6 col-sm-10 col-8' style={{ width:'fit-content'}}>
                    <br></br>
                  
                        
                        {ListB.map((item)=>{
                        //   <img src={item.Blogo} style={{backgroundImage:item.Blogo}}></img>
                        <h2>{item.BID}</h2>
                      
                        })}


                        {/* <div className="border B_border">
                            <img src={Big_Bite} className='Logos'></img>
                            <h2>Big Bite</h2>
                        </div>
                        <div className="border B_border">
                            <img src={Timin} className='Logos'></img>
                            <h2>Timin</h2>

                        </div>
                        <div className="border B_border">
                            <img src={Cook} className='Logos'></img>
                            <h2>Cook</h2> */}

                        {/* </div> */}
                    
                </div>
            </div>
        </>
    )
}