import React from 'react';
import axios from 'axios';
import './MenuCSS.css';
import { useState, useEffect } from 'react';
import { Checkbox } from '@mui/material';



export default function Menu(props) {

    const [Dose, setDose] = useState()

    useEffect(() => {
        axios.get("http://localhost:3030/portion/getPortion").then((res) => {
            if (res.data && res.data.length) {
                setDose(res.data)

            }
        })
    }, [])

    const [Category, setCategory] = useState()


    useEffect(() => {
        axios.get("http://localhost:3030/category/getCategory").then((res) => {
            if (res.data && res.data.length) {
                setCategory(res.data)

            }
        })
    }, [])


    return (
        <>
            <div className=" row " style={{ fontFamily: "'Varela Round', sans-serif" }}>
                <h1 style={{ textAlign: 'center' }}>תפריטים</h1>
                <div className="border col-xl-6 col-sm-10 col-8 PA" style={{ display: "inline-flex" }}>

                    <>
                        {Dose && Dose.length && Dose.map((items) =>
                            <Checkbox key={items}>{items.portionName}</Checkbox>

                        )
                        }

                        {/* {Category && Category.length && Category.map((item) =>
                            console.log(item.categoryName)

                        )
                        } */}
                    </>


                </div>

            </div>
        </>
    )
}
