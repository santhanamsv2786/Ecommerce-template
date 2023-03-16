import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import img1 from './../pagess/images/logo.png'; 
import search from './images/search.png';
import cart from './images/scart.png';
import img2 from './images/hero-banner.png';
import { Col, Row } from 'react-bootstrap';
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Cartpage from './Cartpage';
import Productdes from './Productdes';
 


function Navibar() {
  const navigate = useNavigate();

  const list = useSelector((state) => state.cart.product);
  return (
    <><Navbar  fixed='top' className='navi ' bg="white" expand="lg" >
    <Container className='togi'>
      <Navbar.Brand href="#"><img className=' ms-5 img1' src={img1} alt='img1' /></Navbar.Brand>
      <Navbar.Toggle  aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="my-2 my-lg-0  lynk"
          style={{ maxHeight: '190px' }}
          navbarScroll
        >
          <Nav.Link href="/" className='lef1 lefs'>Home</Nav.Link>
          <div class="dropdown">
            <Nav.Link href="#action1" className='lefs'>Shop</Nav.Link>
            <div class="dropdown-content">
              <Link to={"Shop"} className='border-bottom'>Shop Category</Link>
              <Link to={`Productdes`}>Product Details</Link>
              <Link to={`Cartpage`}>Shopping Cart</Link>
              {/* <a href="cartpage" className='border-bottom'>Shopping Cart</a> */}
              <a href="#" className='border-bottom'>Product Checkout</a>
              <a href="#" className='border-bottom'>Confirmation</a>
              {/* <a href="#">Shopping Cart</a> */}
            </div>
          </div>
          <div class="dropdown">
            <Nav.Link href="tracking" className='lefs'>Tracking</Nav.Link>
            {/* <div class="dropdown-content">
              <a href="#" className='border-bottom'>Blog</a>
              <a href="#">Blog Details</a>
            </div> */}
          </div>
          <div class="dropdown">
            <Nav.Link href="#action2" className='lefs'>Pages</Nav.Link>
            <div class="dropdown-content">
              <a href="login" className='border-bottom'>Login</a>
              <a href="register" className='border-bottom ti-shopping-cart'>Register</a>
              {/* <a href="tracking">Tracking</a> */}
            </div>
          </div>
          <Nav.Link href="contact" className='lefs'>Contact</Nav.Link>
        </Nav>
        <Row>

        </Row>
        <Nav className='scb'>
          <img className='srh' src={search} alt='search' type='button'></img>
        </Nav>
        {/* <Nav className='cart'>  
          <img className='ms-3 cart' src={cart} alt='cart' type='button'></img>
        </Nav> */}
        <Link to={'cartpage'} className='m-0 p-0 '>
            <div className="ci">
            <img src={cart} type= 'button' alt='cart' className="si"/> 
            {list.length === 0 ? (<></>):(<div className="notify">{list.length}</div>)}
            </div>
        </Link>
        <Nav>
          {/* <a href='#' type='button' className='buy mb-1'>Buy Now</a> */}
        </Nav>

      </Navbar.Collapse>
    </Container>
  </Navbar></>

);
}

export default Navibar;