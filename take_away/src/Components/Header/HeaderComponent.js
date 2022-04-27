import React from 'react';
import { Navbar, Container, Nav,NavDropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import './HeaderCss.css'
import Logo from '../../Images/Logos/Logo.jpg'



export default function Header(props) {

  let navigate = useNavigate();
  function gotoIndex() {
    
    navigate("/Index")
}

function gotoMenu(){
  //to add menu page
navigate('/Menu')
}

function gotoInfoPage(){
  //to add infopage
  navigate('/InfoPage')
}

function gotoUserLogin(){
  navigate('/Login')
}

function gotoProfessionalLogin(){
  navigate('/ProfessionalLogin')
}

function gotoUserSignUp(){
  navigate('/SignUp')
}

function gotoProfessionalSignUp(){
  navigate('/ProfessionalSignUp')
}

function gotoPrivateArae(){
  
  navigate('/PAComponent')
}

function gotoBusinessPage(){
  navigate('/BusinessPage')
}
  return (
    <>
      <br />
      <br /><br />
      {/* <img src={Logo} className='Logo'></img> */}
      <div className="headerCss row">
      

        <Navbar bg="#e9ab01" variant="dark" >
          <Container >
            <div style={{ 'direction': 'rtl' }}>
              <Nav className="me-auto" >

                <Nav.Link onClick={gotoIndex}>בית</Nav.Link>
                <Nav.Link onClick={gotoPrivateArae}>אזור אישי</Nav.Link>
                <Nav.Link onClick={gotoMenu}>תפריטים</Nav.Link>
                <Nav.Link onClick={gotoBusinessPage}>בתי עסק</Nav.Link>
                <Nav.Link  onClick={gotoInfoPage}>עלינו</Nav.Link>
                <NavDropdown title="הרשמה" id="navbarScrollingDropdownSignUp">
                  <NavDropdown.Item onClick={gotoUserSignUp} >הרשמה למשתמש</NavDropdown.Item>
                  <NavDropdown.Item onClick={gotoProfessionalSignUp}>הרשמה לבעל עסק</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="התחברות" id="navbarScrollingDropdownLogin">
                  <NavDropdown.Item onClick={gotoUserLogin} >התחברות למשתמש</NavDropdown.Item>
                  <NavDropdown.Item onClick={gotoProfessionalLogin}>התחברות לבעל עסק</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </div>
          </Container>
        </Navbar>
      </div>
      <br />
      {/* <Button variant="outline-warning" className='button'>Warning</Button>{' '}
      <Button variant="outline-danger">Danger</Button>{' '} */}
    </>
  )


}
