import axios from 'axios'
import React,{ useContext,useState } from 'react'
import {Grid,Row, Col,InputGroup,Input} from 'rsuite'
import { Store } from '../Context'

const SearchMenu = ({product}) => {
    const [searchTerm, setSearchTeam] = useState('')
    const {state} = useContext(Store)
    const {user} = state

    // console.log('ANik',product)
    
    const handleChange = async(e)=>{
      e.preventDefault();
      setSearchTeam(e.target.value)
      console.log(e.target.value)

      // const {data} = await axios.get(`/menu/api/items/search/${searchTerm}`)
      // console.log(data)
      // // console.log(data.value._id)
    }



  return (
    <div>
    <Grid fluid className='searchMenu_design'>
      <Row className="show-grid">
        <Col xs={12}>
          <div >
            <h5>Welcome, {user ? user.name : ''}</h5>
            <p style={{color:'gray'}}>Please Choose Your Favorite Food</p>
          </div>
        </Col>
        <Col xs={12} inline className='searchMenu_design-col2'>
          {/* <InputGroup inside style={{width: 400,marginBottom: 20, marginRight: 30}}>
            <Input placeholder='Search' style={{padding:'15px'}} onChange={handleChange}/>
          </InputGroup> */}

          <div className='search_design-input'>
            <input type="text" placeholder='Search' onChange={handleChange}/>
          </div>
        </Col>
      </Row>
    </Grid>
    </div>
  )
}
export default SearchMenu