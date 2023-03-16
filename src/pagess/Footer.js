import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import g1 from '../pagess/images/gallery/r1.jpg';
import g2 from '../pagess/images/gallery/r2.jpg';
import g3 from '../pagess/images/gallery/r3.jpg';
import g4 from '../pagess/images/gallery/r5.jpg';
import g5 from '../pagess/images/gallery/r7.jpg';
import g6 from '../pagess/images/gallery/r8.jpg';
import { FaLocationArrow } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { AiTwotoneMail } from 'react-icons/ai';




function Footer() {
  return (
    <><div className='footer'>
    <Container className='cont col-9'>
        <Row xl={4} xs={1}> 
         <Col>
         <h3 className='fw-bolder heading5'>OUR MISSION</h3>
         <p className='parf mt-4'>So seed seed green that winged cattle in. Gathering thing made fly you're no divided deep moved us lan Gathering thing us land years living.</p>
         <p className='parf mt-4'>So seed seed green that winged cattle in. Gathering thing made fly you're no divided</p>
         </Col>
         <Col cl>
         <h4 className='fw-bolder heading5 ms-xs-5 ms-xl-5 '>Quick Links</h4>
         <ul className='parf mt-3 ps-0 ms-xs-5 ms-xl-5' >
             <li>
               <a className='parf  pb-1'href='#'>Home</a>
             </li>
             <li>
               <a className='parf pb-1' href='#'>Shop</a>
             </li>
             <li>
               <a className='parf pb-1' href='#'>Blog</a>
             </li>
             <li>
               <a className='parf pb-1' href='#'>Pages</a>
             </li>
             <li>
               <a className='parf pb-1' href='#'>Contact</a>
             </li>
             
         </ul>
         </Col>
         <Col >
         <h4 className='fw-bolder heading5'>Gallery</h4>
         <ul className='gal mt-5 d-flex flex-wrap'>
           <li className='me-3 mb-3'>
             <img src={g1} alt='g1'></img>
           </li>
           <li className='me-3 mb-3'>
             <img src={g2} alt='g1'></img>
           </li>
           <li className='me-3 mb-3'>
             <img src={g3} alt='g1'></img>
           </li>
           <li className='me-3 mb-3'>
             <img src={g4} alt='g1'></img>
           </li>
           <li className='me-3 mb-3'>
             <img src={g5} alt='g1'></img>
           </li>
           <li className='me-3 mb-3'>
             <img src={g6} alt='g1'></img>
           </li>
         </ul>
         </Col>
         <Col>
         <h4 className='fw-bolder heading5'>Contact Us</h4>
         <p className='heading5 mt-5 mb-1'>
            <span className='fa me-3'><FaLocationArrow/></span>
            Head Office
          </p>
          <p className='parf ms-5'>123,Main Street,Your City</p>         
          
          <p className='heading5 mt-4 mb-1'>
            <span className='fa me-3'><FaPhone/></span>
             Phone Number
          </p>
          <p className='parf ms-5 mb-1'>+123 456 7890</p>
          <p className='parf ms-5'>+123 456 7890</p>
          
          <p className='heading5 mt-4 mb-1'>
            <span className='fa me-3'><AiTwotoneMail/></span>
             Email
          </p>
          <p className='parf ms-5 mb-1'>free@infoexample.com</p>
          <p className='parf ms-5'>www.infoexample.com</p>

         </Col>
       </Row> 
    </Container>
 </div>
 <div className='bottom'>
   <Container>
      <Row>
        <Col className='text-center'>
        <p>Copyright ©2023 All rights reserved | Ecommerce Template </p>
        </Col>
      </Row>
   </Container>
 </div>
 </>
  );
}

export default Footer;
