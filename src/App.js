import './App.css';
import NavBar from './components/NavBar/NavBar';
import Itemlistcontainer from './components/Itemlistcontainer/Itemlistcontainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Itemlistcontainer greeting='Hola'/>
    </div>
  );
}

export default App;
