import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { Grid,Row,Col,ButtonToolbar,IconButton } from 'rsuite'
import {Link} from 'react-router-dom'
import { HiShoppingCart } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import { useContext } from 'react';
import { Store } from '../../Context';

const Home = () => {
  const [values, setValues] = useState([])
  const {state2, dispatch2} = useContext(Store)

  const {cart:{cartItems}} = state2

  const handleCart = async(item)=>{

    const existingItem = cartItems.find((card)=> card._id === item._id)
    const quantity = existingItem ? existingItem.quantity + 1 : 1
  
    // console.log('dfds',existingItem)
    dispatch2({
      type: 'ADD_CART_ITEMS',
      payload: {...item, quantity}
    })

  }

  const handleWish = ()=>{}

  useEffect(()=>{
    async function fatchData(){
      const {data} = await axios.get('/menu/api/items/all')
      setValues(data)
    }
    fatchData()
  },[])

  return (
    <Grid fluid>
      <Row className="show-grid main_content home_item">
        {values.map((item)=>(
          <Col sm={24} md={7} lg={7} className='item_card-design'>
          <Link to={item._id}>
            <img src={item.image} style={{width:'100%', height:'212px', borderRadius:'7px 7px 20px 20px'}}/>
          </Link>
           <div className='item_card-content'>
            <h4>
            <Link to={item._id}>{item.title}</Link>
            </h4>
            <p>{item.description}</p>
          
            <Row className='item_card-footer'>
              <Col className='item_card-footer' md={12} lg={12}>
                <ButtonToolbar>
                  <IconButton icon={ <HiShoppingCart/>} color="red" appearance="primary" onClick={()=>handleCart(item)} />
                  <IconButton icon={ <FaHeart/>} color="green" appearance="primary"  onClick={()=>handleWish(item)}/>
                </ButtonToolbar>
              </Col>
              <Col md={12} lg={12}><p style={{textAlign:'end', margin:'25px 0px'}}>${item.price}.00</p></Col>
            </Row>
           </div>
        </Col>
      
        ))}
      </Row>
    </Grid>
  )
}

export default Home