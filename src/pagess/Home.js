import React from 'react';
import img2 from './images/hero-banner.png';
import { Col, Container, Row } from 'react-bootstrap';


function Home() {
    return (
    <> <Container>
     <div >
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
        </Container> 
        <Container className='trend'>

        </Container></>
      
       
        
    );
  }
  
  export default Home;
 












































































































{/* <Row className='bor'>
        <Col className='col-4 c1'>
         <img className='img2' src={img2} alt='img2' /> 
         
        </Col>
        <Col className='c2'>
         
        <h2 className='shop'>Shop is Fun</h2> <br></br>
        <h1>BROWSE OUR <br></br> PREMIUM PRODUCT</h1>
        </Col>
        
    </Row> */}
