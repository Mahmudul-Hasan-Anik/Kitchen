import React,{ useState } from 'react'
import {Form,Button,Row,Col} from 'react-bootstrap'
import axios from 'axios'

const Dashboard = () => {
  const [values, setValues] = useState({
    title: '',
    price: '',
    description: '',
    catagory:''
  })

  const [imageFile, setImageFile] = useState('')

  const {title, price, description,catagory} = values

  const handleChange = (e)=>{
    setValues({...values, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault()

    const formData = new FormData();

    formData.append('title', title)
    formData.append('price', price)
    formData.append('description', description)
    formData.append('catagory', catagory)
    formData.append('image', imageFile)

    axios.post('/menu/api/items', formData)
  }

  return (
    <div className='main_content'>
    <Form enctype="multipart/form-data">
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter Title" name='title' onChange={handleChange}/>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Catagory</Form.Label>
            <Form.Select name='catagory' onChange={handleChange}>
              <option>Catagory</option>
              <option value="Burger">Burger</option>
              <option value="Pizza">Pizza</option>
              <option value="chicken">Chicken</option>
              <option value="Cake">Cake</option>
              <option value="Fish">Fish</option>
              <option value="Juice">Juice</option>
              <option value="Healthy">Healthy</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" placeholder="Enter Price" name='price' onChange={handleChange}/>
          </Form.Group>
        </Col>

        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Upload Image</Form.Label>
            <Form.Control type="file" placeholder="Image" onChange={(e)=>setImageFile(e.target.files[0])} name='image'/>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} onChange={handleChange} name='description'/>
          </Form.Group>
        </Col>
      </Row>

      <Button variant='secondary' style={{width:'100px'}} onClick={handleSubmit} >Submit</Button>
    </Form>
    </div>
  )
}

export default Dashboard