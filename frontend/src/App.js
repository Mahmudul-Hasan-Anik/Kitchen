import {Histroy, Home, ItemDetails, Login, Menu, Registration, Setting, Wallet,Dashboard,ShowCart} from './Pages/pages'
import {BrowserRouter,Routes,Route,} from "react-router-dom";
//CSS
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'rsuite/dist/rsuite.min.css';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import './index.css';
import SearchDataShow from './Components/Search/SearchDataShow';

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
          <Route path="/showcart" element={<ShowCart />} />
          <Route path="/search/:id" element={<SearchDataShow />} />
        </Routes>
      </div>
     
    </BrowserRouter>
  );
}

export default App;
