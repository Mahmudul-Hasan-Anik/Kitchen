import React from 'react'
import {Grid,Row,Col} from 'rsuite'
import { Card } from 'react-bootstrap'
import { useContext } from 'react'
import { Store } from '../../Context'
import { Link } from 'react-router-dom'

const ShowCart = () => {
    const {state2,dispatch2} = useContext(Store)
    const {cart:{cartItems}} = state2
    console.log(cartItems)

    const handleUpdate = (item, quantity)=>{
        dispatch2({
            type: 'ADD_CART_ITEMS',
            payload: {...item, quantity}
        })
    }
  return (
    <>
    <Grid fluid>
        <div className='showCart_design_main'>
            <Row className="show-grid">
            <Col md={18} lg={18}>
                <div className='showCart_design_col1'>
                    <h3>Item Cart</h3>
                    <span className='showCart_containue'>
                        <Link to='/'><i class="fa-solid fa-angles-left"></i> Home</Link>
                    </span>
                    <div className='showCart_design_col1-heading'>
                        <ul>
                            <li>Item Image</li>
                            <li>Item Name</li>
                            <li>Item Price</li>
                            <li>Item Quantity</li>
                            <li>Item Subtotal</li>
                        </ul>
                    </div>

                    <div className='showCart_design_col1-content'>
                        {cartItems.map((item)=>(
                        <ul>
                            <li>
                                <img src={item.image}/>
                            </li>
                            <li>{item.title}</li>
                            <li>${item.price}.00</li>
                            <li >
                             <div className='qnt-btn'>
                                <span>{item.quantity}</span>
                                <div className='qnt-btn-btn'>
                                    <button onClick={()=>handleUpdate(item, item.quantity + 1)} disabled={item.quantity == item.stock}><i class="fa-solid fa-sort-up"></i></button>
                                    <button onClick={()=>handleUpdate(item, item.quantity - 1)} disabled={item.quantity == 1}><i class="fa-solid fa-caret-down"></i></button>
                                </div>
                             </div>
                            </li>
                            <li>${item.price * item.quantity}.00</li>
                        </ul>
                        ))}
                    </div>
                </div>
            </Col>
            <Col md={6} lg={6}>
                <div  className='showCart_design_col2'>
                   <h3>Cart Totals</h3>
                </div>
            </Col>
            </Row>
        </div>
    </Grid>
    </>
  )
}

export default ShowCart