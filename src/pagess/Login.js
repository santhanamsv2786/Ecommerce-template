import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Navibar from './Navibar';
function Login() {

  const navigate = useNavigate();

  const [name,setName] = useState('');
  const [nerror,setNerror] = useState('');

  const [password,setPassword] = useState('');
  const [perror,setPerror] = useState('');

  const handleSubmit=(e)=>{
    e.preventDefault();
    let c1="false", c2="false";

    if(name.length==0){
      setNerror("Username must be entered");
    }
    else{
      setNerror("");
      c1="true";
    }

    let p=/^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if(password==''){
      setPerror("Password must be Entered");
    }
    else if(!p.test(password)){
      setPerror("Password must contains 6-16 characters");
    }
    else {
      setPerror("");
      c2="true";
    }

    if((c1=="true")&&(c2=="true")){
      alert("Login Sucess")
      console.log("ok")
    }

  }

  return (
    <><Navibar/>
    <div className='heading'>
      <Container className='h-100'>
         <div className='banner text-center'>
                <h2 className='fw-bolder'>Login / Register</h2>
                <p>Home-Login/Register</p>
         </div>
      </Container>
    </div>
    <div className='next'>
      <Row className='next1 col-xl-9'>
        <Col className='ba pb-5'>
            <div className='text-center text-white'>
              <h4>New to our Website?</h4>
              <p>There are advances being made in science and technology <br/>everyday, and a good example of this is the</p>
              <Button className='babtn mt-3' onClick={() => navigate('../register')}>Create an Account</Button>
            </div>
        </Col>
        <Col className='bg-light'>
           <Row md={12} className='text-center'>
            <h5 className='pt-5 fw-bolder'>LOG IN TO ENTER </h5>
            <div xs={8} className='mt-5'>
            <form  onSubmit={handleSubmit}>
              <input className='mt-5 frm1 bg-light' type='text' placeholder='Username' onChange={(e)=>{setName(e.target.value)}}></input><br/>
              {nerror && <label>{nerror}</label> } <br/>
              <input className='frm1 bg-light' type='password' placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}></input> <br/>
              {perror && <label>{perror}</label>}
            
              <div className='mt-5'> 
                <input className='cbox col-lg-1' type="checkbox"></input>
                <label className='cbox col-lg-10'>Keep me logged in </label>
              </div>
              <div className='pb-5'>
                <Button className='frm2 mt-5 mb-4' type='submit'>Log In</Button>
                <a className='cbox' href='#'>Forget Password?</a>
              </div>
              </form>  
              
              
            </div>
           </Row>
        </Col>
      </Row>

    </div>
    
    </>
  );
}

export default Login;
