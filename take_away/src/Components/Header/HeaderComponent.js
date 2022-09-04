import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import './HeaderCss.css'
import Logo from '../../Images/Logos/Logo.jpg'
import axios from "axios";




export default function Header(props) {

  let navigate = useNavigate();
  function gotoIndex() {

    navigate("/Index")
  }

  function gotoMenu() {
    //to add menu page
    navigate('/Menu')
  }

  function gotoInfoPage() {

    navigate('/InfoPage')
  }

  function gotoUserLogin() {
    navigate('/Login')
  }

  function gotoProfessionalLogin() {
    navigate('/ProfessionalLogin')
  }

  function gotoUserSignUp() {
    navigate('/SignUp')
  }

  function gotoProfessionalSignUp() {
    navigate('/ProfessionalSignUp')
  }

  function gotoPrivateArae() {

    navigate('/PAComponent')
  }

  function gotoProPrivateArae() {

    navigate('/PPAComponent')
  }

  function gotoBusinessPage() {
    navigate('/BusinessPage')
  }
  //לא לשכוח למחוקקקקקק
  function gototryPage() {
    navigate('/tryPage')
  }
  return (
    <>


      <div className=" row" style={{ fontFamily: "'Varela Round', sans-serif" }}>
        <div className='col-xl-12 col-sm-10 col-8'>
          <div style={{display:'inline-flex',marginLeft:'3%',width:'3%'}}>
            <NavDropdown title="התחברות" id="navbarScrollingDropdownLogin" className='log btn'>
              <NavDropdown.Item onClick={gotoUserLogin} >התחברות למשתמש</NavDropdown.Item>
              <NavDropdown.Item onClick={gotoProfessionalLogin}>התחברות לבעל עסק</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="הרשמה" id="navbarScrollingDropdownSignUp" className='log btn '>
              <NavDropdown.Item onClick={gotoUserSignUp} >הרשמה למשתמש</NavDropdown.Item>
              <NavDropdown.Item onClick={gotoProfessionalSignUp}>הרשמה לבעל עסק</NavDropdown.Item>
            </NavDropdown>
          </div>
          <div>
            <img src={Logo} className='Logo ' onClick={gotoIndex}></img>
          </div>
          <Navbar bg="#e9ab01" variant="dark" className='headerCss' >
            <Container >

              <div style={{ marginRight: "10%" }}>
                <Nav className="me-auto " >
                  {/* <Nav.Link onClick={gototryPage} className='opt'>ניסיונות</Nav.Link> */}

                  <Nav.Link onClick={gotoPrivateArae} className='opt'> אזור אישי ללקוחות</Nav.Link>
                  <Nav.Link onClick={gotoProPrivateArae} className='opt' style={{ width: '185px' }}> אזור אישי לעסקים</Nav.Link>

                  <Nav.Link onClick={gotoMenu} className='opt'>הזמן אירוע</Nav.Link>
                  <Nav.Link onClick={gotoBusinessPage} className='opt' > הזמנות לתמחור בתי עסק</Nav.Link>
                  <Nav.Link onClick={gotoInfoPage} className='opt'>עלינו</Nav.Link>

                  <i className="material-icons">&#xe8b6;</i>


                </Nav>
              </div>
            </Container>
          </Navbar>
        </div>
      </div>
      <br />
      {/* <Button variant="outline-warning" className='button'>Warning</Button>{' '}
      <Button variant="outline-danger">Danger</Button>{' '} */}
    </>
  )


}
