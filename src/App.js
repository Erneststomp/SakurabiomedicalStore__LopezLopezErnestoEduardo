import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        {/* <ItemListContainer/> */}
        <ItemDetailContainer/>
        <br/>
        <br/>
      </div>
    </BrowserRouter>
  );
}

export default App;
