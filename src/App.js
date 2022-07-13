import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NotFoud from './components/NotFound/NotFoud';
import Shopprovider from './components/Context/context';
import Cart from './components/Cart/Cart';


function App() {
  return (
    <Shopprovider>
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}></Route>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}></Route>
            <Route path='/detail/:productId' element={<ItemDetailContainer/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='*' element={<NotFoud/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Shopprovider>
  );
}

export default App;
