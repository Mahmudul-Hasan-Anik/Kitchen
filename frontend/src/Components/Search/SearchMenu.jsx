import React,{ useContext,useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {Grid,Row, Col,List} from 'rsuite'
import { Store } from '../../Context'

const SearchMenu = (props) => {
    const {state} = useContext(Store)
    const {user} = state

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
        <Col xs={12}  className='searchMenu_design-col2'>
          <div className='search_design-input'>
            <input type="text" placeholder='Search' onChange={props.change}/>
          </div>
        {props.filterItem ? 
          <List hover className='search_design_dropdown'>
            {props.filterItem.map((item, index)=>(
              <List.Item key={index}>
                <Link to={`search/${item.catagory}`}>{item.title}</Link>
              </List.Item>
            ))}
          </List>
        :
        ''
        }
        </Col>
      </Row>
    </Grid>
    </div>
  )
}
export default SearchMenu