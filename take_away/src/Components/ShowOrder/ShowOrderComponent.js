import React, { useEffect, useRef } from 'react';
import axios from "axios";
import { useState } from 'react';
import { Modal, Button, Form, FloatingLabel } from "react-bootstrap";
import "./ShowOrderCSS.css";
import { connect } from 'react-redux';
import { addToOrder } from '../../Redux/Actions/actions'
import { ItemGroup } from 'semantic-ui-react';

//לא עובד
//.1 פונקצית CreateBid לא עובדת- בעיות המרה

function mapStateToProps(state) {
  return {
    bus: state.Professional.B
  }
}

export default connect(mapStateToProps)(function Order(Props) {
  const { show, setShow } = Props
  const { bus, dispatch } = Props


  //מערך דוגמה


  const [order, setOrder] = useState()
  useEffect(() => {
    console.log(Props.orderId);
    axios.get(`http://localhost:3030/order/getOrder/${Props.orderId}`).then((res) => {
      if (res.data) {
        console.log("logg"+res.data)
        setOrder(res.data)

      }
    })
  }, [])

  // const [show, setShow] = useState(Props);
  const handleOrderClose = () => { setShow(false); };
  const handleOrderShow = () => setShow(true);


  //הזמנה סגורה שנשלחת
  return (
    <>


      <div>
        <Modal show={show} onHide={handleOrderShow}>
          <Modal.Header>
            <Modal.Title style={{ direction: 'rtl' }}> פירוט ההזמנה</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {order ?
              <div style={{ direction: 'rtl' }}>

                
                <p>מיקום:{" "+order.eventAddress}</p>
                <p>כמות מוזמנים:{" "+order.numInvited}</p>
                <br></br>
                <h4 className='tit'>תפריט</h4>
                {order.portion !== null ? order.portion.map(item => <>
                  <div>
                    <p > {item['portionName']}</p>
                  </div>
                </>
                )
                  : ''}
                <br></br>

                {/* <h5>{order != undefined ? order.eventDate : ''}</h5> */}

              </div> : <></>}
          </Modal.Body>
          <Modal.Footer style={{ marginLeft: '5%', display: 'flex', flexWrap: 'nowrap' }}>

            <Button variant="secondary" className='btn' onClick={handleOrderClose}>
              ביטול
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  )
})

