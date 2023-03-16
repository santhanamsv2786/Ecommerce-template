import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
function Tracking() {

    const [order,setOrder] = useState("");
    const [oerror,setOerror] = useState("");

    const [mail,setMail] = useState("");
    const [merror,setMerror] = useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        let c1="false", c2="false";
        
        if(order.length==0){
            setOerror("Please Enter Your Order Id")
        }
        else{
          setOerror("");
          c1="true";
        }

        let k = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(mail==""){
          setMerror("Please Enter Your Mail");
        }
        else if(!k.test(mail)){
          setMerror("Enter a valid Mail");
        }
        else{
          setMerror("");
          c2="true";
        }

        if((c1="true")&&(c2="true")){
          // alert("Your Order is in Transit")
        }
    }


  return (
    <><div className='heading'>
      <Container className='h-100'>
         <div className='banner text-center'>
                <h2 className='fw-bolder'>Order Tracking</h2>
                <p>Home-Order Tracking</p>
         </div>
      </Container>
    </div>
    <div className=''>
        <Container className=' col-xl-9 pb-5'>
           <div className='pt-5'>
           <p className='pt-5 col-xl-11'>To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
           </div>
           <form className='pb-5'  onSubmit={handleSubmit}>
              <input className='square border border-1' type='text' placeholder='Order ID' onChange={(e)=>{setOrder(e.target.value)}}></input> <br></br>
              {oerror && <label>{oerror}</label>}<br></br>
              <input className='square border border-1' type='text' placeholder='Billing Email Address' onChange={(e)=>{setMail(e.target.value)}}></input> <br></br>
              {merror && <label>{merror}</label>} <br></br>
              <div>
              <Button className=' mt-3 ps-5 pe-5  square bg-primary rounded-pill' type='submit'>Track Order</Button>
              </div> 
              
            </form>   
        </Container>

    </div>
    </>
  );
}

export default Tracking;
