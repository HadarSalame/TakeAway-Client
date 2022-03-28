import React from 'react';
import './PrivateAreaCSS.css'
import { Button, InputGroup, FormControl, FloatingLabel, Form } from 'react-bootstrap';

export default  function PAComponent(props){
    return(
        <>
        <div className='row'>
            <h1>אזור אישי</h1>
            <div className="border col-xl-6 col-sm-10 col-8">
{/* כפתורים:
1. עדכון פרטים אישים
 2. עדכון התפריט שמכיל הוספה והסרה מהתפריט
 3. הצעות שהתקבלו שכולל כפתורים של השוואה בין ההצעות ואפשרות להזמין את ההצעות
  4ץדואר נכנס      */}
<div>
    <h3>התפריט שלי</h3>
<br></br>
    <div>
        <h3>מנה ראשונה</h3>
        <h3>מנה שניה</h3>
        <h3>מנה שלשית</h3>
        <h3>אפשרויות</h3>

    </div>
    <div>
        <Button>הסרה מהתפריט</Button>
        <Button>שלח הצעה</Button>
        {/* יפתח חלון ויהיה ניתן לבחור בו למי לשלוח את ההצעה */}
    </div>
</div>
<div>

<Button>עדכון פרטים אישיים</Button>
<Button>הצעות שהתקבלו</Button>
<Button>הזמנות</Button>
<Button>הצעות שנשלחו</Button>



</div>

            </div>
        </div>
        </>
    )
}