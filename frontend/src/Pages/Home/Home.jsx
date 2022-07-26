import React, { useEffect,useState } from 'react'
import axios from 'axios'
import Layout from '../../Components/Layout';
import SearchMenu from '../../Components/Search/SearchMenu';
import Pagination from '../../Components/Pagination';

const Home = () => {
  const [values, setValues] = useState([])
  const [inputText, setInputText] = useState('')

  useEffect(()=>{
    async function fatchData(){
      const {data} = await axios.get('/menu/api/items/all')
      setValues(data)
    }
    fatchData()
  },[])


  const handleChange = (e)=>{
      const lowerCase = e.target.value.toLowerCase()
      setInputText(lowerCase)
  }

  const filterData = values.filter((item)=>{
    if(inputText === ''){
      return ''
    }else{
      return item.title.toLowerCase().includes(inputText)
    }
  })

  return (
    <Layout title='Home' className='main_content'>
      <SearchMenu change={handleChange} filterItem={filterData}/>
      <Pagination filterItem={filterData}/>
    </Layout>
  )
}

export default Home