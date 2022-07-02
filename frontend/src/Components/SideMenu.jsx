import React,{useContext} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {Store} from '../Context'
import {useLocation } from 'react-router-dom'

const SideMenu = () => {
  const navigate = useNavigate()
  
  const location = useLocation()
  const {pathname} = location
  const splitLocation = pathname.split("/");


  const {state, dispatch} = useContext(Store)
  const {user} = state
  console.log(user)

  const handleLogout = ()=>{
    dispatch({type: 'USER_LOGOUT'})
    localStorage.removeItem('user') 
  }

  const handleLogin = ()=>{
    navigate('/login')
  }

    return (  
      <div class="wrapper">
        <div class="sidebar">
            <img src="./image/logo.png" style={{width:'50px',margin:'10px 10px 20px 20px'}}/>
            <ul>
                <li className={splitLocation[1] === "" ? "activeMenu" : ""}>
                  <Link to='/'><i class="fa-solid fa-house"></i>Home</Link>
                </li>
                <li className={splitLocation[1] === "menu" ? "activeMenu" : ""}>
                  <Link to='/menu'><i class="fa-solid fa-grip"></i>Menu</Link>
                </li>
                <li className={splitLocation[1] === "wallet" ? "activeMenu" : ""}>
                  <Link to='/wallet'><i class="fa-solid fa-wallet"></i>Wallet</Link>
                </li>
                <li className={splitLocation[1] === "history" ? "activeMenu" : ""}>
                  <Link to='/history'><i class="fa-solid fa-clock-rotate-left"></i>History</Link>
                </li>
                <li className={splitLocation[1] === "setting" ? "activeMenu" : ""}>
                  <Link to='/setting'><i class="fa-solid fa-gear"></i>Setting</Link>
                </li>
            </ul> 
            <div class="social_media">
              {user?
                <span  onClick={handleLogout}>
                  <i class="fa-solid fa-arrow-right-from-bracket"></i>Sign Out
                </span>
                :
                <span onClick={handleLogin}>
                  <i class="fa-solid fa-right-to-bracket"></i>Login
                </span>
               }
              
            </div>
        </div>
      </div>
    )
}

export default SideMenu