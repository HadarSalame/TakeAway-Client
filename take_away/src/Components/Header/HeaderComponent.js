import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import './HeaderCss.css'
import Logo from '../../Images/Logos/Logo.jpg'



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


      <div className=" row">
        <div className='col-xl-12 col-sm-10 col-8'>
          <div>
            <img src={Logo} className='Logo ' onClick={gotoIndex}></img>
          </div>
          <Navbar bg="#e9ab01" variant="dark" className='headerCss' >
            <Container >

              <div style={{ marginRight: "10%" }}>
                <Nav className="me-auto " >
                <Nav.Link onClick={gototryPage} className='opt'>ניסיונות</Nav.Link>

                  <Nav.Link onClick={gotoPrivateArae} className='opt'>אזור אישי</Nav.Link>
                  <Nav.Link onClick={gotoProPrivateArae} className='opt'> אזור אישי לעסקים</Nav.Link>

                  <Nav.Link onClick={gotoMenu} className='opt'>תפריטים</Nav.Link>
                  <Nav.Link onClick={gotoBusinessPage} className='opt'>בתי עסק</Nav.Link>
                  <Nav.Link onClick={gotoInfoPage} className='opt'>עלינו</Nav.Link>
                  <NavDropdown title="הרשמה" id="navbarScrollingDropdownSignUp" className='opt'>
                    <NavDropdown.Item onClick={gotoUserSignUp} >הרשמה למשתמש</NavDropdown.Item>
                    <NavDropdown.Item onClick={gotoProfessionalSignUp}>הרשמה לבעל עסק</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="התחברות" id="navbarScrollingDropdownLogin" className='opt'>
                    <NavDropdown.Item onClick={gotoUserLogin} >התחברות למשתמש</NavDropdown.Item>
                    <NavDropdown.Item onClick={gotoProfessionalLogin}>התחברות לבעל עסק</NavDropdown.Item>
                  </NavDropdown>
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
