import React from 'react'
import { useState,useContext } from 'react'
import {Row,Col,Form,Button,Container} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';
import {Store} from '../../Context'

const Login = () => {
  const navigate = useNavigate()
  const {state, dispatch} = useContext(Store)
  const {user} = state


  const [values, setValues] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e)=>{
    setValues({...values, [e.target.name]: e.target.value})
  }
  const { email,password} = values

  const handleSubmit = async(e)=>{
    e.preventDefault()

    if(!email || !password ){
      toast.error('Please fill all input box')
    }else if(!email.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)){
      toast.error('Please enter a valid email')
    }else if(!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/)){
      toast.error('Password must be 7 to 15 characters and have to one number and one special character')
    }else{
      try{
        toast.success('Login successful')
        await axios.post('http://localhost:8000/auth/api/login' , {
          email: email,
          password: password
        }).then((data)=>{

          dispatch({type: 'USER_SIGNIN', payload: data.data})
          localStorage.setItem('user', JSON.stringify(data.data))
          navigate('/')

        })

      }catch(e){
        toast.error('Registration Failed')
      }
    }
   
  }

  return (
    <div>
      <div className='auth_main'>
        <Container>
        <Row>
          <Col className='auth_main-left' lg={6}>
          <Form onSubmit={handleSubmit}>
            <h2>Sign In</h2>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control name='email' type="email" placeholder="Enter email" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Password</Form.Label>
              <Form.Control name='password' type="password" placeholder="Password" onChange={handleChange} />
            </Form.Group>

           <Button variant="primary" type="submit" onClick={handleSubmit}>
              Sign In
            </Button>
          </Form>
          </Col>

          <Col className='auth_main-right' lg={6}>
            <h2>Create Account</h2>
            <p>Create account to manage orders</p>
            <Link to='/registration'>
              <Button variant="primary" type="submit" className='mt-3'>
                  Create Account 
              </Button>
            </Link>
          </Col>
        </Row>
        </Container>
      </div>
    </div>
  )
}

export default Login