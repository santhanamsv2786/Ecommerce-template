import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Navibar from './Navibar';
import { AiOutlineHome } from 'react-icons/ai';
import { TfiHeadphone } from 'react-icons/tfi';
import { GoMail } from 'react-icons/go';




function Contact() {


  const [name,setName] = useState('');
  const [nerror,setNerror] = useState('');

  const [mail,setMail] = useState('');
  const [merror,setMerror] = useState('');

  const [sub,setSub] = useState('');
  const [serror,setSerror] = useState('');

  const [message,setMessage] = useState('');
  const [mgerror,setMgerror] = useState('');

  const handleSubmit=(e)=>{
    e.preventDefault();
    let b1="false", b2="false", b3="false", b4="false";

    if(name.length==0){
      setNerror("Please Enter your Name");
    }
    else{
      setNerror("");
      b1="true";
    }

    let k = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(mail==""){
        setMerror("please enter your mail id");
    } 
    else if(!k.test(mail)){
        setMerror("Please enter a valid email");
    }
    else{
        setMerror("");
        b2="true";
    }
    
    if(sub.length==0){
      setSerror("Please enter the Subject")
    }
    else{
      setSerror("");
      b3="true";
    }

    if(message.length==0){
      setMgerror("Please write the message what you want to express")
    }
    else{
      setMgerror("");
      b4="true";
    }

    if((b1=="true")&&(b2=="true")&&(b3=="true")&&(b4=="true")){
       alert("Message sent")
    }

  }


  return (
    <><Navibar/>
    <div className='heading'>
      <Container className='h-100'>
         <div className='banner text-center'>
                <h2 className='fw-bolder'>Contact Us</h2>
                <p>Home-Contact Us</p>
         </div>
         </Container>
    </div>
    <div>
      <Container className=' col-xl-10 mt-5'>
          <div className='mt-5'>
              
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d36401238.76392581!2d64.67114061133374!3d23.301436596793295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1678025679363!5m2!1sen!2sin" className='w-100 mt-5 mb-5' height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"> 
              </iframe>        
          </div>
          <Row>
            <Col xl={3}>
            
              <p className='fw-bolder mb-0'>
                <span className='pb-5 me-3'><AiOutlineHome size='1.8rem' color='blue'/></span>
                California United States
              </p>
              <p className='ms-5'>Santa monica bullevard</p>
              <p className='fw-bolder  mb-0'>
                <span className='pb-5  me-4'><TfiHeadphone size='1.5rem' color='blue'/></span>  
                00 (440) 9865 562
              </p>
              <p className='ms-5'>Mon to Fri 9am to 6pm</p>
              <p className='fw-bolder mb-0'>
                <span className='pb-5 me-3'><GoMail size='1.8rem' color='blue'/></span> 
                support@colorlib.com
              </p>
              <p className='ms-5 pb-5'>Send us your query anytime!</p>             
              </Col>
              <Col>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col xl={5}>
                    <input className='border border-1' type='text' placeholder='Enter your name' onChange={(e)=>{setName(e.target.value)}}></input> <br></br>
                    {nerror && <label>{nerror}</label>}<br></br>
                    <input className='border border-1' type='text' placeholder='Enter email address' onChange={(e)=>{setMail(e.target.value)}}></input> <br></br>
                    {merror && <label>{merror}</label>}<br></br>
                    <input className='border border-1' type='text' placeholder='Enter Subject' onChange={(e)=>{setSub(e.target.value)}}></input> <br></br>
                    {serror && <label>{serror}</label>}<br></br>
                    </Col>
                    <Col>
                    <input  className='message border border-1' type='text' placeholder='Enter Message' onChange={(e)=>{setMessage(e.target.value)}}></input> <br></br>
                    {mgerror && <label>{mgerror}</label>}          
                    </Col>
                  </Row>
                  <Row className='pb-5 pt-3  float-end me-0'>
                    <Button className='ps-5 pe-5 pt-3 pb-3 ' type='submit'>Send Message</Button>
                  </Row>
                    
                    
                </form>
              </Col>

          </Row>


      </Container>
    </div>
    </>
  );
}

export default Contact;
