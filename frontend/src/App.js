import {Histroy, Home, ItemDetails, Login, Menu, Registration, Setting, Wallet} from './Pages/pages'
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import SideMenu from './Components/SideMenu';
import Dashboard from './Components/Dashboard';
import Cart from './Components/Cart';
//CSS
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'rsuite/dist/rsuite.min.css';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import './index.css';

function App() {
  return (
    <BrowserRouter>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    <SideMenu/>
    <Cart/> 
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<ItemDetails />} />
          <Route path="/history" element={<Histroy />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
     
    </BrowserRouter>
  );
}

export default App;
