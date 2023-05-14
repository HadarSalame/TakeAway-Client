import React, { useState } from 'react';
import './InfopageCss.css'
import axios from "axios";



export default function Infopage() {
    
    return (
        <>
             <div className=" row " style={{ fontFamily: "'Varela Round', sans-serif" }}>
                <h1 style={{ textAlign: 'center',direction:'rtl' }}>קצת עלינו...</h1>
                <div className="border col-xl-6 col-sm-10 col-8 PA" style={{ display: "inline-flex", flexDirection: "column" }}>
                    <div style={{textAlign:'center',direction:"rtl"}}>
                        <h4>Take Away - היא בעצם פלטפורמה המחברת בין בעלי קייטרינג לבין בעלי האירועים בקלות ובחינם. </h4>
                        <br></br>
                        <h4>לבעלי האירוע - ניתן  להשתמש בשרותי האתר לאחר התחברות או הרשמה. בעל האירוע יכול ליצור את התפריט הרצוי לו ולמלא פרטים נוספים כגון כמות המוזמנים והתאריך, ולאחר שליחת ההזמנה היא תעלה באופן דינמי לאתר ושם בעלי עסקים יוכלו לתת עליה הצעות מחיר.
                            בדף הבית יוכל בעל האירוע לראות את הזמנות שלו וההצעות שנשלחו להזמנות שהעלה כמו כן הוא יוכל לסנן את ההצעות , לקבל עדכון על ההצעה המשתלמת ביותר ואף לסגור את ההצעה שבה בחר.
                        </h4>
                        <br></br>
                        <h4>
לבעלי עסקים - ניתן יהיה להשתמש בשירותי האתר לאחר הרשמה או התחברות.
בעל העסק יוכל לראות הזמנות שלקוחות העלו לאתר ולתמחר אותם איך שהוא רוצה אך בעל עסק לא יוכל לתמחר הצעה יותר מפעם אחת.
באיזור האישי יוכל בעל העסק לראות את ההצעות שנסגרו וגם את פרטי ההזמנות וכמו כן גם יוכל לבטל הצעה שעדין לא נסגרה
                        </h4>
                    </div>
                   
                </div>
                  
             </div>
        </>
    )
}

// import * as React from 'react';
// import Stack from '@mui/material/Stack';
// import TextField from '@mui/material/TextField';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { TimePicker } from '@mui/x-date-pickers/TimePicker';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
// import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

// export default function MaterialUIPickers() {
//   const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

//   const handleChange = (newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
      
//         <DesktopDatePicker
//           label="Date desktop"
//         //   inputFormat="MM/dd/yyyy"
//           value={value}
//           onChange={handleChange}
//           renderInput={(params) => <TextField {...params} />}
//         />
//         {/* <MobileDatePicker
//           label="Date mobile"
//           inputFormat="MM/dd/yyyy"
//           value={value}
//           onChange={handleChange}
//           renderInput={(params) => <TextField {...params} />}
//         />
//         <TimePicker
//           label="Time"
//           value={value}
//           onChange={handleChange}
//           renderInput={(params) => <TextField {...params} />}
//         />
//         <DateTimePicker
//           label="Date&Time picker"
//           value={value}
//           onChange={handleChange}
//           renderInput={(params) => <TextField {...params} />}
//         /> */}
//     </LocalizationProvider>
//   );
// }
