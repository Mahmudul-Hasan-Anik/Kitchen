import React from 'react'
import { useState } from 'react'
import {Row,Col,Form,Button,Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';

const Registration = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confromPassword: ''
  })

  const handleChange = (e)=>{
    setValues({...values, [e.target.name]: e.target.value})
  }

  const {name, email,password, confromPassword} = values

  const handleSubmit = async(e)=>{
    e.preventDefault()

    if(!name || !email || !password || !confromPassword){
      toast.error('Please fill all input box')
    }else if(!name.match(/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/)){
      toast.error(`First Letter must be uppercase`)
    }else if(!email.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)){
      toast.error('Please enter a valid email')
    }else if(!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/)){
      toast.error('Password must be 7 to 15 characters and have to one number and one special character')
    }else if(password !== confromPassword){
      toast.error('Password not matched')
    }else{
      try{
        toast.success('Registration successful')
        await axios.post('http://localhost:8000/auth/api/registration' , {
          name: name,
          email: email,
          password: password
        })

       
      }catch(e){
        toast.error('Registration Failed')
      }
    }

    
   
  }

  return (
    <div className='main_content'>
      <div className='auth_main'>
        <Container>
        <Row>
          <Col className='auth_main-left' lg={6}>
          <Form onSubmit={handleSubmit}>
            <h2>Create Account</h2>
            <Form.Group className="mb-3" >
              <Form.Label>Enter Name</Form.Label>
              <Form.Control name='name' type="text" placeholder="Enter Name" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control name='email' type="email" placeholder="Enter email" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Password</Form.Label>
              <Form.Control name='password' type="password" placeholder="Password" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Confrom Password</Form.Label>
              <Form.Control name='confromPassword' type="password" placeholder="Retype Password" onChange={handleChange} />
            </Form.Group>

           <Button variant="primary" type="submit" onClick={handleSubmit}>
              Register Account
            </Button>
          </Form>
          </Col>

          <Col className='auth_main-right' lg={6}>
            <h2>Sign In</h2>
            <p>Login to manage orders</p>
            <Link to='/login'>
              <Button variant="primary" type="submit" className='mt-3'>
                Login 
              </Button>
            </Link>
          </Col>
        </Row>
        </Container>
      </div>
    </div>
  )
}

export default Registration