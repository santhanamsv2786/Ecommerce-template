import React from 'react';
import { Container } from 'react-bootstrap';
import Navibar from './Navibar';

function Login() {
  return (
    <><Navibar/>
    <div className='heading'>
      <Container className='h-100'>
         <div className='banner text-center'>
                <h2>Login/Register</h2>
                <p>Home-Login/Register</p>
         </div>
         </Container>
    </div>
    <div className='next'>
      <Container className='next1 col-9'>

      </Container>

    </div>
    
    </>
  );
}

export default Login;
