import './App.css';
import NavBar from './components/NavBar/NavBar';
import Itemlistcontainer from './components/Itemlistcontainer/Itemlistcontainer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Itemlistcontainer greeting='Tienda en Linea' />
      <br/>
      <br/>
    </div>
  );
}

export default App;
