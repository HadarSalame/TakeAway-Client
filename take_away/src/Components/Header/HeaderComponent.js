import React from 'react';
import { Navbar, Container, Nav,NavDropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import './HeaderCss.css'


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
  return (
    <>
      <br />
      <br /><br />
      <div className="headerCss row">
        <Navbar bg="#e9ab01" variant="dark" >
          <Container >
            <div style={{ 'direction': 'rtl' }}>
              <Nav className="me-auto" >

                <Nav.Link href="#home" >בית</Nav.Link>
                <Nav.Link href="#privateArea" >אזור אישי</Nav.Link>
                <Nav.Link href="#Menus" >תפריטים</Nav.Link>
                <Nav.Link href="#businesses">בתי עסק</Nav.Link>
                <Nav.Link href="#aboutUs">עלינו</Nav.Link>
                <NavDropdown title="הרשמה" id="navbarScrollingDropdownSignUp">
                  <NavDropdown.Item href="#UserSignUp" >הרשמה למשתמש</NavDropdown.Item>
                  <NavDropdown.Item href="#ProfessionalSignUp">הרשמה לבעל עסק</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="התחברות" id="navbarScrollingDropdownLogin">
                  <NavDropdown.Item href="#UserLogin" >התחברות למשתמש</NavDropdown.Item>
                  <NavDropdown.Item href="#ProfessionalLogin">התחברות לבעל עסק</NavDropdown.Item>
                </NavDropdown>


{/* onClick={gotoIndex}
onClick={gotoMenu}
 onClick={gotoInfoPage}
onClick={gotoUserSignUp}
onClick={gotoProfessionalSignUp}
onClick={gotoPrivateArae} */}

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
