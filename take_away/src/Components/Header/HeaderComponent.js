import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'

import './HeaderCss.css'


export default function Header(props) {

  return (
    <>
      <br />
      <br /><br />
      <div className="headerCss">
        <Navbar bg="#e9ab01" variant="dark" >
          <Container >
            <div style={{ 'direction': 'rtl' }}>
              <Nav className="me-auto" >
                <Nav.Link href="#home">בית</Nav.Link>
                <Nav.Link href="#aboutUs">עלינו</Nav.Link>
                <Nav.Link href="#signIn">הרשמה</Nav.Link>
                <Nav.Link href="#logIn">התחברות</Nav.Link>
                <Nav.Link href="#privateArea">אזור אישי</Nav.Link>
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
