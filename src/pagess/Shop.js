import React,{useState} from 'react';
import { Col, Container, FormControl, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { CiSearch } from 'react-icons/ci';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addtocart } from './Reducers/cartreducer';
 

function Shop() {

  const Pros1 = useSelector(state => state.Pros1)
  const {id} = useParams();
  const pid = id;


  const dispatch = useDispatch();

  const product = Pros1.find(product => product.id === parseInt(pid));  
  

  const additem = () =>{
    dispatch(addtocart(product))
    alert("item added to cart")
}
   
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
    <div className='heading'>
      <Container className='h-100'>
         <div className='banner text-center'>
                <h2 className='fw-bolder'>Shop Category</h2>
                <p>Home-Shop Category</p>
         </div>
         </Container>
    </div>
    <div className='shop1'>
      <Container className='shop2 col-9 pt-5'>
        <Row className='pt-5'>
          <Col className='lefts col-xl-3 col-lg-4 col-md-5'>
            <div className='heads'>
              <h5 className='pt-3 ps-4'>Browse Categories</h5>
            </div>
            <div className='headb'>
              <ul className='pt-4'>
              <li class="form-check pb-2">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label class="form-check-label" for="flexRadioDefault1">
                  Men (3600)
                </label>
              </li>
              <li class="form-check pb-2">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label class="form-check-label" for="flexRadioDefault1">
                  Women (3600)
                </label>
              </li>
              <li class="form-check pb-2">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label class="form-check-label" for="flexRadioDefault1">
                 Accessories (3600)
                </label>
              </li>
              <li class="form-check pb-2">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label class="form-check-label" for="flexRadioDefault1">
                  Footwear (3600)
                </label>
              </li>
              <li class="form-check pb-2">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label class="form-check-label" for="flexRadioDefault1">
                  Bay item (3600)
                </label>
              </li>
              <li class="form-check pb-2">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label class="form-check-label" for="flexRadioDefault1">
                  Electronics (3600)
                </label>
              </li>
              <li class="form-check pb-2">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label class="form-check-label" for="flexRadioDefault1">
                  Food (3600)
                </label>
              </li>
            </ul>
          </div>

          <div className='heads mt-5'>
              <h5 className='pt-3 ps-4'>Product Filters</h5>
          </div>
          <div className='headbs'>
              <ul className='pt-4'>
              <h5 className='pb-3'>Brands</h5>
              <li class="form-check pb-2">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label class="form-check-label" for="flexRadioDefault1">
                  Apple (29)
                </label>
              </li>
              <li class="form-check pb-2">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label class="form-check-label" for="flexRadioDefault1">
                  Asus (28)
                </label>
              </li>
              <li class="form-check pb-2">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label class="form-check-label" for="flexRadioDefault1">
                 Redmi (25)
                </label>
              </li>
              <li class="form-check pb-2">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label class="form-check-label" for="flexRadioDefault1">
                  Realme (21)
                </label>
              </li>
              <li class="form-check pb-2">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label class="form-check-label" for="flexRadioDefault1">
                  Samsung (23)
                </label>
              </li>
            </ul>

            <ul className='pt-4'>
              <h5 className='pb-3'>Color</h5>
              <li class="form-check pb-2">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label class="form-check-label" for="flexRadioDefault1">
                  Black (29)
                </label>
              </li>
              <li class="form-check pb-2">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label class="form-check-label" for="flexRadioDefault1">
                  BlackLeather (28)
                </label>
              </li>
              <li class="form-check pb-2">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label class="form-check-label" for="flexRadioDefault1">
                 Red (25)
                </label>
              </li>
              <li class="form-check pb-2">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label class="form-check-label" for="flexRadioDefault1">
                  Gold (21)
                </label>
              </li>
              <li class="form-check pb-2">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label class="form-check-label" for="flexRadioDefault1">
                  Spacegrey (23)
                </label>
              </li>
            </ul>
            {/* <div className='ps-4'>
            <h5>Price</h5>
          </div> */}
          </div>
          </Col>

           {/* /rightside// */}
          <Col className='rights col-xl-9 col-lg-8 col-md-7 '>
            <div className='navs pb-2 pt-1 d-inline-block col-lg-12'>
              <Container fluid>
                <Row>
                    <Col xl={3} xs={2}>
                      <Dropdown>
                        <Dropdown.Toggle className='bg-light text-dark mt-2 ' id="dropdown-basic">
                          Default Sorting
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Default Sorting</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Default Sorting</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Default Sorting</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Col>
                    <Col xl={5}>
                      <Dropdown>
                        <Dropdown.Toggle className='bg-light text-dark mt-2' id="dropdown-basic">
                          Show 12
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Show 12</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Show 12</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Show 12</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Col>
                    <Col className='mt-2  col-lg-4'>
                    <Form className="d-flex bg-light colors">
                      <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-"
                        aria-label="Search"
                      />
                      <Button className='bg-light colors'>
                      <span className='me-3 bg-light colorss'><CiSearch/></span>
                      </Button>
                    </Form>
                    </Col>
                </Row>    
              </Container>
            </div>
           
            <div  className='trending'>
                <div className='mt-4 mb-5'>
                    
                    <Row xs={1} xl={3}>
                        {Pros1.map(Pro =>(
                          <Col className='mb-5' key={Pro.id}>
                            <div>
                              <Link to={`../pd/${Pro.id}`}><img src={Pro.image} className='col-12'></img></Link>
                            </div>
                            <div>
                            <h6>{Pro.category}</h6>
                            <h4>{Pro.name}</h4>
                            <h5>${Pro.price}</h5>
                            </div>
                            {/* <Button className='cbu m-2' onClick={additem}>ADD TO CART</Button> */}
                          </Col>
                        ))}                
                    </Row>
                  
                </div>
            </div>
          </Col>
          
        </Row>
      </Container>
    </div>
    {/* <div className='trending'>
      <div className='product1'>
        <Row>
          <h6 className='mt-2'>Popular items in the Market</h6>
          <h2 className='mb-5'>Top<span className='border-bottom border-primary'> Product</span></h2>
        </Row>
      </div>

    </div> */}
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

export default Shop;
