import React,{useState,useContext,useEffect} from 'react'
import SearchMenu from '../../Components/SearchMenu'
import { Grid,Row,Col,ButtonToolbar,IconButton } from 'rsuite'
import {Link, useLocation} from 'react-router-dom'
import { HiShoppingCart } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import axios from 'axios';
import { Store } from '../../Context';


const Menu = () => {
  const {state2, dispatch2} = useContext(Store)
  const {cart:{cartItems}} = state2

  const [values, setValues] = useState([])
  const [catagory, setCatagory] = useState([])
  const [active, setActive] = useState('')
  

  const handleAll = async()=>{
    const {data} = await axios.get('/menu/api/items/all')
    setValues(data)
    
  }

  useEffect(()=>{
    async function fatchData(){
      const {data} = await axios.get('/menu/api/items/all')
      setValues(data)
    }
    fatchData()
  },[])
//============ CATAGORY BASE DATA ===========
  const handleCatagory = async(id)=>{
    const {data} = await axios.get(`/menu/api/items/catagory/${id}`)
    setValues(data) 

    // if(values[0].catagory !== id){
    //   setActive('')
    // }else if(values[0].catagory === id){
    //   setActive('active')
    // }
  }
//============= SHOW CATAGORY==============
  useEffect(()=>{
    async function fatchData(){
      const {data} = await axios.get('/items/api/catagory/show')
      setCatagory(data)
    }
    fatchData()
  },[])

  //===========CART FUNCTIONLITY=============
  const handleCart = async(item)=>{

    const existingItem = cartItems.find((card)=> card._id === item._id)
    const quantity = existingItem ? existingItem.quantity + 1 : 1

    dispatch2({
      type: 'ADD_CART_ITEMS',
      payload: {...item, quantity}
    })
  }

  //=========== WISH FUNCTIONLITY ===========
  const handleWish = ()=>{}


  return (
    <div className='main_content'>
      <SearchMenu/>

      <div className='mt-4 menu_item-show'>
        <ul>
        <li onClick={handleAll} className="active">
              <i class='fa-solid fa-house'></i>
              <p>All</p>
            </li>
          {catagory.map((items)=>(
            <li onClick={()=>handleCatagory(items._id)}>
              <i class={items.catagoryIcon}></i>
              <p>{items.catagoryName}</p>
            </li>
          ))}
        </ul>
      </div>
      {/* className={ values[0].catagory === items._id ? 'active' : '' } */}

      <Grid fluid>
      <Row className="show-grid home_item">
        {values.map((item)=>(
          <Col sm={24} md={7} lg={7} className='item_card-design item_catagory-design'>
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
    </div>
  )
}

export default Menu