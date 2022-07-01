import React,{ useState } from 'react'
import {Form,Button,Row,Col,Tabs,Tab} from 'react-bootstrap'
import axios from 'axios'
import { useEffect } from 'react'

const Dashboard = () => {
  const [catName, setCatName] = useState('')
  const [iconName, setIconName] = useState('')
  // const [catagory, setCatagory] = useState('')
  const [itemCatagory, setItemCatagory] = useState([])

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


  const handleCatagory = async(e)=>{
    e.preventDefault()

    await axios.post('/items/api/catagory', {
      catagoryName: catName,
      catagoryIcon: iconName
    }).then(()=>{
      setCatName('')
      setIconName('')
    })
  }

  useEffect(()=>{
    async function fatchData(){
      const {data} = await axios.get('/items/api/catagory/show')
      setItemCatagory(data)
    }
    fatchData()
  },[])

  return (
    <div className='main_content'>
      <Tabs
      defaultActiveKey="product"
      className="mb-3"
      >


      <Tab eventKey="catagory" title="Catagory Upload">
        <Form>
        <Form.Group className="mb-3">
          <Form.Label>Catagory Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Catagory" onChange={(e)=>setCatName(e.target.value)} value={catName}/>
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Catagory Icon Name</Form.Label>
          <Form.Control type="text" placeholder="Icon Name" onChange={(e)=>setIconName(e.target.value)} value={iconName}/>
        </Form.Group>
        <Button variant='secondary' style={{width:'100px'}} type="submit" onClick={handleCatagory}>
          Submit
        </Button>
      </Form>
      </Tab>

      <Tab eventKey="product" title="Product Upload">
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
              <Form.Select name='catagory' onChange={handleChange} >
                <option>Catagory</option>

                {itemCatagory.map((items)=>(
                  <option value={items._id}>{items.catagoryName}</option>
                ))}
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
      </Tab>


    </Tabs>
    </div>
  )
}

export default Dashboard