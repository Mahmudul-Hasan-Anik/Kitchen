import React,{useContext} from 'react'
import {Dropdown,Card,Button } from 'react-bootstrap'
import {Store} from '../Context'
import { Link } from 'react-router-dom'
import { Grid,Row,Col,ButtonToolbar } from 'rsuite'
import PlusIcon from '@rsuite/icons/Plus';

const Cart = () => {
  const {state,state2,dispatch2} = useContext(Store)
  const {user} = state
  const {cart:{cartItems}} = state2

  const handleRemoveCart = (item)=>{
    dispatch2({
      type: 'REMOVE_CART_ITEMS',
      payload: {...item}
    })
  }

  const handleUpdateButton = (item, quantity)=>{
    dispatch2({
      type: 'ADD_CART_ITEMS',
      payload: {...item, quantity}
    })
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
                            <PlusIcon/>
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
                     <Col md={5} lg={5} >
                        <img src={item.image} style={{width:'40px', height:'40px'}}/>
                    </Col>
                    <Col md={16} lg={16}>
                       <h5>{item.title}</h5>
                    </Col>
                    {/* <Col md={8} lg={8}>
                        <p>${item.price}.00</p>
                    </Col> */}
                    <Col md={3} lg={3}>
                        <p className='cart_card-button'><i class="fa-solid fa-trash-can" onClick={()=>handleRemoveCart(item)}></i></p>
                    </Col>
                    </>
                </Row>
            </Card.Body>
          </Card>
          ))}    
        </div>

        <div className='cart_footer'>
            <Link to='/showcart'>
              <Button>Go to Place Order</Button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Cart