
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter ,Route,Routes} from "react-router-dom"
import Home from './Components/Home';
import Cart from './Components/Cart';


function App() {
 
  return (
   <BrowserRouter>
   
       <Header/>
       
        <Routes>
        <Route path='/cart' element={<Cart/>} />
   <Route exact path='/' element={<Home/>} />
    
   


    
    
    </Routes>
    
    </BrowserRouter>
    
  );

}

export default App;



