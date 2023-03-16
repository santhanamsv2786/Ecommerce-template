import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Navibar from './Navibar';
function Register() {

  const navigate = useNavigate();  

  const [name,setName] = useState("");
  const [nerror,setNerror] = useState("");

  const [mail,setMail] = useState("");
  const [merror,setMerror] = useState(""); 

  const [password,setPassword] = useState("");
  const [perror,setPerror] = useState("");

  const [cpassword,setCpassword] = useState("");
  const [cerror,setCerror] = useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    let c1="false", c2="false", c3="false", c4="false";

    if(name.length==0){
      setNerror("Username must be entered");
      
    }
    else{
      setNerror("");
      c1="true";
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
        c2="true";
    }

    let d=/^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if(password==''){
      setPerror("Password must be Entered");
    }
    else if(!d.test(password)){
      setPerror("Password must contains 6-16 characters");
    }
    else {
      setPerror("");
      c3="true";
    }

    if(cpassword==""){
        setCerror("Confirm your password")
    }
    else if(!(cpassword).match(password)){
        setCerror("invalid password");
    }
    else{
        setCerror("");
        c4="true";

    }

    if((c1=="true")&&(c2=="true")&&(c3=="true")&&(c4=="true")){
      alert("Registered Sucessfully")
    //   console.log("ok")
    }

  }

  return (
    <>
    <div className='heading'>
      <Container className='h-100'>
         <div className='banner text-center'>
                <h2 className='fw-bolder'>Register</h2>
                <p>Home-Register</p>
         </div>
      </Container>
    </div>
    <div className='next'>
      <Row className='next1 col-xl-9'>
        <Col className='ba pb-5' xl={6} xs={12}>
            <div className='text-center text-white'>
              <h4>Already have an account?</h4>
              <p>There are advances being made in science and technology <br/>everyday, and a good example of this is the</p>
              <Button className='babtn mt-3  col-xl-4 ' onClick={()=>navigate('../login')} >Log in Now</Button>
            </div>
        </Col>
        <Col className='bg-light'>
           <Row className='text-center  '>
            <h5 className='pt-5 fw-bolder'>CREATE AN ACCOUNT</h5>
            <div xs={8} className='mt-5'>
            <form  onSubmit={handleSubmit}>
              <input className='w-75 mt-5 frm1 bg-light' type='text' placeholder='Username' onChange={(e)=>{setName(e.target.value)}}></input><br/>
              {nerror && <label>{nerror}</label> } <br/>
              <input className='w-75 frm1 bg-light' type='text' placeholder='Enter Address' onChange={(e)=>{setMail(e.target.value)}}></input><br/>
              {merror && <label>{merror}</label>}<br/>
              <input className='w-75 frm1 bg-light' type='password' placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}></input> <br/>
              {perror && <label>{perror}</label>}<br/>
              <input className='w-75 frm1 bg-light' type='password' placeholder='Confirm Password' onChange={(e)=>{setCpassword(e.target.value)}}></input><br/>
              {cerror && <label>{cerror}</label>}
              
              <div className='mt-4 mb-4 '> 
                <input className=' cbox col-lg-2' type="checkbox"></input>
                <label className='cbox col-lg-8'>Keep me logged in </label>
              </div>
              <div className='pb-4'>
                <button className='w-50 frm22 ' type='submit'>REGISTER</button>
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

export default Register;

