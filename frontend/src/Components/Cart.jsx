import React,{useContext} from 'react'
import { Grid,Row,Col } from 'rsuite'
import { Dropdown } from 'react-bootstrap'
import {Store} from '../Context'
import { Link } from 'react-router-dom'

const Cart = () => {
  const {state,state2} = useContext(Store)
  const {user} = state
  const {cart:{cartItems}} = state2


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

          <Grid fluid>
                <Row className="show-grid">
                  {cartItems.map((item)=>(
                    <>
                     <Col md={6} lg={6} >
                        <img src={item.image} style={{width:'40px'}}/>
                    </Col>
                    <Col md={12} lg={12}>
                       <h5>{item.title}</h5>
                    </Col>
                    <Col md={6} lg={6}>
                        <p>${item.price}.00</p>
                    </Col>
                    </>
                  ))}
                </Row>
            </Grid>
        </div>
      </div>
    </div>
  )
}

export default Cart