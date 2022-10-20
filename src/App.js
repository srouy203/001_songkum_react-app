import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Screen/Home';
import Shop from './Screen/Shop';
import News from './Screen/News';
import Profile from './Screen/Profile';
import ShopWomenScreen from './Screen/Shop women screen';
import ShopMenScreen from './Screen/Shop men screen';
import Shopdetail from './Screen/Shop detail screen';
import Login from './Screen/Login';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/profile' element={<Profile/>}/>

          {/* shop navbar */}
          <Route path='/shop-men' element={<ShopMenScreen/>}></Route>
          <Route path='/shop-women' element={<ShopWomenScreen/>}></Route>
          {/* Shopdetail */}
          <Route path='/shop-detail' element={<Shopdetail/>}/>
          {/* login */}
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>
        

    </div>
  );
}

export default App;
