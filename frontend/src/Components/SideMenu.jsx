import React,{useContext} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {Store} from '../Context'

const SideMenu = () => {
  const navigate = useNavigate()
  const {state, dispatch} = useContext(Store)
  const {user} = state

  const handleLogout = ()=>{
    dispatch({type: 'USER_LOGOUT'})
    localStorage.removeItem('user')
    navigate('/login')
    
  }

    return (  
      <div class="wrapper">
        <div class="sidebar">
            <img src="./image/logo.png" style={{width:'50px',margin:'10px 10px 20px 20px'}}/>
            <ul>
                <li>
                  <Link to='/'><i class="fa-solid fa-house"></i>Home</Link>
                </li>
                <li>
                  <Link to='/menu'><i class="fa-solid fa-grip"></i>Menu</Link>
                </li>
                <li>
                  <Link to='/wallet'><i class="fa-solid fa-wallet"></i>Wallet</Link>
                </li>
                <li>
                  <Link to='/history'><i class="fa-solid fa-clock-rotate-left"></i>History</Link>
                </li>
                <li>
                  <Link to='/setting'><i class="fa-solid fa-gear"></i>Setting</Link>
                </li>
            </ul> 
            <div class="social_media">
              <a href="#" onClick={handleLogout}>
                <i class="fa-solid fa-arrow-right-from-bracket"></i>Sign Out
              </a>
            </div>
        </div>
      </div>
    )
}

export default SideMenu