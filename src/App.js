import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React,{useState} from 'react';
import Cart from './components/Cart';
import PrimaryPage from './components/PrimaryPage';
import Sidenav from './components/Sidenav';


function App() {
  const [navToggle, setNavToggle] = useState(false);
  const [ addItem , setAddItem ] = useState([]);

  const CART = (Data) =>{
    setAddItem(Data)
  }
  console.log(addItem);

  const handleClick = () => {
    setNavToggle(!navToggle)
  };

  return (
    <Router basename='/'>
      <div className="MainContainer">
          <Sidenav navToggle={navToggle}  handleClick={handleClick}/>
          <Routes>
            <Route exact path='/' element={<PrimaryPage CART={CART} addItem={addItem} />}/>
            <Route exact path='/cart' element={<Cart navToggle={navToggle} handleClick={handleClick} addItem={addItem} />}/>
          </Routes>
      </div>
      
    </Router>
    
  );
}

export default App;
