import React from 'react'
import { useContext } from 'react'
import {Grid,Row, Col,InputGroup,Input} from 'rsuite'
import { Store } from '../Context'
import { FaSearch } from "react-icons/fa";

const SearchMenu = () => {
    const {state} = useContext(Store)
    const {user} = state

  return (
    <div>
    <Grid fluid>
      <Row className="show-grid">
        <Col xs={12}>
            <h5>Welcome, {user ? user.name : ''}</h5>
            <p style={{color:'gray'}}>Please Choose Your Favorite Food</p>
        </Col>
        <Col xs={12} inline>
          <InputGroup inside style={{width: 300,marginBottom: 10}}>
            <Input placeholder='Search'/>
            <InputGroup.Button>
                <FaSearch />
            </InputGroup.Button>
          </InputGroup>
        </Col>
      </Row>
    </Grid>

    <div className='menu_card'>
        
    </div>
    </div>
  )
}

export default SearchMenu