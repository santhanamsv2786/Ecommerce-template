import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import img1 from './../pagess/images/logo.png'; 
import search from './images/search.png';
import cart from './images/scart.png';
import img2 from './images/hero-banner.png';
import img3 from './images/home/hero-slide1.png';
import img4 from './images/home/hero-slide2.png';
import img5 from './images/home/hero-slide3.png';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
 


function Mainpage() {

  const pros = useSelector(state => state.Pros)

  const[mail,setMail] = useState("");
  const[merror,setMerror] = useState("");

  const handleSubmit =(e)=>{
    e.preventdefault();
    let c1=false
    console.log('ok')
    let k = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(mail=="") {
            setMerror("Please enter your email id");
        }
        else if (!k.test(mail)) {
            setMerror("Please enter valid email");
        }
        else{
            setMerror("");
            c1="true";
        }
        if((c1=="true")){
          alert("your form is submitted")
         } 
  }
  



  return (
    <> 
    <div>
      <Row className='section'>
        <Col xs={2} xxl={4} className='sec1'>
          <Col className='sce'>
            <img className='img2' src={img2} alt='img2' />
          </Col>
        
        </Col>
        <Col  className='sec2 '>
          <Col className='sce1'>
            <Row sm={2}>
              <h2 className='mt-2 ms-5 fw-light'>Shop is Fun</h2>
            </Row><br></br>
            <Row>
              <h1 className='ms-5 fw-bolder'>BROWSE OUR <br></br> PREMIUM PRODUCT</h1>
            </Row>
            <Row>
              <p className='ms-5 mt-3'>Us which over of signs divide dominion deep fill bring they're meat beho upon own earth without morning over third. Their male dry. They are great appear whose land fly grass.</p>
            </Row>
            
              <div className='box ms-5 mt-5 '>
                <p className='ms-5 mt-2'>Browse Now</p>
              </div>

          </Col>
        </Col>
    </Row>
    </div>
    <div className='shoe'>
      <Row xs={1} xxl={3} className='head1'>
        <Col >
        <img className='headph'src={img3} alt='shoe'></img>
        </Col>
        <Col className='d-none d-sm-block'>
        <img className='headph' src={img4} alt='headphone'></img>
        </Col>
        <Col className='d-none d-sm-block'>
        <img className='headph' src={img5} alt='box'></img>
        </Col>
      </Row>
    </div>
    <div  className='trending'>
          <div className='product'>
              <Row>
                <h6 className='mt-2'>Popular items in the cart</h6>
                <h2 className='mb-5'>Trending <span className='border-bottom border-primary'> Products</span></h2>
              </Row>
              <Row xs={1} xl={4}>
                  {pros.map(Pro =>(
                    <Col key={Pro.id}>
                      <div>
                        <Link to={`pd/${Pro.id}`}><img src={Pro.image} className='col-12'></img></Link>
                      </div>
                      <div>
                      <h6>{Pro.category}</h6>
                      <h4>{Pro.name}</h4>
                      <h5>${Pro.price}</h5>
                      </div>
                    </Col>
                  ))}
                
              </Row>
            
          </div>
      </div>
      <div  className='troley'>
          <Container className='offer'>
              <Row className='text-center vh-100'>
                <Col xl={5}>
                  <div className='offer1'>
                    <h1>Up to 50% Off</h1>
                    <h3 className='mt-4'>Winter Sale</h3>
                    <p>Him she'd let them sixth saw light</p>
                    {/* <a class="button button--active mt-3 mt-xl-4" href="#">Shop Now</a> <br></br> */}
                    <a href='#' type='button' className='shop pe-5 ps-5 pt-3 pb-3 mb-1'>Shop Now</a>
                  </div>
                </Col>
                
              </Row>
          </Container>
      </div>
      <div className='update'>
        <Container className='update1 col-9 position-relative '>
            <div className='letter text-center'>
                    <h2 className='fw-bolder'>GET UPDATE FROM ANYWHERE</h2>
                    <p className='parf'>Bearing Void gathering light light his eavening unto dont afraid</p>
                  
                    <form onSubmit={handleSubmit}>
                    <input className='w-50' type="text" placeholder="Enter Email" onChange={(e)=>{setMail(e.target.value)}}></input>
                    {merror && <label>{merror}</label>}
                    <button className="cli mt-4 ms-2 col-xs-4">Subscribe Now</button>

                    </form>
              
                    
                    
            </div>
        </Container>

      </div>
    </>

  );
}

export default Mainpage;
{/* <img className='ms-5' src={img1} alt='img1' /> */}


{/* <Navbar className='navi' bg="white" expand="lg">
      <Container>
        <Navbar.Brand href="#"><img className='ms-5' src={img1} alt='img1' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="my-2 my-lg-0  lynk"
            style={{ maxHeight: '190px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='lef1 lefs'>Home</Nav.Link>
            <div class="dropdown">
            <Nav.Link href="#action1" className='lefs'>Shop</Nav.Link>
              <div class="dropdown-content">
                <a href="#" className='border-bottom'>Shop Category</a>
                <a href="#" className='border-bottom'>Product Details</a>
                <a href="#" className='border-bottom'>Product Checkout</a>
                <a href="#" className='border-bottom'>Confirmation</a>
                <a href="#">Shopping Cart</a>
              </div>
            </div>
            <div class="dropdown">
            <Nav.Link href="#action1" className='lefs'>Blog</Nav.Link>
            <div class="dropdown-content">
              <a href="#" className='border-bottom'>Blog</a>
              <a href="#">Blog Details</a>
            </div>
            </div>
            <div class="dropdown">
            <Nav.Link href="#action2" className='lefs'>Pages</Nav.Link>
            <div class="dropdown-content">
              <a href="#" className='border-bottom'>Login</a>
              <a href="#" className='border-bottom ti-shopping-cart'>Register</a>
              <a href="#">Tracking</a>
            </div>
            </div>
            <Nav.Link href="#action1" className='lefs'>Contact</Nav.Link>
          </Nav>
          <Nav className='scb'>
            <img src={search} type= 'button'></img>
            <img className='ms-3 cart' src={cart} type= 'button'></img>
          </Nav>
          <Nav>
          <a href='#' type='button' className='buy mb-1'>Buy Now</a>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar> */}