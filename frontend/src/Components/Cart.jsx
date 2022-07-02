import React,{useContext} from 'react'
import { Grid,Row,Col } from 'rsuite'
import { Dropdown,Card,Button } from 'react-bootstrap'
import {Store} from '../Context'
import { Link } from 'react-router-dom'

const Cart = () => {
  const {state,state2} = useContext(Store)
  const {user} = state
  const {cart:{cartItems}} = state2

  console.log(cartItems)

  const handleRemoveCart = (id)=>{
    console.log(id)
  }


  return (
    <div className='main_cart'>
      <div className='cart_sidebar'>
        <div className='cart_card'>

           <Grid fluid>
                <Row className="show-grid">
                    <Col lg={6} >
                        <img src='./image/logo.png' style={{width:'40px'}}/>
                    </Col>
                    <Col lg={12}>
                        {user?
                         <p>{user.name}</p>
                         :
                         ''
                        }
                    </Col>
                    <Col lg={6}>
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary">
                            <i class="fa-solid fa-ellipsis-vertical"></i>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item >Your Profile</Dropdown.Item>
                                <Dropdown.Item >
                                  <Link to='/dashboard'>Dashboard</Link>
                                </Dropdown.Item>
                                <Dropdown.Item >Settings</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
            </Grid>
        </div>
      
        <div className='cart_card-show'>
          <h5>Current Order</h5>

          {cartItems.map((item)=>(
          <Card style={{ width: '100%',margin:'5px 0px' }} className='cart_card-design'>
            <Card.Body>
                <Row className="show-grid ">
                    <>
                     <Col md={6} lg={6} >
                        <img src={item.image} style={{width:'40px', height:'40px'}}/>
                    </Col>
                    <Col md={8} lg={8}>
                       <h5>{item.title}</h5>
                    </Col>
                    <Col md={6} lg={6}>
                        <p>${item.price}.00</p>
                          <div className='cart_card_update-button'>
                            <span variant='secondary' style={{width:'20px', height:'20px'}}>-</span>
                            <span variant='secondary'>{item.quantity}</span>
                            <span variant='secondary' style={{width:'20px', height:'20px'}}>+</span>
                          </div>
                    </Col>
                    <Col md={4} lg={4}>
                        <p className='cart_card-button'><i class="fa-solid fa-trash-can" onClick={()=>handleRemoveCart(item._id)}></i></p>
                    </Col>
                    </>
                </Row>
            </Card.Body>
          </Card>
          ))}    
        </div>

        <div className='cart_footer'>
            <Button>Go to Place Order</Button>
        </div>
      </div>
    </div>
  )
}

export default Cart