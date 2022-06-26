import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {Grid,Row,Col,IconButton,ButtonToolbar,Button} from 'rsuite'
import InnerImageZoom from 'react-inner-image-zoom'
import { useContext } from 'react'
import { Store } from '../../Context'


const ItemDetails = () => {
    const params = useParams()
    const [values, setValues] = useState([])
    const {state2, dispatch2} = useContext(Store)

  console.log(state2)
    const handleCart = (item)=>{
        dispatch2({
            type: 'ADD_CART_ITEMS',
            payload: item
        })
        
    }

    useEffect(()=>{
        async function fatchData(){
            const {data} = await axios.get(`/menu/api/items/${params.id}`)
            setValues(data)
        }
        fatchData()
    },[])

  return (
    <div className='main_content'>
    <Grid fluid>
        <Row className="show-grid">
           {values?
            <>
            <Col xsHidden xs={10}>
                <InnerImageZoom src={values.image} zoomSrc={values.image} />
            </Col>
            <Col xs={14} className='details_content'>
                <div>  
                    <h4>{values.title}</h4>
                    <p>${values.price}.00</p>
                    <p>Reviews: 113</p>
                    <p>Ratings: 4.5</p>
                </div>
                <div>
                <ButtonToolbar >
                    <Button appearance="primary" color="cyan" size="md" onClick={()=>handleCart(values)}>
                        Add to cart
                    </Button>
                    <Button appearance="primary" color="green">Wishlist</Button>
                </ButtonToolbar>
                </div>
            </Col> 
            </> 
           :
           ''
           }
        </Row>
    </Grid>
    </div>
  )
}

export default ItemDetails