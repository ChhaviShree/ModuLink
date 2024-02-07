import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Components/Footer/Footer';
import BuildYourHouse from './Pages/BuildYourHouse'
import VendorRegistration from './Pages/VendorRegistration'


function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/build-your-house" Component={BuildYourHouse}/>
        <Route path="/vendor-registration" Component={VendorRegistration}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
